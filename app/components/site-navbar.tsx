"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Mark() {
  return <span className="grid-mark" aria-hidden="true">{Array.from({ length: 9 }, (_, index) => <i key={index} />)}</span>;
}

export default function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <header className="sticky top-0 z-50 border-b border-ink/10 bg-[#faf8f3]/90 backdrop-blur-xl">
    <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-6">
      <Link href="/" onClick={closeMenu} className="flex items-center gap-2 text-sm font-bold tracking-[.1em]"><Mark />HRGRIDNX</Link>
      <nav className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex" aria-label="Primary navigation">
        <Link href="/product" className="hover:text-ink">Product</Link>
        <Link href="/solutions/admin" className="hover:text-ink">Solutions</Link>
        <Link href="/pricing" className="hover:text-ink">Pricing</Link>
        <Link href="/customers" className="hover:text-ink">Customers</Link>
        <Link href="/resources" className="hover:text-ink">Resources</Link>
        <Link href="/about" className="hover:text-ink">About</Link>
      </nav>
      <div className="hidden items-center gap-5 lg:flex">
        <a href="https://hrgridnx.elitepic.co.uk/login" target="_blank" rel="noreferrer" className="text-sm font-semibold text-muted hover:text-ink">Login</a>
        <Link href="/contact" className="inline-flex h-11 items-center gap-2 rounded-full bg-lime px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5">Get started <ArrowUpRight size={16} /></Link>
      </div>
      <button type="button" className="rounded-full p-2 lg:hidden" onClick={() => setMenuOpen(current => !current)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
    </div>
    {menuOpen && <div className="border-t border-ink/10 bg-[#faf8f3] px-6 py-6 lg:hidden"><nav className="flex flex-col gap-5 text-lg font-semibold" aria-label="Mobile navigation"><Link href="/product" onClick={closeMenu}>Product</Link><Link href="/solutions/admin" onClick={closeMenu}>Solutions</Link><Link href="/pricing" onClick={closeMenu}>Pricing</Link><Link href="/customers" onClick={closeMenu}>Customers</Link><Link href="/resources" onClick={closeMenu}>Resources</Link><Link href="/about" onClick={closeMenu}>About</Link><a href="https://hrgridnx.elitepic.co.uk/login" target="_blank" rel="noreferrer">Login</a><Link href="/contact" onClick={closeMenu} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-lime px-5 text-sm font-semibold text-ink">Get started <ArrowUpRight size={16} /></Link></nav></div>}
  </header>;
}
