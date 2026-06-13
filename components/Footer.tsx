"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-roast)", padding: "64px 40px 32px" }}>
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", marginBottom: "48px" }}>
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontStyle: "italic", color: "var(--color-cream)", marginBottom: "12px" }}>
              Brew &amp; Co
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-steam)", lineHeight: 1.7, maxWidth: "240px" }}>
              A cosy neighbourhood coffee shop in the heart of Brooklyn. Specialty coffee, fresh pastries, and good people.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: "16px" }}>
              Explore
            </p>
            {[{ label: "Menu", href: "/menu" }, { label: "About Us", href: "/about" }].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-steam)", textDecoration: "none", marginBottom: "10px", transition: "color 200ms ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-cream)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--color-steam)")}
              >
                {label}
              </Link>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: "16px" }}>
              Visit Us
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-steam)", lineHeight: 1.8 }}>
              142 Franklin Street<br />
              Brooklyn, NY 11222<br /><br />
              Mon – Fri: 7am – 8pm<br />
              Sat – Sun: 8am – 9pm
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: "16px" }}>
              Get in Touch
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-steam)", lineHeight: 1.8 }}>
              hello@brewandco.com<br />
              (718) 555 0192
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(28,15,10,0.4)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--color-steam)" }}>
            © {new Date().getFullYear()} Brew &amp; Co. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--color-steam)" }}>
            Brooklyn, New York
          </p>
        </div>
      </div>
    </footer>
  );
}
