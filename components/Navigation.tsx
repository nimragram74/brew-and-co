"use client";

import Link from "next/link";
import { useState } from "react";
import ReservationModal from "./ReservationModal";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        height: "var(--nav-height)",
        background: "var(--color-roast)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 40px",
        boxShadow: "0 2px 20px rgba(28,15,10,0.3)",
      }}>
        <Link href="/" style={{
          fontFamily: "var(--font-display)",
          fontSize: "22px",
          fontStyle: "italic",
          color: "var(--color-cream)",
          textDecoration: "none",
          letterSpacing: "-0.01em",
        }}>
          Ram&apos;s Brew &amp; Co
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }} className="hidden md:flex">
          {[{ label: "Menu", href: "/menu" }, { label: "About", href: "/about" }].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--color-steam)",
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-cream)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-steam)")}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => setModalOpen(true)}
            style={{
              background: "var(--color-terracotta)",
              color: "var(--color-foam)",
              border: "none",
              borderRadius: "var(--radius-full)",
              padding: "10px 22px",
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 250ms ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--color-caramel)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--color-terracotta)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Reserve a Table
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden"
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-cream)", fontSize: "24px" }}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "var(--nav-height)", left: 0, right: 0, zIndex: 49,
          background: "var(--color-roast)",
          padding: "32px 40px",
          display: "flex", flexDirection: "column", gap: "24px",
          boxShadow: "0 8px 32px rgba(28,15,10,0.4)",
        }}
        className="md:hidden"
        >
          {[{ label: "Menu", href: "/menu" }, { label: "About", href: "/about" }].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "var(--font-body)", fontSize: "18px", color: "var(--color-cream)", textDecoration: "none" }}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => { setMenuOpen(false); setModalOpen(true); }}
            style={{
              background: "var(--color-terracotta)",
              color: "var(--color-foam)",
              border: "none",
              borderRadius: "var(--radius-full)",
              padding: "14px 28px",
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            Reserve a Table
          </button>
        </div>
      )}

      {modalOpen && <ReservationModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
