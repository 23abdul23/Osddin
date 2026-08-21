'use client';

import Link from 'next/link';
import AnimatedNetworkBackground from '@/components/AnimatedNetworkBackground';
import { Button } from '@/components/ui/button';
import { databaseStats } from '@/lib/data';


export default function Home() {
  return (
    <>
    <div className='relative min-h-screen  overflow-hidden bg-teal-800 text-white'>

      
      <AnimatedNetworkBackground
        lineWidth={5}
        nodeSize={7}
        className='absolute inset-0 opacity-15'
      />

      <div
        className='absolute inset-0 opacity-10'
        style={{
          backgroundImage: `
            linear-gradient(to right, white 0.1px, transparent 1px),
            linear-gradient(to bottom, white 0.1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.45)_100%)]' />

      <main className='relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24'>

        <div className='max-w-5xl text-center'>
<h1 className="mx-auto max-w-6xl font-medium leading-[1.15] text-3xl md:text-4xl lg:text-4xl">
  Transforming fragmented biomedical data into{' '}
  <span className="bg-linear-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">
    connected intelligence
  </span>{' '}
  for next-generation drug discovery
</h1>
         <p className="mx-auto mt-8 max-w-7xl text-base text-slate-300 lg:text-lg">
  OSDDIN integrates biological entities like diseases, phenotypes, genes, proteins, pathways, drugs, and their relationships into a unified biomedical knowledge graph empowering researchers to transform therapeutic knowledge into discoveries and discoveries into real-world healthcare solutions.
</p>

<div className='mt-12 flex flex-wrap justify-center gap-3'>
  <Link href='https://tbep.osdin.bio/explore' target='_blank'>
    <Button
      size='lg'
      className='h-12 rounded-lg bg-teal-500 px-7 text-base hover:bg-teal-400'
    >
      Explore Platform →
    </Button>
  </Link>
 
  <Link href='/osddin/vision'>
  <Button
    variant='outline'
    size='lg'
    className='h-12 rounded-lg border-slate-500 bg-transparent px-7 text-base text-white'
  >
    Vision
  </Button>
  </Link>
</div>
        </div>


        <div className='mt-24 w-full max-w-6xl'>
          <div className='relative'>
            <div className='h-px bg-teal-500/30' />

            <div className='absolute inset-0 flex justify-between'>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className='-mt-2 h-4 w-4 rounded-full bg-teal-400'
                />
              ))}
            </div>
          </div>

          <p className='mt-8 text-center text-xs tracking-[0.4em] text-slate-400 uppercase'>
            Platform At A Glance
          </p>
        </div>


<div className='mt-12 w-[95%] max-w-[1700px]'>

    <div className='overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl'>
      <div className='border-b border-white/10 px-6 py-4 text-center'>
        <p className='text-md font-medium tracking-wide text-white'>
          Biomedical Knowledge Graph
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'>
        {[
          { count: '36K+', label: 'Diseases' },
          { count: '190K+', label: 'Biomedical Entities' },
          { count: '21.8M+', label: 'Relationships' },
          { count: '13,42,200+', label: 'Protein Interaction' },
          { count: '36', label: 'Relationship Types' },
          { count: '10', label: 'Entity Categories' },
        ].map((item) => (
          <div
            key={item.label}
            className='flex h-24 flex-col items-center justify-center px-4 py-2 text-center'
          >
            <div className='font-semibold text-xl lg:text-2xl'>{item.count}</div>
            <div className='mt-1 text-xs tracking-wider text-slate-400 uppercase'>{item.label}</div>
          </div>
        ))}
      </div>
    </div>

  <p className='mt-2 mb-10 text-right text-xs text-slate-400'>
    * After removing redundant connections
  </p>
</div>
      </main>
    
    </div>


      <section className="bg-[#f1f6f5] py-28">
  <div className="mx-auto max-w-7xl px-6">

    
    <div className="text-center">
      <div className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-2 text-xs tracking-[0.3em] text-slate-600 uppercase">
        Platform Modules
      </div>

      <h2 className="mt-8 text-5xl font-semibold tracking-tight text-slate-900">
        Modules, one{" "}
        <span className="text-teal-600">
          integrated knowledge fabric.
        </span>
      </h2>

      <div className="mx-auto mt-8 h-px w-32 bg-teal-500" />
    </div>
    

<div className="group relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-[20px] border border-slate-200 bg-white backdrop-blur-xl shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]">


  <div className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-teal-900 transition-transform duration-700 ease-out group-hover:scale-x-100" />

  <div className="grid lg:grid-cols-[1.1fr_1fr]">

    <div className="flex items-center justify-center  p-6">
      <img
        src="/image/knowledge-graph.png"
        alt="Knowledge Graph"
        className="w-full max-w-[450px] object-contain transition-all duration-700 group-hover:scale-105"
      />
    </div>

    <div className="flex flex-col justify-center  p-8 lg:p-10">

      <p className="text-[14px] uppercase tracking-[0.3em] text-teal-600">
        Module 01
      </p>

      <h3 className="mt-3 text-3xl font-semibold text-slate-900">
        Knowledge Base
      </h3>



      <p className="mt-6 text-base leading-8 text-slate-600">
        Transforms fragmented biomedical knowledge from databases, publications, and institutional silos into an interconnected knowledge graph. By linking genes, diseases, drugs, and pathways, it enables researchers to uncover relationships and generate new therapeutic hypotheses.

      </p>

      <div className="mt-8 flex items-center gap-6">
        <Link
          href='https://tbep.osdin.bio/explore' target='_blank'
          className="inline-flex items-center gap-2 text-base font-medium text-teal-700 transition-all duration-300 hover:gap-4"
        >
          Explore module →
        </Link>

        <Link
          href="/table"
          className="inline-flex items-center gap-2 text-base font-medium text-teal-700 transition-all duration-300 hover:gap-4"
        >
          Schema overview →
        </Link>
      </div>

    </div>
  </div>
</div>


<div className="group relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-[20px] border border-slate-200 bg-white backdrop-blur-xl shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]">

  <div className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-teal-900 transition-transform duration-700 ease-out group-hover:scale-x-100" />

  <div className="grid lg:grid-cols-[1.1fr_1fr]">

  <div className="flex flex-col justify-center bg-white p-8 lg:p-10">

  <p className="text-[14px] uppercase tracking-[0.3em] text-teal-600">
    Module 02
  </p>

  <h3 className="mt-3 text-3xl font-semibold text-slate-900">
  OSDDIN Research Platform
  </h3>


  <p className="mt-6 text-base leading-8 text-slate-600">
  An iterative four-stage AI-powered workflow transforms raw biomedical data into structured knowledge graphs, interactive visualizations, analytical insights, and explainable reasoning. It helps researchers uncover biological relationships, identify potential clinical targets and biomarkers, and generate therapeutic hypotheses faster.

  </p>

  <Link
    href='https://tbep.osdin.bio/explore' target='_blank'
    className="mt-8 inline-flex items-center gap-2 text-base font-medium text-teal-700 transition-all duration-300 hover:gap-4"
  >
    Explore module →
  </Link>

</div>

    <div className="flex items-center justify-center bg-white  p-3">
      <img
        src="/image/osddinModule2.png"
        alt="OSDDIN Research Platform"
        className="w-full max-w-[550px] object-contain transition-all duration-700 group-hover:scale-105"
      />
    </div>
  </div>
</div>

  </div>
</section>

    </>
  );
}