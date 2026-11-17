'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { teamOsddin } from '@/lib/data';

type Contributor = {
  photoUrl: string;
  name: string;
  email: string;
  institution: string;
  location: string;
  role: string;
  otherRole: string;
  work: string;
  expertise: string[];
  otherExpertise: string;
  areas: string;
  problem: string;
  participation: string[];
  timeCommitment: string;
  helpNeeded: string;
  links: string;
};

/* ---------- Summary pieces (same look as the signup "thank you" summary) ---------- */

// Turns http(s) URLs inside free text into safe clickable links
function LinkText({ value }: { value: string }) {
  const parts = value.split(/(https?:\/\/[^\s]+)/g);
  return (
    <span className='whitespace-pre-wrap break-words'>
      {parts.map((p, i) =>
        /^https?:\/\//.test(p) ? (
          <a
            key={i}
            href={p}
            target='_blank'
            rel='noopener noreferrer'
            className='text-teal-600 underline underline-offset-2'
          >
            {p}
          </a>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </span>
  );
}

function SText({ value }: { value: string }) {
  return value?.trim() ? (
    <LinkText value={value} />
  ) : (
    <span className='text-slate-400'>Not provided</span>
  );
}

function SChips({ items }: { items: string[] }) {
  return items.length ? (
    <ul className='flex flex-wrap gap-2'>
      {items.map((i) => (
        <li
          key={i}
          className='rounded-full border border-teal-200 bg-teal-50 px-4 py-1 text-base text-teal-700'
        >
          {i}
        </li>
      ))}
    </ul>
  ) : (
    <span className='text-slate-400'>Not provided</span>
  );
}

function SRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className='py-4'>
      <dt className='text-sm font-bold uppercase tracking-widest text-teal-500'>{label}</dt>
      <dd className='mt-2 text-lg leading-relaxed text-slate-700'>{children}</dd>
    </div>
  );
}

function SHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className='mb-1 mt-8 first:mt-0'>
      <h3 className='text-2xl font-semibold text-slate-900'>{children}</h3>
      <div className='mt-2 h-px w-10 bg-teal-600' />
    </div>
  );
}

function ContributorDetails({ c, onClose }: { c: Contributor; onClose: () => void }) {
  const role = c.role === 'Other' ? `Other: ${c.otherRole}` : c.role;
  const expertise = c.expertise.map((x) => (x === 'Other' ? `Other: ${c.otherExpertise}` : x));

  return (
    <div
      className='fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-900/60 p-4 sm:p-8'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-label={`${c.name} details`}
    >
      <div
        className='relative my-4 w-full max-w-4xl overflow-hidden rounded-2xl border border-teal-200 bg-white p-8 text-left shadow-lg sm:p-10 lg:p-12'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='absolute left-0 top-0 h-[3px] w-full bg-teal-500' />

        <button
          type='button'
          onClick={onClose}
          aria-label='Close'
          className='absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900'
        >
          ×
        </button>

        <div className='text-center'>
          <h2 className='text-3xl font-medium tracking-tight text-slate-900'>
            <span className='text-teal-600'>{c.name}</span>
          </h2>
          <div className='mx-auto mt-3 h-px w-16 bg-teal-600' />
        </div>

        <dl className='mt-8 divide-y divide-slate-100'>
          <SHeading>About you</SHeading>
          <div className='grid gap-8 py-4 md:grid-cols-[1fr_1fr] md:items-stretch'>
            <div className='relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 md:aspect-auto'>
              {c.photoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={c.photoUrl}
                  alt={`${c.name} profile`}
                  referrerPolicy='no-referrer'
                  className='absolute inset-0 h-full w-full object-cover'
                />
              ) : (
                <div className='absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-400'>
                  <svg viewBox='0 0 24 24' className='h-16 w-16' fill='none' stroke='currentColor' strokeWidth='1.5' aria-hidden='true'>
                    <circle cx='12' cy='8' r='4' />
                    <path d='M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8' strokeLinecap='round' />
                  </svg>
                  <span className='text-base'>No photo provided</span>
                </div>
              )}
            </div>

            <div className='divide-y divide-slate-100 [&>div:first-child]:pt-0 [&>div:last-child]:pb-0'>
              <SRow label='Name'><SText value={c.name} /></SRow>
              <SRow label='Email'>
                {c.email ? (
                  <a href={`mailto:${c.email}`} className='break-all text-teal-600 underline underline-offset-2'>
                    {c.email}
                  </a>
                ) : (
                  <span className='text-slate-400'>Not provided</span>
                )}
              </SRow>
              <SRow label='Institution / organisation'><SText value={c.institution} /></SRow>
              <SRow label='Location'><SText value={c.location} /></SRow>
              <SRow label='Current role'><SText value={role} /></SRow>
            </div>
          </div>
          <SRow label='Field and current work'><SText value={c.work} /></SRow>

          <SHeading>Expertise and interests</SHeading>
          <SRow label='Relevant expertise'><SChips items={expertise} /></SRow>
          <SRow label='Health or research areas of interest'><SText value={c.areas} /></SRow>
          <SRow label='Specific problem, project, dataset or question'><SText value={c.problem} /></SRow>

          <SHeading>How would you like to contribute?</SHeading>
          <SRow label='How you would like to participate'><SChips items={c.participation} /></SRow>
          <SRow label='Realistic time commitment'><SText value={c.timeCommitment} /></SRow>
          <SRow label='What would help you contribute effectively'><SText value={c.helpNeeded} /></SRow>
          <SRow label='Relevant links'><SText value={c.links} /></SRow>
        </dl>
      </div>
    </div>
  );
}

