import Image from 'next/image';
import { teamOsddin } from '@/lib/data';

export default function TeamPage() {
  const chiefMentorCategory = teamOsddin.find(category => category.heading === 'Chief Mentor');
  const piCategory = teamOsddin.find(category => category.heading === 'Principal Investigators');
  const coCategory = teamOsddin.find(category => category.heading === 'Co-Investigator');
  const advisorsCategory = teamOsddin.find(category => category.heading === 'Scientific Advisors');

  const otherCategories = teamOsddin.filter(
    category =>
      category.heading !== 'Chief Mentor' &&
      category.heading !== 'Principal Investigators' &&
      category.heading !== 'Co-Investigator' &&
      category.heading !== 'Scientific Advisors'
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

  return (
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

      {otherCategories.map(category => (
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
}