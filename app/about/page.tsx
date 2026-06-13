"use client";

import Image from "next/image";
import Link from "next/link";

const founders = [
  {
    name: "Maya Osei",
    role: "Co-Founder & Head Roaster",
    bio: "Maya spent five years sourcing beans across Ethiopia and Colombia before bringing her knowledge back to Brooklyn. She believes every cup should feel like a conversation.",
    image: "/founder-maya.webp",
  },
  {
    name: "Daniel Reyes",
    role: "Co-Founder & Creative Director",
    bio: "A former architect turned café obsessive, Daniel designed every corner of Brew & Co with the same care you'd find in the coffee. Warm spaces, he says, make better conversations.",
    image: "/founder-daniel.webp",
  },
];

const values = [
  { title: "Quality above all", body: "We source direct from farms we trust, roast in small batches, and train every barista with obsessive attention to detail." },
  { title: "Community first", body: "Brew & Co exists because of this neighbourhood. We host, we support local makers, and we always leave a seat at the table." },
  { title: "Slow down", body: "In a city that never stops, we're your permission slip to pause. No rush. Linger over your latte. Read. Think. Breathe." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "60vh", minHeight: "420px", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <Image
          src="/about-hero.webp"
          alt="Inside Brew and Co"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(28,15,10,0.1) 0%, rgba(28,15,10,0.7) 100%)" }} />
        <div style={{ position: "relative", padding: "64px 40px", maxWidth: "var(--max-width)", margin: "0 auto", width: "100%" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-caramel)", marginBottom: "12px" }}>
            Our Story
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6vw, 64px)", fontStyle: "italic", color: "var(--color-foam)", lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: "680px" }}>
            Born from a love of coffee and Brooklyn
          </h1>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "96px 40px", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: "16px" }}>
              Since 2019
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)", color: "var(--color-espresso)", lineHeight: 1.2, marginBottom: "28px", letterSpacing: "-0.02em" }}>
              A corner of Brooklyn that feels like home
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "var(--color-steam)", lineHeight: 1.8, marginBottom: "20px" }}>
              Brew & Co started as a sketch on a napkin between two friends at a dimly lit bar in Williamsburg. Maya had just returned from eighteen months sourcing coffee in East Africa. Daniel had sold his architecture practice and was looking for something more human-scaled.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "var(--color-steam)", lineHeight: 1.8, marginBottom: "20px" }}>
              What they wanted was simple: a place where great coffee was the starting point, not the whole point. Somewhere you could sit for an hour without guilt, meet your neighbour, or just think. So they found a former bookshop on Franklin Street, stripped it back to its bones, and built the café they&rsquo;d always wanted to walk into.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "var(--color-steam)", lineHeight: 1.8 }}>
              Five years later, Brew & Co is still about those same things. The beans have gotten better. The pastries have gotten more ambitious. But the feeling — that this is your place too — has never changed.
            </p>
          </div>
          <div style={{ position: "relative", borderRadius: "var(--radius-xl)", overflow: "hidden", aspectRatio: "4/5" }}>
            <Image
              src="/barista.webp"
              alt="Barista at work"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Founders */}
      <section style={{ padding: "96px 40px", background: "var(--color-latte)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: "12px" }}>
              The People Behind the Cup
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)", color: "var(--color-espresso)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              Meet the Founders
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px", maxWidth: "780px", margin: "0 auto" }}>
            {founders.map(founder => (
              <div key={founder.name} style={{ textAlign: "center" }}>
                <div style={{ width: "140px", height: "140px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 24px", position: "relative" }}>
                  <Image src={founder.image} alt={founder.name} fill style={{ objectFit: "cover" }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "26px", color: "var(--color-espresso)", marginBottom: "6px" }}>
                  {founder.name}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: "16px" }}>
                  {founder.role}
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--color-steam)", lineHeight: 1.7 }}>
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "96px 40px", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: "12px" }}>
              What We Believe
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)", color: "var(--color-espresso)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              Our Values
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px" }}>
            {values.map((v, i) => (
              <div key={v.title} style={{ borderTop: "2px solid var(--color-terracotta)", paddingTop: "24px" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "var(--color-steam)", marginBottom: "12px" }}>
                  0{i + 1}
                </p>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "var(--color-espresso)", marginBottom: "12px", lineHeight: 1.2 }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--color-steam)", lineHeight: 1.7 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 40px", background: "var(--color-roast)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)", fontStyle: "italic", color: "var(--color-foam)", marginBottom: "16px" }}>
          Come say hello
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "var(--color-steam)", marginBottom: "36px" }}>
          142 Franklin Street, Brooklyn · Open 7 days
        </p>
        <Link href="/menu" style={{
          background: "var(--color-terracotta)", color: "var(--color-foam)",
          border: "none", borderRadius: "var(--radius-full)", padding: "16px 36px",
          fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600,
          letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none",
          display: "inline-block", transition: "all 280ms ease",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "var(--color-caramel)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "var(--color-terracotta)"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Explore Our Menu
        </Link>
      </section>
    </>
  );
}
