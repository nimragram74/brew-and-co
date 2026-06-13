"use client";

import Image from "next/image";
import { useState } from "react";
import { menuItems, categories } from "@/lib/menu-data";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? menuItems
    : menuItems.filter(i => i.category === activeCategory);

  return (
    <>
      {/* Header */}
      <section style={{ background: "var(--color-roast)", padding: "80px 40px 64px", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-caramel)", marginBottom: "16px" }}>
          Brew &amp; Co · Brooklyn
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 72px)", fontStyle: "italic", color: "var(--color-foam)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "16px" }}>
          Our Menu
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "var(--color-steam)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
          Sourced with care, crafted with love. Everything is made fresh, every single day.
        </p>
      </section>

      {/* Category Tabs */}
      <div style={{
        position: "sticky", top: "var(--nav-height)", zIndex: 40,
        background: "var(--color-cream)", borderBottom: "1px solid var(--color-latte)",
        padding: "0 40px",
        overflowX: "auto",
      }}>
        <div style={{ display: "flex", gap: "0", maxWidth: "var(--max-width)", margin: "0 auto" }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600,
                letterSpacing: "0.06em", textTransform: "uppercase",
                padding: "20px 24px",
                color: activeCategory === cat ? "var(--color-terracotta)" : "var(--color-steam)",
                borderBottom: activeCategory === cat ? "2px solid var(--color-terracotta)" : "2px solid transparent",
                transition: "all 200ms ease",
                whiteSpace: "nowrap",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <section style={{ padding: "64px 40px 96px", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          {activeCategory === "All" ? (
            // Show by category when "All" is selected
            categories.filter(c => c !== "All").map(cat => {
              const items = menuItems.filter(i => i.category === cat);
              return (
                <div key={cat} style={{ marginBottom: "72px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px" }}>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 36px)", color: "var(--color-espresso)", lineHeight: 1 }}>
                      {cat}
                    </h2>
                    <div style={{ flex: 1, height: "1px", background: "var(--color-latte)" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
                    {items.map(item => <MenuCard key={item.name} item={item} />)}
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
              {filtered.map(item => <MenuCard key={item.name} item={item} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function MenuCard({ item }: { item: { name: string; description: string; price: number; category: string; popular: boolean; image: string } }) {
  return (
    <div
      style={{
        background: "var(--color-foam)", borderRadius: "var(--radius-lg)",
        overflow: "hidden", boxShadow: "var(--shadow-sm)",
        transition: "all 320ms ease",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
    >
      <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
        <Image src={item.image} alt={item.name} fill style={{ objectFit: "cover" }} />
        {item.popular && (
          <span style={{
            position: "absolute", top: "12px", right: "12px",
            background: "var(--color-terracotta)", color: "var(--color-foam)",
            fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600,
            letterSpacing: "0.06em", textTransform: "uppercase",
            padding: "4px 10px", borderRadius: "var(--radius-full)",
          }}>
            Popular
          </span>
        )}
      </div>
      <div style={{ padding: "20px 24px 24px" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--color-espresso)", marginBottom: "8px", lineHeight: 1.2 }}>
          {item.name}
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-steam)", lineHeight: 1.6, marginBottom: "16px" }}>
          {item.description}
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 600, color: "var(--color-espresso)" }}>
          ${item.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
