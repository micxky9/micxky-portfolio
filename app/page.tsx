import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import { projectData, skillData, experienceData, socialData, statsData } from '@/data/content';
import SectionHeading from '@/components/SectionHeading';
import FloatingBlob from '@/components/FloatingBlob';
import ProjectCard from '@/components/ProjectCard';
import SkillGrid from '@/components/SkillGrid';
import Timeline from '@/components/Timeline';
import ContactForm from '@/components/ContactForm';
import StatsGrid from '@/components/StatsGrid';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedReveal from '@/components/AnimatedReveal';

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-page text-slate-100">
      <Navbar />
      <ScrollProgress />
      <FloatingBlob />

      <section id="top" className="relative min-h-screen px-6 pb-24 pt-28 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
                Crafted for scale · Premium product portfolio
              </p>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Hello, I&apos;m</p>
                <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl">
                  Micxky — Software and Frontend engineer building polished digital experiences.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
                  I design and engineer product-focused web applications with refined interactions, motion-driven layouts, and exceptional performance.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-surface/80 p-6 shadow-soft backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Fast facts</p>
              <div className="grid gap-3">
                <div className="rounded-3xl border border-slate-800 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-glow">
                  <p className="text-sm text-slate-400">Experience</p>
                  <p className="mt-2 text-2xl font-semibold text-white">1+ years</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-glow">
                  <p className="text-sm text-slate-400">Focused on</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Web apps, Landing Page, Booking Websites design systems, motion</p>
                </div>
              </div>
            </div>
          </header>

          <AnimatedReveal className="grid gap-5 md:grid-cols-[1fr_320px]">
            <div className="space-y-6 rounded-[2rem] border border-slate-800 bg-surface/70 p-8 shadow-soft backdrop-blur-xl">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">About This Portfolio</p>
                <div className="space-y-4 text-slate-300">
                  <p>Premium visual language, subtle motion, and thoughtful pacing make every section feel considered. This is a handcrafted presentation tailored for a senior engineer and product-led collaborator.</p>
                  <p>Every interaction is built to feel fluid and responsive, with a deliberate focus on minimalism and polished details.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-3">
                {['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'GSAP', 'Accessibility'].map((item) => (
                  <span key={item} className="rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-accent hover:text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-slate-800 bg-surface/80 p-7 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Contact</p>
                <div className="mt-5 space-y-4 text-slate-300">
                  <p>Let&apos;s collaborate on ambitious products, motion-rich experiences, and scalable systems.</p>
                  <div className="grid gap-3 text-sm text-slate-400">
                    <p className="flex items-center gap-2"><Mail size={16} />michaelalih5@gmail.com</p>
                    <p className="flex items-center gap-2"><MapPin size={16} />Remote</p>
                  </div>
                </div>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-3xl border border-transparent bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Contact Me <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="rounded-[2rem] border border-slate-800 bg-surface/85 p-7 shadow-soft backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Social</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <SocialLinks items={socialData} compact />
                </div>
              </div>
            </div>
          </AnimatedReveal>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:border-accent hover:text-white">
              View Projects <ArrowDownRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-transparent bg-slate-800 px-5 py-3 text-sm text-slate-300 transition hover:bg-slate-700 hover:text-white">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-800 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionHeading title="About" subtitle="A concise introduction with crafted motion and premium rhythm." />
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
            <AnimatedReveal className="space-y-6 rounded-[2rem] border border-slate-800 bg-surface/80 p-8 shadow-soft backdrop-blur-xl">
              <p className="text-slate-400 leading-8">
                I build modern applications with a focus on detail, performance, and elegant interactions. My work blends product thinking with technical craft to deliver interfaces that feel premium and intuitive.
              </p>
              <p className="text-slate-400 leading-8">
                My approach is centered on thoughtful motion, accessible UI, and clean systems that scale. I enjoy mentoring teams, defining design systems, and shipping high-quality front-end experiences.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-800 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Specializes in</p>
                  <p className="mt-3 text-lg font-semibold text-white">Product UI, animation systems, frontend architecture</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Philosophy</p>
                  <p className="mt-3 text-lg font-semibold text-white">Build refined, purposeful interfaces with performance-first craftsmanship.</p>
                </div>
              </div>
            </AnimatedReveal>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-800 bg-surface/80 p-8 shadow-soft backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Timeline</p>
                <Timeline items={experienceData.slice(0, 3)} />
              </div>
              <StatsGrid stats={statsData} />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-slate-800 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionHeading title="Skills" subtitle="A premium showcase of core technologies and capabilities." />
          <SkillGrid groups={skillData} />
        </div>
      </section>

      <section id="projects" className="border-t border-slate-800 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionHeading title="Projects" subtitle="A curated selection of polished product interfaces and platform experiences." />
          <div className="grid gap-6 xl:grid-cols-2">
            {projectData.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-slate-800 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionHeading title="Experience" subtitle="A timeline of notable roles and collaborative product work." />
          <div className="space-y-6">
            <Timeline items={experienceData} reversed />
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-800 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionHeading title="Contact" subtitle="Reach out for collaboration or let&apos;s build something exceptional." />
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />
            <div className="space-y-6 rounded-[2rem] border border-slate-800 bg-surface/80 p-8 shadow-soft backdrop-blur-xl">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Get in touch</p>
                <h2 className="text-3xl font-semibold text-white">Let&apos;s create something meaningful.</h2>
                <p className="text-slate-400 leading-8">I&apos;m available for freelance or team roles. Send a note and I&apos;ll reply promptly.</p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl border border-slate-800 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Email</p>
                  <p className="mt-2 text-base text-slate-200">michaelalih5@gmail.com</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Location</p>
                  <p className="mt-2 text-base text-slate-200">Remote / Europe</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Social</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <SocialLinks items={socialData} compact />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
