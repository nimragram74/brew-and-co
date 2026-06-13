"use client";

import { useState } from "react";

type Props = {
  onClose: () => void;
};

export default function ReservationModal({ onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", party: "2", date: "", time: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(28,15,10,0.72)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "var(--color-foam)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          padding: "48px",
          width: "100%",
          maxWidth: "480px",
          position: "relative",
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "20px", right: "20px",
            background: "none", border: "none", cursor: "pointer",
            color: "var(--color-steam)", fontSize: "22px", lineHeight: 1,
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>☕</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "var(--color-espresso)", marginBottom: "12px" }}>
              We&rsquo;ll see you soon!
            </h2>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--color-steam)", fontSize: "16px", lineHeight: 1.6 }}>
              Your table for <strong style={{ color: "var(--color-espresso)" }}>{form.party}</strong> on{" "}
              <strong style={{ color: "var(--color-espresso)" }}>{form.date}</strong> at{" "}
              <strong style={{ color: "var(--color-espresso)" }}>{form.time}</strong> is reserved.
              We&rsquo;ll send a confirmation shortly, {form.name}.
            </p>
            <button
              onClick={onClose}
              style={{
                marginTop: "32px",
                background: "var(--color-terracotta)",
                color: "var(--color-foam)",
                border: "none",
                borderRadius: "var(--radius-full)",
                padding: "14px 32px",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-terracotta)", marginBottom: "8px" }}>
              Brew &amp; Co · Brooklyn
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--color-espresso)", marginBottom: "32px", lineHeight: 1.2 }}>
              Reserve a Table
            </h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, color: "var(--color-espresso)" }}>Your Name</span>
                <input
                  required
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  style={inputStyle}
                />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, color: "var(--color-espresso)" }}>Party Size</span>
                <select
                  value={form.party}
                  onChange={e => setForm(f => ({ ...f, party: e.target.value }))}
                  style={inputStyle}
                >
                  {[1,2,3,4,5,6,7,8].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                  ))}
                </select>
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, color: "var(--color-espresso)" }}>Preferred Date</span>
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                  style={inputStyle}
                />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, color: "var(--color-espresso)" }}>Preferred Time</span>
                <select
                  value={form.time}
                  onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
                  style={inputStyle}
                >
                  <option value="">Select a time</option>
                  {["8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM"].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                style={{
                  marginTop: "8px",
                  background: "var(--color-terracotta)",
                  color: "var(--color-foam)",
                  border: "none",
                  borderRadius: "var(--radius-full)",
                  padding: "16px",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 250ms ease",
                  width: "100%",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--color-caramel)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--color-terracotta)")}
              >
                Confirm Reservation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "15px",
  color: "var(--color-espresso)",
  background: "white",
  border: "1.5px solid var(--color-latte)",
  borderRadius: "var(--radius-md)",
  padding: "12px 16px",
  outline: "none",
  width: "100%",
};
