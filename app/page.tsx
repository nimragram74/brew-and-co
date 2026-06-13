"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReservationModal from "@/components/ReservationModal";
import { popularItems } from "@/lib/menu-data";
import { upcomingEvents } from "@/lib/events-data";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "100vh", minHeight: "600px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <Image
          src="/hero-interior.webp"
          alt="Brew and Co coffee shop interior"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(28,15,10,0.4) 0%, rgba(28,15,10,0.65) 100%)" }} />
        <div style={{ position: "relative", textAlign: "center", maxWidth: "820px", padding: "0 24px" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-caramel)", marginBottom: "20px" }}>
            Ram&apos;s Brew &amp; Co · Gachibowli, Hyderabad
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 8vw, 88px)", fontStyle: "italic", fontWeight: 700, color: "var(--color-foam)", lineHeight: 1.1, marginBottom: "24px", letterSpacing: "-0.02em" }}>
            Where every cup tells a story
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "18px", color: "var(--color-steam)", lineHeight: 1.7, marginBottom: "40px", maxWidth: "520px", margin: "0 auto 40px" }}>
            Neighbourhood coffee, fresh pastries, and a warm corner of Brooklyn to call your own.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => setModalOpen(true)}
              style={{
                background: "var(--color-terracotta)", color: "var(--color-foam)",
                border: "none", borderRadius: "var(--radius-full)", padding: "16px 32px",
                fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600,
                letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer",
                transition: "all 280ms ease", boxShadow: "var(--shadow-warm)",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--color-caramel)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--color-terracotta)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Reserve a Table
            </button>
            <Link href="/menu" style={{
              color: "var(--color-foam)", border: "1.5px solid rgba(245,239,230,0.5)",
              borderRadius: "var(--radius-full)", padding: "16px 32px", textDecoration: "none",
              fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600,
              letterSpacing: "0.06em", textTransform: "uppercase",
              transition: "all 280ms ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-foam)"; e.currentTarget.style.background = "rgba(245,239,230,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,239,230,0.5)"; e.currentTarget.style.background = "transparent"; }}
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section style={{ padding: "96px 40px", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: "12px" }}>
              — Our Favourites —
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 52px)", color: "var(--color-espresso)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Most Loved by the Neighbourhood
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "28px" }}>
            {popularItems.map(item => (
              <div
                key={item.name}
                style={{
                  background: "var(--color-foam)", borderRadius: "var(--radius-lg)",
                  overflow: "hidden", boxShadow: "var(--shadow-sm)",
                  transition: "all 320ms ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
              >
                <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                  <Image src={item.image} alt={item.name} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px" }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: "6px" }}>
                    {item.category}
                  </p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--color-espresso)", marginBottom: "8px", lineHeight: 1.2 }}>
                    {item.name}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-steam)", lineHeight: 1.6, marginBottom: "16px" }}>
                    {item.description}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", fontWeight: 600, color: "var(--color-espresso)" }}>
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/menu" style={{
              background: "transparent", color: "var(--color-espresso)",
              border: "1.5px solid var(--color-espresso)", borderRadius: "var(--radius-full)",
              padding: "14px 32px", textDecoration: "none",
              fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600,
              letterSpacing: "0.06em", textTransform: "uppercase",
              transition: "all 280ms ease", display: "inline-block",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--color-espresso)"; e.currentTarget.style.color = "var(--color-cream)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--color-espresso)"; }}
            >
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Events */}
      <section style={{ padding: "96px 40px", background: "var(--color-latte)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: "12px" }}>
              — What&rsquo;s On —
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 52px)", color: "var(--color-espresso)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Upcoming Events
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {upcomingEvents.map(event => (
              <div
                key={event.id}
                style={{
                  background: "var(--color-foam)", borderRadius: "var(--radius-lg)",
                  padding: "32px", display: "grid",
                  gridTemplateColumns: "160px 1fr auto",
                  gap: "32px", alignItems: "center",
                  borderLeft: "3px solid var(--color-terracotta)",
                  boxShadow: "var(--shadow-sm)", transition: "box-shadow 280ms ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "var(--shadow-md)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "var(--shadow-sm)")}
              >
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontStyle: "italic", color: "var(--color-terracotta)", lineHeight: 1.2 }}>{event.day}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--color-steam)", marginTop: "4px" }}>{event.date}</p>
                </div>
                <div>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-terracotta)", background: "rgba(196,98,45,0.1)", padding: "4px 10px", borderRadius: "var(--radius-sm)", display: "inline-block", marginBottom: "10px" }}>
                    {event.tag}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "var(--color-espresso)", marginBottom: "8px" }}>
                    {event.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--color-steam)", lineHeight: 1.6 }}>
                    {event.description}
                  </p>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--color-steam)", whiteSpace: "nowrap" }}>
                  {event.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ position: "relative", padding: "96px 40px", overflow: "hidden" }}>
        <Image
          src="/hero-bar.webp"
          alt="Coffee bar"
          fill
          style={{ objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(59,31,20,0.82)" }} />
        <div style={{ position: "relative", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 52px)", fontStyle: "italic", color: "var(--color-foam)", marginBottom: "20px", lineHeight: 1.15 }}>
            Come as you are. Stay as long as you like.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "var(--color-steam)", lineHeight: 1.7, marginBottom: "40px" }}>
            142 Franklin Street, Brooklyn · Open 7 days a week
          </p>
          <button
            onClick={() => setModalOpen(true)}
            style={{
              background: "var(--color-terracotta)", color: "var(--color-foam)",
              border: "none", borderRadius: "var(--radius-full)", padding: "16px 40px",
              fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600,
              letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer",
              transition: "all 280ms ease", boxShadow: "var(--shadow-warm)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--color-caramel)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--color-terracotta)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Reserve a Table
          </button>
        </div>
      </section>

      {modalOpen && <ReservationModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
