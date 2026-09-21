"use client";

import { ArrowUpRight, Cookie, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteOverlays() {
  const [showDemo, setShowDemo] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  useEffect(() => {
    const accepted = window.localStorage.getItem("hrgridnx-cookie-notice");
    // Browser storage is only available after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowCookies(!accepted);
    const onScroll = () => setShowDemo(window.scrollY > 520);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const acceptCookies = () => { window.localStorage.setItem("hrgridnx-cookie-notice", "accepted"); setShowCookies(false); };
  return <>
    {showDemo && <Link href="/contact" className="fixed bottom-5 right-5 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-lime px-5 text-sm font-bold text-ink shadow-[0_8px_30px_rgba(15,42,36,.2)] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"><span className="hidden sm:inline">Get started</span><ArrowUpRight size={17} /></Link>}
    {showCookies && <aside role="region" aria-label="Cookie notice" className="fixed bottom-5 left-5 z-40 max-w-sm rounded-2xl border border-ink/10 bg-white p-4 shadow-2xl"><div className="flex gap-3"><Cookie size={19} className="mt-0.5 shrink-0" /><div><p className="text-sm font-semibold">A small note about cookies</p><p className="mt-1 text-xs leading-5 text-muted">We use essential browser storage to remember this notice and keep the site working. No advertising cookies are used here.</p><button onClick={acceptCookies} className="mt-3 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime">Got it</button></div><button onClick={acceptCookies} aria-label="Dismiss cookie notice" className="h-7 w-7 shrink-0 rounded-full text-muted hover:bg-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"><X size={15} /></button></div></aside>}
  </>;
}
