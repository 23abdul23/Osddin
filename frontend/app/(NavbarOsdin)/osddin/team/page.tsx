'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { teamOsddin } from '@/lib/data';

type Contributor = {
  photoUrl: string;
  name: string;
  role: string;
  otherRole: string;
  institution: string;
  email: string;
};

type Status = 'loading' | 'sheet' | 'fallback';

const SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

export default function TeamPage() {
  const [status, setStatus] = useState<Status>('loading');
  const [contributors, setContributors] = useState<Contributor[]>([]);

  // Fetch approved contributors from the Google Sheet.
  // On any failure (or an empty sheet) we fall back to the static team data below.
  useEffect(() => {
    if (!SCRIPT_URL) {
      setStatus('fallback');
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    fetch(`${SCRIPT_URL}?action=list`, { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error('bad status');
        const data = await res.json(); // throws if Apps Script returned HTML
        if (!data.ok || !Array.isArray(data.contributors)) throw new Error('bad payload');
        return data.contributors as Contributor[];
      })
      .then((list) => {
        if (list.length === 0) {
          setStatus('fallback');
        } else {
          setContributors(list);
          setStatus('sheet');
        }
      })
      .catch(() => setStatus('fallback'))
      .finally(() => clearTimeout(timeout));

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  /* ---------------- Card for a contributor coming from the sheet ---------------- */
  const renderContributor = (c: Contributor, index: number) => {
    const role = c.role === 'Other' ? c.otherRole : c.role;
    return (
      <div
        key={`${c.name}-${index}`}
        className='flex min-h-81 w-85 flex-col items-center rounded-lg border p-4 transition-shadow hover:shadow-lg'
      >
        {c.photoUrl ? (
          // Plain <img>: photos are external Google Drive URLs (static export has no image optimizer)
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={c.photoUrl}
            alt={c.name}
            width={170}
            height={170}
            loading='lazy'
            referrerPolicy='no-referrer'
            className='aspect-square h-[170px] w-[170px] rounded-full border border-primary object-cover p-2 hover:shadow-md'
          />
        ) : (
          <div className='flex aspect-square h-[170px] w-[170px] items-center justify-center rounded-full border border-primary p-2 text-5xl font-semibold text-primary'>
            {c.name.charAt(0).toUpperCase()}
          </div>
        )}
        <center>
          <h3 className='mt-2 text-xl font-semibold'>{c.name}</h3>
          {role && <p className='text-gray-600 text-sm'>{role}</p>}
          {c.institution && <p className='text-gray-600 text-sm'>{c.institution}</p>}
          {c.email && (
            <a href={`mailto:${c.email}`} className='break-all underline'>
              {c.email}
            </a>
          )}
        </center>
      </div>
    );
  };

  /* ---------------- Fallback: the original static team page ---------------- */
  const chiefMentorCategory = teamOsddin.find((category) => category.heading === 'Chief Mentor');
  const piCategory = teamOsddin.find((category) => category.heading === 'Principal Investigators');
  const coCategory = teamOsddin.find((category) => category.heading === 'Co-Investigator');
  const advisorsCategory = teamOsddin.find((category) => category.heading === 'Scientific Advisors');

  const otherCategories = teamOsddin.filter(
    (category) =>
      category.heading !== 'Chief Mentor' &&
      category.heading !== 'Principal Investigators' &&
      category.heading !== 'Co-Investigator' &&
      category.heading !== 'Scientific Advisors',
  );

  const renderMember = (person: {
    name: string;
    title: string;
    email: string;
    link?: string;
    image: string;
  }) => (
    <div
      key={person.name}
      className='flex min-h-81 w-85 flex-col items-center rounded-lg border p-4 transition-shadow hover:shadow-lg'
    >
      <Image
        src={person.image}
        alt={person.name}
        width={170}
        height={170}
        className='aspect-square rounded-full border border-primary object-cover p-2 hover:shadow-md'
      />
      <center>
        <a href={person.link}>
          <h3
            className={`text-xl ${person.link && 'underline-offset-4 transition-colors hover:text-accent hover:underline'} mt-2 font-semibold`}
          >
            {person.name}
          </h3>
        </a>
        {person.title &&
          person.title.split('\n').map((title, _index) => (
            <p key={title} className='text-gray-600 text-sm'>
              {title}
            </p>
          ))}
        {person.email && (
          <a href={`mailto: ${person.email}`} className='underline'>
            {person.email}
          </a>
        )}
      </center>
    </div>
  );

  const staticTeam = (
    <>
      {chiefMentorCategory && (
        <div className='mb-4 mt-14'>
          <div id={chiefMentorCategory.heading}>
            <h2 className='mb-4 text-center font-semibold text-3xl text-primary'>{chiefMentorCategory.heading}</h2>
            <div className='flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row'>
              {chiefMentorCategory.members.map(renderMember)}
            </div>
          </div>
          <hr className='mt-4' />
        </div>
      )}

      {advisorsCategory && (
        <div className='mb-4 '>
          <div id={advisorsCategory.heading}>
            <h2 className='mb-4 text-center font-semibold text-3xl text-primary'>{advisorsCategory.heading}</h2>
            <div className='flex flex-col flex-wrap items-center justify-center gap-6 md:flex-row'>
              {advisorsCategory.members.map(renderMember)}
            </div>
          </div>
          <hr className='mt-4' />
        </div>
      )}

      {piCategory && (
        <div className='mb-4 '>
          <div id={piCategory.heading}>
            <h2 className='mb-4 text-center font-semibold text-3xl text-primary'>Principal Investigators</h2>
            <div className='flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row'>
              {piCategory.members.map(renderMember)}
            </div>
          </div>
          <hr className='mt-4' />
        </div>
      )}

      {coCategory && (
        <div className='mb-4 '>
          <div id={coCategory.heading}>
            <h2 className='mb-4 text-center font-semibold text-3xl text-primary'>Co-Investigator</h2>
            <div className='flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row'>
              {coCategory.members.map(renderMember)}
            </div>
          </div>
          <hr className='mt-4' />
        </div>
      )}

      {otherCategories.map((category) => (
        <div key={category.heading} className='mb-4 '>
          <div id={category.heading}>
            <h2 className='mb-4 text-center font-semibold text-3xl text-primary'>{category.heading}</h2>
            <div className='flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row'>
              {category.members.map(renderMember)}
            </div>
          </div>
          <hr className='mt-4' />
        </div>
      ))}
    </>
  );

  
  if (status === 'loading') {
    return (
      <p className='mt-24 text-center text-lg text-gray-600' role='status'>
        Loading team…
      </p>
    );
  }

  if (status === 'sheet') {
    return (
      <div className='mb-4 mt-14'>
        <h2 className='mb-4 text-center font-semibold text-3xl text-primary'>Contributors</h2>
        <div className='flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row'>
          {contributors.map(renderContributor)}
        </div>
        <hr className='mt-4' />
      </div>
    );
  }

  return staticTeam;
}