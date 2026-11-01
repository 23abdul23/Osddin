'use client';

import { useState, type ReactNode } from 'react';

const ROLES = [
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

const EXPERTISE = [
  'Clinical research',
  'Biology / Life Sciences',
  'Genomics / Transcriptomics',
  'Single-cell / Multi-omics',
  'Bioinformatics',
  'Data Science',
  'AI / Machine Learning',
  'Software Engineering',
  'Knowledge Graphs',
  'Statistics / Epidemiology',
  'Public Health',
  'JavaScript',
  'TypeScript',
  'Neo4j',
  'ClickHouse',
  'Next.js',
  'NestJS',
  'Docker',
  'Redis',
  'Other',
];

const PARTICIPATION = [
  'Lead or co-lead a project',
  'Contribute hands-on to a project',
  'Provide clinical or scientific expertise',
  'Mentor students or junior contributors',
  'Develop datasets, analyses, pipelines, or software',
  'Support OSDDIN coordination and community activities',
  'Open to discussing where I could contribute',
];

const MAX_IMAGE_MB = 5;

type FormState = {
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
  photo: string;
  photoName: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  email: '',
  institution: '',
  location: '',
  role: '',
  otherRole: '',
  work: '',
  expertise: [],
  otherExpertise: '',
  areas: '',
  problem: '',
  participation: [],
  timeCommitment: '',
  helpNeeded: '',
  links: '',
  photo: '',
  photoName: '',
};

const inputClass =
  'mt-3 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-2 text-lg text-slate-900 placeholder:text-slate-400 transition-colors duration-300 focus:border-teal-600 focus:outline-none focus:ring-0';

const cardClass =
  'group relative overflow-hidden rounded-2xl border bg-white p-8 text-left shadow-sm transition-all duration-300 hover:border-teal-300 hover:shadow-lg';

const topBar =
  'absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-teal-500 transition-transform duration-500 ease-out group-focus-within:scale-x-100';

function ErrorText({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p data-error className="mt-3 flex items-center gap-2 text-sm text-red-600">
      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-red-600 text-[10px] font-bold leading-none">
        !
      </span>
      {msg}
    </p>
  );
}

function SectionHeader({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="pt-14 text-center sm:pt-20">
      <h2 className="text-3xl font-medium tracking-tight text-slate-900">{title}</h2>
      <div className="mx-auto mt-3 h-px w-16 bg-teal-600" />
      {children && (
        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-xl leading-relaxed text-slate-500">
          {children}
        </div>
      )}
    </div>
  );
}

function Question({
  number,
  title,
  hint,
  required,
  error,
  htmlFor,
  children,
}: {
  number?: number;
  title: string;
  hint?: string;
  required?: boolean;
  error?: string;
  htmlFor?: string;
  children: ReactNode;
}) {
  const Title = (
    <>
      {number ? <span className="text-teal-500">{number}. </span> : null}
      {title}
      {required && <span className="text-red-600"> *</span>}
    </>
  );
  return (
    <div className={`${cardClass} ${error ? 'border-red-400' : 'border-slate-200'}`}>
      <div className={topBar} />
      <div className="relative">
        {htmlFor ? (
          <label htmlFor={htmlFor} className="text-2xl font-semibold leading-snug text-slate-900">
            {Title}
          </label>
        ) : (
          <p className="text-2xl font-semibold leading-snug text-slate-900">{Title}</p>
        )}
        {hint && <p className="mt-2 text-base leading-relaxed text-slate-500">{hint}</p>}
        {children}
        <ErrorText msg={error} />
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold uppercase tracking-widest text-teal-500">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </label>
      {children}
      <ErrorText msg={error} />
    </div>
  );
}

export default function JoinPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const toggle = (key: 'expertise' | 'participation', value: string) => {
    const current = form[key];
    update(key, current.includes(value) ? current.filter((v) => v !== value) : [...current, value]);
  };

  

  const handlePhoto = (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setErrors((prev) => ({ ...prev, photo: 'Please choose an image file (JPG, PNG, WebP)' }));
      return;
    }
    if (file.size > MAX_IMAGE_MB * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, photo: `Image must be smaller than ${MAX_IMAGE_MB} MB` }));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({ ...prev, photo: String(reader.result), photoName: file.name }));
      setErrors((prev) => ({ ...prev, photo: undefined }));
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => setForm((prev) => ({ ...prev, photo: '', photoName: '' }));

  

  const REQUIRED = 'This is a required question';

  const validate = () => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = REQUIRED;
    if (!form.email.trim()) e.email = REQUIRED;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'Enter a valid email address';
    if (!form.institution.trim()) e.institution = REQUIRED;

    if (!form.role) e.role = REQUIRED;
    else if (form.role === 'Other' && !form.otherRole.trim())
      e.otherRole = 'Please specify your role';

    if (!form.work.trim()) e.work = REQUIRED;

    if (form.expertise.length === 0) e.expertise = 'Select at least one option';
    else if (form.expertise.includes('Other') && !form.otherExpertise.trim())
      e.otherExpertise = 'Please specify your other expertise';

    if (!form.areas.trim()) e.areas = REQUIRED;

    if (form.participation.length === 0) e.participation = 'Select at least one option';

    setErrors(e);
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) {
      setTimeout(() => {
        document
          .querySelector('[data-error]')
          ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 0);
      return;
    }

    setSubmitted({ ...form });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearForm = () => {
    setForm(initialState);
    setErrors({});
  };

  const editResponse = () => {
    setSubmitted(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  

  const Text = ({ value }: { value: string }) =>
    value.trim() ? (
      <span className="whitespace-pre-wrap break-words">{value}</span>
    ) : (
      <span className="text-slate-400">Not provided</span>
    );

  const Chips = ({ items }: { items: string[] }) =>
    items.length ? (
      <ul className="flex flex-wrap gap-2">
        {items.map((i) => (
          <li
            key={i}
            className="rounded-full border border-teal-200 bg-teal-50 px-4 py-1 text-base text-teal-700"
          >
            {i}
          </li>
        ))}
      </ul>
    ) : (
      <span className="text-slate-400">Not provided</span>
    );

  const Row = ({ label, children }: { label: string; children: ReactNode }) => (
    <div className="py-4">
      <dt className="text-sm font-bold uppercase tracking-widest text-teal-500">{label}</dt>
      <dd className="mt-2 text-lg leading-relaxed text-slate-700">{children}</dd>
    </div>
  );

  const SummaryHeading = ({ children }: { children: ReactNode }) => (
    <div className="mb-1 mt-8 first:mt-0">
      <h3 className="text-2xl font-semibold text-slate-900">{children}</h3>
      <div className="mt-2 h-px w-10 bg-teal-600" />
    </div>
  );

  

  return (
    <section className="bg-[#eef3f2] py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-medium tracking-tight text-slate-900">
          OSDDIN Contributor <span className="text-teal-600">Interest Form.</span>
        </h1>

        <div className="mx-auto mt-6 h-px w-24 bg-teal-600" />

        {submitted ? (
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-teal-200 bg-white p-8 text-left shadow-lg sm:p-10 lg:left-1/2 lg:w-[min(64rem,calc(100vw-3rem))] lg:-translate-x-1/2 lg:p-12">
            <div className="absolute left-0 top-0 h-[3px] w-full bg-teal-500" />

            <div className="text-center">
              <h2 className="text-3xl font-medium tracking-tight text-slate-900">
                Thank you, <span className="text-teal-600">{submitted.name}.</span>
              </h2>
              <div className="mx-auto mt-3 h-px w-16 bg-teal-600" />
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                Here are the details you filled in.
              </p>
            </div>

            <dl className="mt-8 divide-y divide-slate-100">
              <SummaryHeading>About you</SummaryHeading>
              <div className="grid gap-8 py-4 md:grid-cols-[1fr_1fr] md:items-stretch">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 md:aspect-auto">
                  {submitted.photo ? (
                    <img
                      src={submitted.photo}
                      alt={`${submitted.name} profile`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-400">
                      <svg viewBox="0 0 24 24" className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
                      </svg>
                      <span className="text-base">No photo provided</span>
                    </div>
                  )}
                </div>

                <div className="divide-y divide-slate-100 [&>div:first-child]:pt-0 [&>div:last-child]:pb-0">
                  <Row label="Name"><Text value={submitted.name} /></Row>
                  <Row label="Email"><Text value={submitted.email} /></Row>
                  <Row label="Institution / organisation"><Text value={submitted.institution} /></Row>
                  <Row label="Location"><Text value={submitted.location} /></Row>
                  <Row label="Current role">
                    <Text
                      value={
                        submitted.role === 'Other' ? `Other: ${submitted.otherRole}` : submitted.role
                      }
                    />
                  </Row>
                </div>
              </div>
              <Row label="Field and current work"><Text value={submitted.work} /></Row>

              <SummaryHeading>Expertise and interests</SummaryHeading>
              <Row label="Relevant expertise">
                <Chips
                  items={submitted.expertise.map((x) =>
                    x === 'Other' ? `Other: ${submitted.otherExpertise}` : x,
                  )}
                />
              </Row>
              <Row label="Health or research areas of interest"><Text value={submitted.areas} /></Row>
              <Row label="Specific problem, project, dataset or question">
                <Text value={submitted.problem} />
              </Row>

              <SummaryHeading>How would you like to contribute?</SummaryHeading>
              <Row label="How you would like to participate">
                <Chips items={submitted.participation} />
              </Row>
              <Row label="Realistic time commitment"><Text value={submitted.timeCommitment} /></Row>
              <Row label="What would help you contribute effectively">
                <Text value={submitted.helpNeeded} />
              </Row>
              <Row label="Relevant links"><Text value={submitted.links} /></Row>
            </dl>

            <div className="mt-8">
              <button
                type="button"
                onClick={editResponse}
                className="rounded-lg bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-lg"
              >
                Edit response
              </button>
            </div>
          </div>
        ) : (
          
          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
            <SectionHeader title="About OSDDIN" />

            <div className="grid items-center gap-8 lg:relative lg:left-1/2 lg:w-[min(64rem,calc(100vw-3rem))] lg:-translate-x-1/2 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
              <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 sm:p-6">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/image/healthFlow.png"
                    alt="OSDDIN collaborative community"
                    className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>

              <div className="space-y-5 text-left text-xl leading-relaxed text-slate-500">
                <p>
                  OSDDIN is a collaborative platform bringing together clinicians, researchers,
                  bioinformaticians, AI/ML researchers, engineers, and students to address
                  important health challenges in India.
                </p>
                <p>
                  We are building multidisciplinary teams across institutions and would like to
                  understand your background, expertise, interests, and how you would like to
                  contribute.
                </p>
              </div>
            </div>

            <SectionHeader title="About you" />

            <Question title="Profile photo" hint={`Optional. JPG, PNG or WebP, up to ${MAX_IMAGE_MB} MB.`} error={errors.photo}>
              <div className="mt-5 flex items-center gap-6">
                {form.photo ? (
                  <img
                    src={form.photo}
                    alt="Profile preview"
                    className="h-28 w-28 shrink-0 rounded-full border border-slate-200 object-cover"
                  />
                ) : (
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-slate-300 text-slate-400">
                    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
                    </svg>
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  {form.photo && (
                    <p className="truncate text-base font-medium text-slate-700">{form.photoName}</p>
                  )}
                  <div className="mt-1 flex items-center gap-5">
                    <label
                      htmlFor="photo"
                      className="cursor-pointer text-base font-medium text-teal-600 underline-offset-2 hover:underline"
                    >
                      {form.photo ? 'Change photo' : 'Choose a photo'}
                    </label>
                    {form.photo && (
                      <button
                        type="button"
                        onClick={removePhoto}
                        className="text-base font-medium text-slate-500 underline-offset-2 hover:underline"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <input
                    id="photo"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => {
                      handlePhoto(e.target.files?.[0]);
                      e.target.value = '';
                    }}
                  />
                </div>
              </div>
            </Question>

            <Question number={1} title="Name and contact details" hint="Name, email, institution/organisation, and location.">
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                <Field id="name" label="Name" required error={errors.name}>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Your answer"
                    className={inputClass}
                  />
                </Field>
                <Field id="email" label="Email" required error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="Your answer"
                    className={inputClass}
                  />
                </Field>
                <Field id="institution" label="Institution / Organisation" required error={errors.institution}>
                  <input
                    id="institution"
                    type="text"
                    autoComplete="organization"
                    value={form.institution}
                    onChange={(e) => update('institution', e.target.value)}
                    placeholder="Your answer"
                    className={inputClass}
                  />
                </Field>
                <Field id="location" label="Location" error={errors.location}>
                  <input
                    id="location"
                    type="text"
                    value={form.location}
                    onChange={(e) => update('location', e.target.value)}
                    placeholder="City, country"
                    className={inputClass}
                  />
                </Field>
              </div>
            </Question>

            <Question number={2} title="Current role" required error={errors.role || errors.otherRole}>
              <div role="radiogroup" className="mt-5 space-y-1">
                {ROLES.map((r) => {
                  const selected = form.role === r;
                  return (
                    <label
                      key={r}
                      className={`flex cursor-pointer items-center gap-4 rounded-xl px-3 py-3 text-lg transition-colors duration-200 hover:bg-teal-50 ${
                        selected ? 'bg-teal-50 text-slate-900' : 'text-slate-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={r}
                        checked={selected}
                        onChange={() => update('role', r)}
                        className="h-5 w-5 border-slate-400 text-teal-600 focus:ring-teal-500"
                      />
                      <span>{r}{r === 'Other' ? ':' : ''}</span>
                      {r === 'Other' && (
                        <input
                          type="text"
                          value={form.otherRole}
                          onFocus={() => update('role', 'Other')}
                          onChange={(e) => {
                            update('role', 'Other');
                            update('otherRole', e.target.value);
                          }}
                          aria-label="Other role"
                          className="flex-1 border-0 border-b border-slate-300 bg-transparent px-0 py-1 text-lg text-slate-900 focus:border-teal-600 focus:outline-none focus:ring-0"
                        />
                      )}
                    </label>
                  );
                })}
              </div>
            </Question>

            <Question
              number={3}
              title="Field and current work"
              hint="Briefly describe your research, clinical, or technical background and what you currently work on."
              required
              error={errors.work}
              htmlFor="work"
            >
              <textarea
                id="work"
                rows={3}
                value={form.work}
                onChange={(e) => update('work', e.target.value)}
                placeholder="Your answer"
                className={`${inputClass} resize-none`}
              />
            </Question>

            <SectionHeader title="Expertise and interests" />

            <Question
              number={4}
              title="Relevant expertise"
              hint="Select all that apply."
              required
              error={errors.expertise || errors.otherExpertise}
            >
              <div className="mt-5 grid gap-1 sm:grid-cols-2">
                {EXPERTISE.map((x) => {
                  const checked = form.expertise.includes(x);
                  return (
                    <label
                      key={x}
                      className={`flex cursor-pointer items-center gap-4 rounded-xl px-3 py-3 text-lg transition-colors duration-200 hover:bg-teal-50 ${
                        checked ? 'bg-teal-50 text-slate-900' : 'text-slate-600'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle('expertise', x)}
                        className="h-5 w-5 rounded border-slate-400 text-teal-600 focus:ring-teal-500"
                      />
                      <span>{x}{x === 'Other' ? ':' : ''}</span>
                      {x === 'Other' && (
                        <input
                          type="text"
                          value={form.otherExpertise}
                          onFocus={() => {
                            if (!form.expertise.includes('Other')) toggle('expertise', 'Other');
                          }}
                          onChange={(e) => {
                            if (!form.expertise.includes('Other')) toggle('expertise', 'Other');
                            update('otherExpertise', e.target.value);
                          }}
                          aria-label="Other expertise"
                          className="min-w-0 flex-1 border-0 border-b border-slate-300 bg-transparent px-0 py-1 text-lg text-slate-900 focus:border-teal-600 focus:outline-none focus:ring-0"
                        />
                      )}
                    </label>
                  );
                })}
              </div>
            </Question>

            <Question
              number={5}
              title="What health or research areas are you most interested in contributing to?"
              required
              error={errors.areas}
              htmlFor="areas"
            >
              <textarea
                id="areas"
                rows={3}
                value={form.areas}
                onChange={(e) => update('areas', e.target.value)}
                placeholder="Your answer"
                className={`${inputClass} resize-none`}
              />
            </Question>

            <Question
              number={6}
              title="Do you have a specific problem, project, dataset, or research question that you would like to bring to OSDDIN?"
              hint="Optional."
              htmlFor="problem"
            >
              <textarea
                id="problem"
                rows={3}
                value={form.problem}
                onChange={(e) => update('problem', e.target.value)}
                placeholder="Your answer"
                className={`${inputClass} resize-none`}
              />
            </Question>

            <SectionHeader title="How would you like to contribute?" />

            <Question
              number={7}
              title="How would you like to participate?"
              hint="Select all that apply."
              required
              error={errors.participation}
            >
              <div className="mt-5 space-y-1">
                {PARTICIPATION.map((p) => {
                  const checked = form.participation.includes(p);
                  return (
                    <label
                      key={p}
                      className={`flex cursor-pointer items-center gap-4 rounded-xl px-3 py-3 text-lg transition-colors duration-200 hover:bg-teal-50 ${
                        checked ? 'bg-teal-50 text-slate-900' : 'text-slate-600'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle('participation', p)}
                        className="h-5 w-5 rounded border-slate-400 text-teal-600 focus:ring-teal-500"
                      />
                      <span>{p}</span>
                    </label>
                  );
                })}
              </div>
            </Question>

            <Question
              number={8}
              title="What level of time commitment would be realistic for you?"
              hint="For example: 1–5 hours per week, 5–10 hours per week, 10+ hours per week, or a few focused weeks per quarter."
              htmlFor="timeCommitment"
            >
              <input
                id="timeCommitment"
                type="text"
                value={form.timeCommitment}
                onChange={(e) => update('timeCommitment', e.target.value)}
                placeholder="Your answer"
                className={inputClass}
              />
            </Question>

            <Question
              number={9}
              title="What would help you contribute effectively?"
              hint="For example, access to collaborators, datasets, computational resources, mentorship, or training."
              htmlFor="helpNeeded"
            >
              <textarea
                id="helpNeeded"
                rows={3}
                value={form.helpNeeded}
                onChange={(e) => update('helpNeeded', e.target.value)}
                placeholder="Your answer"
                className={`${inputClass} resize-none`}
              />
            </Question>

            <Question
              number={10}
              title="Relevant links"
              hint="Publications, Google Scholar, ORCID, GitHub, LinkedIn, personal website, or other relevant work."
              htmlFor="links"
            >
              <textarea
                id="links"
                rows={3}
                value={form.links}
                onChange={(e) => update('links', e.target.value)}
                placeholder="Your answer"
                className={`${inputClass} resize-none`}
              />
            </Question>

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="rounded-lg bg-teal-600 px-10 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-lg"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={clearForm}
                className="text-base font-medium text-teal-600 underline-offset-2 hover:underline"
              >
                Clear form
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}