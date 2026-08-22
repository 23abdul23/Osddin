import Link from 'next/link';
import Image from 'next/image';


const visionItems = [
  { number: '01', title: 'Computational Resources' },
  { number: '02', title: 'Open Source Promotion' },
  { number: '03', title: 'Human Resource Development', description: 'Training researchers and developers to contribute and innovate in drug discovery.' },
  { number: '04', title: 'Need Based Research', description: 'Research driven by real healthcare needs and long term societal impact.' },
];

function VisionDescription({ number }: { number: string }) {
  if (number === '01') return (
    <><Link href="/osddin/crdd" className="font-medium text-teal-600 hover:underline">CRDD</Link>{' '}provides computational tools and resources for in silico drug discovery.</>
  );
  if (number === '02') return (
    <>Open-source cheminformatics resources published on{' '}<a href="https://github.com/raghavagps" target="_blank" rel="noopener noreferrer" className="font-medium text-teal-600 hover:underline">GitHub</a>{' '}and{' '}<a href="https://zenodo.org/communities/raghavagps/" target="_blank" rel="noopener noreferrer" className="font-medium text-teal-600 hover:underline">Zenodo</a>.</>
  );
  return null;
}

const objectives = [
  {
    title: "Solving Real World Problems & Need Based Research",
    desc: "Apply data science to real health challenges through long term, standalone, community driven software.",
  },
  {
    title: "Learning while Training · Human Resource Development",
    desc: "Hands on training on cutting edge health data analytics — producing developers, not just customers.",
  },
  {
    title: "Interdisciplinary Collaboration",
    desc: "Diverse disciplines tackling health challenges together across biology, clinic, and data science.",
  },
  {
    title: "Innovative Projects & Computational Resources",
    desc: "High risk, open source projects on open infrastructure built for the global research community.",
  },
  {
    title: "Dissemination & Open Source Promotion",
    desc: "Open access publication, community channels, and freely accessible cheminformatics & pharmacoinformatics.",
  },
  {
    title: "IP & Commercialization",
    desc: "Patents and partnerships with industry leaders to translate research into impact.",
  },
];



const osddinWorkstreams = [
  {
    title: 'ADR & Toxicity Analysis',
    desc: 'Predictive AI maps drug–target–pathway interactions to uncover mechanistic drivers of adverse drug reactions.',
  },
  {
    title: 'Clinical Trial Rescue',
    desc: 'Post market and failed trial data analysis stratifies responsive patient subgroups for precision trial redesign.',
  },
  {
    title: 'Drug Repurposing',
    desc: 'Knowledge graph and network biology analytics identify new indications for already approved compounds.',
  },
  {
    title: 'Target & Biomarker Discovery',
    desc: 'Autonomous AI integrates multi omic and clinical data to identify biologically validated targets.',
  },
];

const coreTeam = [
  {
    name: 'Prof. Samir Brahmachari',
    role: 'CORE TEAM',
    src: '/image/team/samirbrahmachari.jpg',   
  },
  {
    name: 'Dr. Gyan Srivastava',
    role: 'CORE TEAM',
    src: '/image/team/gpsrivastava.jpg',    
  },
  {
    name: 'Prof. Vijay Tiwari',
    role: 'CORE TEAM',
    src: '/image/team/vijaytiwari.png',        
  },
];

const associateMembers = [
  {
    name: 'Jitendra Badhai',
    role: 'ASSOCIATE MEMBER',
    src: '/image/osdd/jitendrabadhai.jpg',
  },
];


