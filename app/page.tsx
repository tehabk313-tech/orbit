'use client'

import { FormEvent, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleUserRound,
  Eye,
  EyeOff,
  GitBranch,
  Globe,
  Mail,
  Share2,
  Menu,
  Orbit,
  Radio,
  Radar,
  Satellite,
  Sparkles,
  Star,
  Telescope,
  X,
  Zap,
} from 'lucide-react'

const features = [
  { icon: Radio, title: 'Deep Space Telemetry', description: 'Follow live signals and meaningful patterns from missions across the known universe.', tag: '01 / LIVE SIGNALS', tone: 'cyan' },
  { icon: Radar, title: 'Interactive Star Mapping', description: 'Navigate a living atlas of constellations, exoplanets, and cosmic neighborhoods.', tag: '02 / EXPLORE', tone: 'violet' },
  { icon: Satellite, title: 'Real-time Data', description: 'Turn complex celestial data into clear, beautiful insights you can understand at a glance.', tag: '03 / INSIGHT', tone: 'blue' },
]

const anomalies = [
  { icon: Radio, title: 'Pulsars', description: 'Collapsed stellar cores spinning with clockwork precision, beaming radio pulses across deep space.', tone: 'cyan' },
  { icon: Sparkles, title: 'Diamond Rain', description: 'On distant ice giants, pressure may turn carbon-rich storms into crystalline rain beneath the clouds.', tone: 'violet' },
  { icon: Orbit, title: 'Rogue Black Holes', description: 'Invisible stellar remnants wandering between galaxies, revealed only by the light they bend.', tone: 'blue' },
  { icon: Globe, title: 'Dark Galaxies', description: 'Ghostly structures rich in dark matter, almost absent of stars yet massive enough to shape space.', tone: 'cyan' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)
  const [subscribed, setSubscribed] = useState(false)

  function submitNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#080e1b]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#home" className="group flex items-center gap-3" aria-label="AstroRealm home">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-300/10 text-cyan-200 shadow-[0_0_24px_rgba(60,225,255,0.2)]">
              <Orbit className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
              <span className="absolute h-1 w-1 rounded-full bg-cyan-200 shadow-[0_0_8px_#8cf5ff]" />
            </span>
            <span className="font-mono text-sm font-semibold tracking-[0.26em] text-white">ASTRO<span className="text-cyan-300">REALM</span></span>
          </a>
          <div className="hidden items-center gap-9 md:flex">
            {['Home', 'Discover', 'Features', 'About'].map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} className={`text-[13px] transition-colors hover:text-cyan-200 ${index === 0 ? 'text-white' : 'text-slate-400'}`}>{item}</a>)}
          </div>
          <a href="#login" className="hidden items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2.5 text-[13px] font-medium text-cyan-100 shadow-[0_0_24px_rgba(44,212,255,0.12)] transition-all hover:border-cyan-200 hover:bg-cyan-300/20 md:flex">Sign In <ArrowRight className="h-3.5 w-3.5" /></a>
          <button className="text-slate-200 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="border-t border-white/[0.08] px-6 pb-5 pt-3 md:hidden">{['Home', 'Discover', 'Features', 'About'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block py-3 text-sm text-slate-300">{item}</a>)}<a href="#login" onClick={() => setMenuOpen(false)} className="mt-2 block rounded-full bg-cyan-300 px-4 py-3 text-center text-sm font-semibold text-[#06101e]">Sign In</a></div>}
      </nav>

      <section id="home" className="relative isolate flex min-h-[760px] items-center pt-24 lg:min-h-[850px]">
        <div className="absolute inset-0 -z-20 bg-[#080e1b]" />
        <div className="absolute inset-0 -z-10 bg-[url('/astrorealm-nebula.png')] bg-cover bg-[center_right] opacity-70" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#080e1b_0%,rgba(8,14,27,.93)_27%,rgba(8,14,27,.36)_67%,rgba(8,14,27,.8)_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-30 cosmic-grid" />
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3.5 py-2 font-mono text-[10px] tracking-[0.16em] text-cyan-200"><Sparkles className="h-3.5 w-3.5" /> THE UNIVERSE, UNFILTERED</div>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-7xl lg:text-[88px]">Explore the <span className="text-gradient">Boundless Cosmos</span></h1>
            <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">A clearer way to look up. AstroRealm brings the living universe into focus through real-time discovery, beautifully mapped.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#discover" className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-[#06101e] shadow-[0_0_30px_rgba(65,224,255,.25)] transition-all hover:bg-cyan-200 hover:shadow-[0_0_42px_rgba(65,224,255,.45)]">Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a><a href="#discover" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10">View Discoveries <Telescope className="h-4 w-4 text-violet-300" /></a></div>
            <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-6 font-mono text-[10px] tracking-[0.12em] text-slate-500"><span><b className="mr-2 text-slate-200">14.2B+</b> LIGHT YEARS MAPPED</span><span><b className="mr-2 text-slate-200">8,402</b> ACTIVE OBJECTS</span></div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[9px] tracking-[.2em] text-slate-500 lg:flex"><span className="h-px w-8 bg-slate-700" /> SCROLL TO DISCOVER <ChevronDown className="h-3.5 w-3.5 animate-bounce" /></div>
      </section>

      <section id="features" className="relative bg-[#080e1b] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 font-mono text-[10px] tracking-[.22em] text-cyan-300">/ THE ASTROREALM SYSTEM</p><h2 className="max-w-xl text-4xl font-semibold tracking-[-.045em] text-white sm:text-5xl">The cosmos,<br /><span className="text-slate-500">made legible.</span></h2></div><p className="max-w-sm text-sm leading-6 text-slate-400">Everything you need to build a deeper relationship with the sky, from first light to the farthest edge.</p></div>
          <div className="grid gap-4 md:grid-cols-3">{features.map(({ icon: Icon, title, description, tag, tone }) => <article key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"><div className={`mb-12 flex h-11 w-11 items-center justify-center rounded-xl border ${tone === 'violet' ? 'border-violet-300/30 bg-violet-300/10 text-violet-200' : 'border-cyan-300/30 bg-cyan-300/10 text-cyan-200'}`}><Icon className="h-5 w-5" /></div><p className="mb-3 font-mono text-[9px] tracking-[.18em] text-slate-500">{tag}</p><h3 className="text-xl font-medium text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p><ArrowRight className="absolute bottom-7 right-7 h-4 w-4 text-slate-600 transition-all group-hover:translate-x-1 group-hover:text-cyan-200" /></article>)}</div>
        </div>
      </section>

      <section id="discover" className="border-y border-white/[0.07] bg-[#0b1323] px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_1.1fr]"><div><p className="mb-4 font-mono text-[10px] tracking-[.22em] text-violet-300">/ CURRENTLY TRACKING</p><h2 className="text-4xl font-semibold tracking-[-.045em] text-white sm:text-5xl">A universe in<br /><span className="text-slate-500">constant motion.</span></h2><p className="mt-6 max-w-md text-sm leading-7 text-slate-400">From nearby lunar passes to distant stellar nurseries, follow the movements and moments that shape our cosmic neighborhood.</p><a href="#login" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 hover:text-cyan-100">Unlock the full atlas <ArrowRight className="h-4 w-4" /></a></div><div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080e1b] p-6 shadow-[0_20px_80px_rgba(0,0,0,.25)]"><div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" /><div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4"><span className="font-mono text-[10px] tracking-[.16em] text-slate-400">LIVE OBJECT STREAM</span><span className="flex items-center gap-2 font-mono text-[10px] text-cyan-300"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" /> CONNECTED</span></div>{[['NGC 604', 'Triangulum Galaxy', '2.7M ly', 'cyan'], ['Kepler-186f', 'Red Dwarf System', '492 ly', 'violet'], ['Saturn IV', 'Outer Planetary Ring', '1.43B km', 'blue']].map(([name, desc, distance, color]) => <div key={name} className="flex items-center gap-4 border-b border-white/[0.07] py-4 last:border-0"><div className={`flex h-10 w-10 items-center justify-center rounded-full border ${color === 'violet' ? 'border-violet-300/30 bg-violet-300/10' : 'border-cyan-300/30 bg-cyan-300/10'}`}><Star className={`h-4 w-4 ${color === 'violet' ? 'text-violet-200' : 'text-cyan-200'}`} /></div><div className="min-w-0 flex-1"><p className="text-sm font-medium text-white">{name}</p><p className="truncate text-xs text-slate-500">{desc}</p></div><span className="font-mono text-[10px] text-slate-400">{distance}</span><ChevronDown className="h-3.5 w-3.5 -rotate-90 text-slate-600" /></div>)}</div></div></section>

      <section id="anomalies" className="relative overflow-hidden border-b border-white/[0.07] bg-[#080e1b] px-6 py-24 lg:px-10 lg:py-32"><div className="absolute inset-0 opacity-20 cosmic-grid" /><div className="relative mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 font-mono text-[10px] tracking-[.22em] text-violet-300">/ THE UNKNOWN INDEX</p><h2 className="max-w-2xl text-4xl font-semibold tracking-[-.045em] text-white sm:text-5xl">Cosmic Anomalies<br /><span className="text-slate-500">&amp; Strange Phenomena</span></h2></div><p className="max-w-sm text-sm leading-6 text-slate-400">The universe keeps its most compelling secrets in the margins. Meet four mysteries that challenge what we think we know.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{anomalies.map(({ icon: Icon, title, description, tone }, index) => <article key={title} className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/35 hover:bg-white/[0.07] hover:shadow-[0_18px_55px_rgba(31,205,255,.12)]"><div className={`mb-10 flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-500 group-hover:scale-110 ${tone === 'violet' ? 'border-violet-300/30 bg-violet-300/10 text-violet-200 group-hover:shadow-[0_0_24px_rgba(167,139,250,.28)]' : 'border-cyan-300/30 bg-cyan-300/10 text-cyan-200 group-hover:shadow-[0_0_24px_rgba(60,225,255,.28)]'}`}><Icon className="h-5 w-5" /></div><span className="mb-3 font-mono text-[9px] tracking-[.18em] text-slate-600">MYSTERY 0{index + 1}</span><h3 className="text-xl font-medium text-white">{title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{description}</p><a href="#login" className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-cyan-200 transition-colors hover:text-white">Read Mystery <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></a><div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" /></article>)}</div></div></section>

      <section id="login" className="relative px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_420px]"><div><p className="mb-4 font-mono text-[10px] tracking-[.22em] text-cyan-300">/ YOUR PORTAL</p><h2 className="max-w-xl text-4xl font-semibold tracking-[-.045em] text-white sm:text-5xl">Continue your<br /><span className="text-gradient">journey outward.</span></h2><p className="mt-6 max-w-md text-sm leading-7 text-slate-400">Save your discoveries, curate your night sky, and get closer to the things that are still waiting to be found.</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.045] p-7 shadow-[0_20px_70px_rgba(0,0,0,.25)] backdrop-blur-xl"><div className="mb-7"><h3 className="text-xl font-medium text-white">Welcome back</h3><p className="mt-1 text-sm text-slate-500">Sign in to your AstroRealm account.</p></div><form className="space-y-4" onSubmit={(event) => event.preventDefault()}><label className="block"><span className="mb-2 block text-xs text-slate-400">Email address</span><div className="relative"><Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" /><input type="email" placeholder="you@example.com" className="w-full rounded-lg border border-white/10 bg-[#080e1b]/70 py-3 pl-10 pr-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/50" /></div></label><label className="block"><span className="mb-2 block text-xs text-slate-400">Password</span><div className="relative"><input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="w-full rounded-lg border border-white/10 bg-[#080e1b]/70 px-3 py-3 pr-10 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/50" /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-200" aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button></div></label><div className="flex items-center justify-between text-xs"><label className="flex items-center gap-2 text-slate-400"><button type="button" onClick={() => setRemember(!remember)} className={`flex h-4 w-4 items-center justify-center rounded border ${remember ? 'border-cyan-300 bg-cyan-300 text-[#07111f]' : 'border-white/20'}`} aria-label="Remember me">{remember && <Check className="h-3 w-3" />}</button>Remember me</label><a href="#login" className="text-cyan-200 hover:text-cyan-100">Forgot password?</a></div><button type="submit" className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[linear-gradient(110deg,#86f7ff,#8c7cff)] py-3.5 text-sm font-semibold text-[#07111f] transition-opacity hover:opacity-90">Sign In <ArrowRight className="h-4 w-4" /></button></form><p className="mt-5 text-center text-xs text-slate-500">New to AstroRealm? <a href="#login" className="text-cyan-200">Create an account</a></p></div></div></section>

      <footer id="about" className="border-t border-white/[0.08] bg-[#060b15] px-6 pb-8 pt-16 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.5fr]"><div><a href="#home" className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-cyan-200"><Orbit className="h-4 w-4" /></span><span className="font-mono text-xs font-semibold tracking-[.24em] text-white">ASTRO<span className="text-cyan-300">REALM</span></span></a><p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">Making the universe feel a little closer, one discovery at a time.</p><div className="mt-6 flex gap-3"><a href="#about" className="rounded-full border border-white/10 p-2.5 text-slate-500 hover:border-white/20 hover:text-white" aria-label="Twitter"><Share2 className="h-4 w-4" /></a><a href="#about" className="rounded-full border border-white/10 p-2.5 text-slate-500 hover:border-white/20 hover:text-white" aria-label="Instagram"><Globe className="h-4 w-4" /></a><a href="#about" className="rounded-full border border-white/10 p-2.5 text-slate-500 hover:border-white/20 hover:text-white" aria-label="Github"><GitBranch className="h-4 w-4" /></a></div></div><div><p className="mb-5 font-mono text-[10px] tracking-[.18em] text-slate-400">EXPLORE</p><div className="flex flex-col gap-3 text-sm text-slate-500"><a href="#discover" className="hover:text-white">Discoveries</a><a href="#features" className="hover:text-white">Features</a><a href="#about" className="hover:text-white">About us</a></div></div><div><p className="mb-5 font-mono text-[10px] tracking-[.18em] text-slate-400">COMPANY</p><div className="flex flex-col gap-3 text-sm text-slate-500"><a href="#about" className="hover:text-white">Journal</a><a href="#about" className="hover:text-white">Careers</a><a href="#about" className="hover:text-white">Contact</a></div></div><div><p className="mb-5 font-mono text-[10px] tracking-[.18em] text-slate-400">STAY IN ORBIT</p><p className="mb-4 text-sm leading-6 text-slate-500">Monthly field notes from the edge of the known.</p><form className="flex rounded-lg border border-white/10 bg-white/[0.04] p-1" onSubmit={submitNewsletter}><input aria-label="Email for newsletter" type="email" required placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-slate-600" /><button className="rounded-md bg-white/10 px-3 py-2 text-xs font-medium text-white hover:bg-cyan-300 hover:text-[#07111f]" type="submit">{subscribed ? 'Joined' : 'Subscribe'}</button></form>{subscribed && <p className="mt-2 text-xs text-cyan-300">You are on the list. Watch the skies.</p>}</div></div><div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/[0.08] pt-6 text-[11px] text-slate-600 sm:flex-row"><span>© 2025 AstroRealm. All rights reserved.</span><span className="flex items-center gap-2"><CircleUserRound className="h-3.5 w-3.5" /> Crafted for the curious.</span></div></div></footer>
    </main>
  )
}