type Status = 'loading' | 'sheet' | 'fallback';

// Display order of the role sections. Must match the role options in the signup form.
const ROLE_ORDER = [
  'Faculty / PI',
  'Clinician',
  'Scientist / Researcher',
  'Postdoctoral Researcher',
  'PhD Student',
  'Master’s Student',
  'Undergraduate Student',
  'Engineer / Industry Professional',
  'Other',
];

// Treat straight and curly apostrophes the same when matching roles
const normalizeRole = (r: string) => r.replace(/'/g, '’').trim();

// Anything not in ROLE_ORDER (e.g. a hand-edited sheet cell) goes under "Other"
const roleKey = (r: string) => {
  const n = normalizeRole(r);
  return ROLE_ORDER.includes(n) ? n : 'Other';
};

const SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

export default function TeamPage() {
  const [status, setStatus] = useState<Status>('loading');
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [selected, setSelected] = useState<Contributor | null>(null);

  // Close the details popup with Escape and lock page scroll while it is open
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected]);

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
    return (
      <div
        key={`${c.name}-${index}`}
        role='button'
        tabIndex={0}
        aria-label={`View ${c.name}'s details`}
        onClick={() => setSelected(c)}
        onKeyDown={(e) => {
          if (e.target !== e.currentTarget) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setSelected(c);
          }
        }}
        className='flex min-h-81 w-85 cursor-pointer flex-col items-center rounded-lg border p-4 transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500'
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

        {/* flex-1 fills the space under the photo; justify-center centres the text in it */}
        <div className='flex w-full flex-1 flex-col items-center justify-center text-center'>
          <h3 className='text-xl font-semibold'>{c.name}</h3>
          {c.institution && <p className='text-gray-600 text-sm'>{c.institution}</p>}
          {c.email && (
            <a
              href={`mailto:${c.email}`}
              onClick={(e) => e.stopPropagation()}
              className='break-all underline'
            >
              {c.email}
            </a>
          )}
        </div>
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

  // Always-static section: Chief Mentor + Scientific Advisors (shown in every state)
  const topStatic = (
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

    </>
  );

  const staticTeam = (
    <>
      {topStatic}

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

  /* ---------------- Render ---------------- */
  if (status === 'loading') {
    return (
      <>
        {topStatic}
        <p className='mt-10 text-center text-lg text-gray-600' role='status'>
          Loading contributors…
        </p>
      </>
    );
  }

  if (status === 'sheet') {
    // Group by role, keeping the order in ROLE_ORDER and skipping roles with no members
    const groups = ROLE_ORDER.map((role) => ({
      role,
      members: contributors.filter((c) => roleKey(c.role) === role),
    })).filter((g) => g.members.length > 0);

    return (
      <>
        {topStatic}

        {groups.map((group) => (
          <div key={group.role} className='mb-4'>
            <div id={group.role}>
              <h2 className='mb-4 text-center font-semibold text-3xl text-primary'>{group.role}</h2>
              <div className='flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row'>
                {group.members.map(renderContributor)}
              </div>
            </div>
            <hr className='mt-4' />
          </div>
        ))}

        {selected && <ContributorDetails c={selected} onClose={() => setSelected(null)} />}
      </>
    );
  }

  return staticTeam;
}