export default function VisionPage() {
  return (
    <div className="bg-[#eef3f2] text-center">

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <div className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-2 text-md font-medium tracking-[0.3em] text-slate-600 uppercase">
              Our Vision
            </div>

            <h1 className="mt-8 text-4xl font-medium tracking-tight text-slate-900">
              Health Data Science{' '}
              <span className="text-teal-600">Academy</span>
            </h1>

            <div className="mx-auto mt-6 h-px w-24 bg-teal-600" />
          </div>

          {/* <div className="mx-auto mt-16 max-w-5xl text-center"> */}
<div className="mt-8 grid grid-cols-1 gap-8 text-left lg:grid-cols-12">
  {/* Left: Text */}
  <div className="flex h-[420px] flex-col justify-center lg:col-span-5">
    <p className="text-xl leading-[1.8] text-slate-500">
      Our vision is to solve complex health problems using data-driven approaches
      while empowering a new generation of health data scientists. Students will
      work collaboratively in interdisciplinary teams with internationally
      acclaimed scientists and use existing data to make impactful contributions
      to the field.

  
      By combining healthcare, data science, technology, and research, we create
      an environment where students can tackle real-world challenges and turn
      complex data into meaningful insights.
    </p>
  </div>

  {/* Right: Image */}
  <div className="group relative h-[420px] w-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm lg:col-span-7">
    <Image
      src="/image/healthFlow.png"
      alt="OSDDIN health data research workflow"
      fill
      className="object-contain p-2 transition-transform duration-300 ease-out group-hover:scale-105"
    />
  </div>
</div>
          
            <p className="text-2xl mt-9 leading-relaxed text-slate-500">
              <span className="font-semibold text-teal-600">OSDDIN</span> is a first step towards this vision
              turning open biomedical data into a foundation the global research community can build on.
            </p>
          {/* </div> */}

        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 text-center">

          <div className="inline-flex rounded-full border border-slate-300 bg-[#eef3f2] px-6 py-2 text-md font-medium tracking-[0.3em] text-slate-600 uppercase">
            OSDDIN
          </div>

          <h2 className="mt-8 text-3xl font-semibold tracking-tight text-slate-900">
            A unified ecosystem for{' '}
            <span className="text-teal-600">open drug discovery.</span>
          </h2>

          <div className="mx-auto mt-6 h-px w-24 bg-teal-600" />

     
  {/* Left: Text */}
  <div className="flex mt-6 flex-col justify-center">
    <p className="text-xl leading-relaxed text-slate-500">
      OSDDIN is a web-based platform born from the Open Source Drug Discovery
      (OSDD) initiative, delivering curated biomedical data from hundreds of
      sources as an interconnected knowledge graph for open-source drug
      discovery. Building on the legacy of{' '}
      <span className="font-medium text-teal-600">Science 3.0</span>, it
      advances toward{' '}
      <span className="font-medium text-teal-600">Science 4.0</span>, where
      explainable AI and autonomous agents integrate biomedical knowledge to
      accelerate scientific discovery.
    </p>
  </div>



          {/* Goal */}
          <p className="mx-auto mt-6 max-w-5xl text-lg leading-relaxed text-slate-500">
The platform provides a unified AI-driven discovery engine supporting multiple stages of drug discovery through a common knowledge graph and AI reasoning framework. It transforms fragmented biomedical knowledge from databases, publications, and institutional silos into testable therapeutic hypotheses, helping researchers uncover disease mechanisms, therapeutic targets, and clinically relevant biomarkers faster and more affordably.

          </p>

        <div className="mt-12 group relative w-full h-[520px] lg:h-[560px] rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm">
  <Image
    src="/image/osddinGoal.png"
    alt="OSDDIN Research Platform applications and biomedical discovery workflow"
    fill
    className="object-contain p-3 transition-transform duration-300 ease-out group-hover:scale-105"
  />
</div>


        
          <div className="mt-12">
            <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-3">
              How it works
            </p>
            <h3 className="text-2xl font-semibold text-slate-900 mb-10">
              Four workstreams, one common{' '}
              <span className="text-teal-600">knowledge graph.</span>
            </h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
              {osddinWorkstreams.map((ws, i) => (
                <div
                  key={ws.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 hover:border-teal-300 bg-[#eef3f2] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-teal-500 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  <p className="text-xs font-bold text-teal-500 mb-3 tracking-widest uppercase">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h4 className="text-base font-semibold text-slate-900 mb-2">{ws.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-500">{ws.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    
  <section className="py-20 bg-[#eef3f2]">
        <div className="mx-auto max-w-6xl px-6">

      
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-2 text-md font-medium tracking-[0.3em] text-slate-600 uppercase">
              Health Data Science Academy
            </div>
          </div>

          <div className="mb-16 text-center">
            <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-3 text-center">
              A Non-Profit Initiative
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 leading-snug mb-6 text-center">
              Transforming health data science through{' '}
              <span className="text-teal-600">innovative analytics research.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 text-left lg:grid-cols-2">
            {/* Left: Text */}
            <div className="flex h-[360px] flex-col justify-center">
              <p className="text-xl leading-relaxed text-slate-500">
                The exponential growth of health data electronic health records, wearable devices, genomic sequencing,
                and digital health technologies generates vast data daily. While this holds the potential to
                revolutionise personalised medicine and improve patient outcomes, managing and analysing it effectively
                remains a significant challenge.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                Addressing the data deluge requires coordinated efforts in data governance, advanced analytics, machine
                learning, and scalable infrastructure for storage, processing, and secure sharing of health data.
              </p>
            </div>

            {/* Right: Image */}
            <div className="group relative h-[360px] w-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
              <Image
                src="/image/dataCircle.png"
                alt="A single patient produces 80+ megabytes of medical data every year"
                fill
                className="object-contain p-4 transition-transform duration-300 ease-out group-hover:scale-110"
              />
            </div>
          </div>

     
          <div className="mt-20">
            <div className="text-center mb-6">
              <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-2">Programme Structure</p>
              <h3 className="text-2xl font-semibold text-slate-900">How the Academy is <span className="text-teal-600">organised.</span></h3>
              <div className="mx-auto mt-3 h-px w-24 bg-teal-600 mb-10" />
            </div>
            <div className="relative w-full h-[420px] lg:h-[540px] rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm mb-12">
              <Image
                src="/image/orgChart.png"
                alt="Academy programme structure: Advisory Board → Leadership Team → Experts → Scientists → Programme Manager → Problem Groups"
                fill
                className="object-contain p-6"
              />
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl leading-relaxed text-slate-500">
                Guided by an international advisory board and a local leadership team of leading experts in
                Biology, Clinic, and Data Science we are committed to making data driven healthcare
                a reality for all.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center mb-14">
            <div className="inline-flex rounded-full border border-slate-300 bg-[#eef3f2] px-6 py-2 text-md font-medium tracking-[0.3em] text-slate-600 uppercase mb-8">
              Objectives
            </div>
            <h2 className="text-3xl font-semibold text-slate-900">
              What we set out to{' '}
              <span className="text-teal-600">achieve.</span>
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-teal-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 hover:border-teal-300 bg-[#eef3f2] p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-teal-500 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <p className="text-xs font-bold text-teal-500 mb-3 tracking-widest uppercase">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{obj.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}