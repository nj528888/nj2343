"use client";

import { useEffect, useRef } from "react";

const cards = [
  {
    tag: "Global Equity",
    badge: "LOVE",
    title: "Global Equity",
    body: "Diversified exposure to 40+ developed and emerging markets, rebalanced continuously by our allocation engine.",
    stat: "+18.4%",
    statLabel: "3-yr annualised",
  },
  {
    tag: "Fixed Income",
    title: "Sovereign Yield",
    body: "Laddered government and investment-grade credit, engineered for steady income and capital preservation.",
    stat: "5.1%",
    statLabel: "Blended yield",
  },
  {
    tag: "Alternatives",
    title: "Private Markets",
    body: "Curated access to private credit, infrastructure and venture strategies once reserved for institutions.",
    stat: "12.7%",
    statLabel: "Target net IRR",
  },
];

const clamp = (v) => Math.min(1, Math.max(0, v));
const ease = (t) => t * t * (3 - 2 * t);

export default function ScrollStage() {
  const track = useRef(null);

  useEffect(() => {
    const el = track.current;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = el.offsetHeight - window.innerHeight;
      const p = clamp(-el.getBoundingClientRect().top / max);
      el.style.setProperty("--p", p.toFixed(4));
      el.style.setProperty("--hero", (1 - ease(clamp(p / 0.45))).toFixed(4));
      const center = ease(clamp((p - 0.5) / 0.35));
      el.style.setProperty("--center", center.toFixed(4));
      el.dataset.hero = 1 - ease(clamp(p / 0.45)) > 0.05 ? "on" : "off";
      el.dataset.cta = center > 0.6 ? "on" : "off";
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={track} className="track" data-hero="on" data-cta="off" style={{ "--p": 0, "--hero": 1, "--center": 0 }}>
      <div className="stage">
        <div className="glow" aria-hidden="true" />

        <div className="hero">
          <div className="hero-copy">
            <p className="eyebrow">AI-driven wealth management</p>
            <h1>
              Grow <span className="gt">&gt;</span>
              <br />
              <em>your capital</em>
            </h1>
            <p className="sub">
              Institutional-grade intelligence for private investors. Our models
              read the markets around the clock, so your wealth compounds with
              precision and calm.
            </p>
            <div className="dots" aria-hidden="true">
              <span className="on" /><span /><span />
            </div>
          </div>

          <div className="cards">
            {cards.map((c, i) => (
              <article className="card" key={c.title} style={{ "--i": i }}>
                {c.badge && <span className="badge">{c.badge}</span>}
                <p className="tag">{c.tag}</p>
                <h3>{c.title}</h3>
                <p className="body">{c.body}</p>
                <div className="stat">
                  <strong>{c.stat}</strong>
                  <span>{c.statLabel}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="center">
          <span className="rule" aria-hidden="true" />
          <h2>Command <em>your wealth</em></h2>
          <button type="button" className="cta">Open account</button>
        </div>
      </div>
    </section>
  );
}
