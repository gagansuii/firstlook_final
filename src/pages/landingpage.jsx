import { useState, useEffect } from "react";
import "./Landing.css";

const clients = [
  ["🏢", "TechCorp"],
  ["💼", "Global Finance"],
  ["🏛️", "Enterprise Solutions"],
  ["🌐", "International Group"],
  ["⚡", "Innovation Labs"],
  ["🔷", "Prime Industries"],
  ["🌟", "Star Enterprises"],
  ["📊", "Data Systems"],
];

const features = [
  ["🔒", "Secure Verification", "Flawless certificate verification with enterprise-grade security."],
  ["📁", "Document Management", "Upload, store, and manage all your verification documents in one place."],
  ["💬", "Direct Communication", "Connect and communicate directly with our verification team."],
  ["⚡", "Fast Processing", "Quick and efficient verification workflows."],
  ["👥", "Team Collaboration", "Seamless collaboration between clients and verification experts."],
  ["📊", "Complete Dashboard", "Track all verification activity in one centralised view."],
];

const steps = [
  ["1", "Upload Documents", "Securely upload your certificates and supporting files."],
  ["2", "Expert Review", "Our verification team checks authenticity against source databases."],
  ["3", "Real-Time Updates", "Track verification status as it progresses, step by step."],
  ["4", "Verified Results", "Download detailed verification reports instantly."],
];

// Replace with your Formspree endpoint — sign up free at https://formspree.io/
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvylgae";

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error

  // Sticky nav background on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Scroll-triggered fade-in
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // ESC closes mobile menu
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuOpen]);

  // Click outside closes mobile menu
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => { if (!e.target.closest(".nav-content")) setMenuOpen(false); };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [menuOpen]);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormStatus("success");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <div className="landing">
        {/* ── Navbar ── */}
        <nav className={`landing-nav${scrolled ? " nav-scrolled" : ""}`} aria-label="Main navigation">
          <div className="container nav-content">
            <a href="#" className="nav-logo" aria-label="Firstlookc — go to top">Firstlookc</a>

            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="nav-actions"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
            </button>

            <div id="nav-actions" className={`nav-actions${menuOpen ? " nav-open" : ""}`} role="menubar">
              <a className="nav-link" href="#features" onClick={closeMenu} role="menuitem">Features</a>
              <a className="nav-link" href="#process" onClick={closeMenu} role="menuitem">Process</a>
              <a className="btn btn-secondary" href="#contact" onClick={closeMenu} role="menuitem">Contact</a>
            </div>
          </div>
        </nav>

        {/* ── Hero ── */}
        <header className="landing-hero" id="main-content">
          <div className="container hero-content">
            <p className="hero-eyebrow fade-in">Background Verification Platform</p>

            {/* Curved brand text */}
            <h1 className="sr-only">Firstlookc — Background Verification Platform</h1>
            <div className="hero-brand-arc fade-in" role="img" aria-label="FIRSTLOOKC">
              <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff4d4d" />
                    <stop offset="100%" stopColor="#ff0080" />
                  </linearGradient>
                  <filter id="brand-glow" x="-10%" y="-40%" width="120%" height="180%">
                    <feGaussianBlur stdDeviation="7" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <path id="brand-arc" d="M 20,175 Q 400,5 780,175" />
                </defs>
                <text
                  fontFamily="'Bebas Neue', 'Arial Black', sans-serif"
                  fontSize="90"
                  letterSpacing="10"
                  fill="url(#brand-gradient)"
                  filter="url(#brand-glow)"
                >
                  <textPath href="#brand-arc" textAnchor="middle" startOffset="50%">
                    FIRSTLOOKC
                  </textPath>
                </text>
              </svg>
            </div>
            <p className="hero-subtitle fade-in">
              Verify certificates flawlessly. Connect with our team. Manage your documents securely.
            </p>
            <div className="hero-actions fade-in">
              <a className="btn btn-primary" href="#contact">Get a Demo</a>
              <a className="btn btn-ghost" href="#process">See How It Works</a>
            </div>
          </div>
        </header>

        {/* ── Clients ── */}
        <section className="landing-clients" aria-label="Clients">
          <div className="container">
            <h2 className="clients-title">Trusted by Leading Organizations</h2>
          </div>
          <div className="clients-scroll-wrapper" aria-hidden="true">
            <div className="clients-scroll">
              {clients.concat(clients).map(([icon, name], i) => (
                <div className="client-item" key={i}>
                  <div className="client-logo">{icon}</div>
                  <span className="client-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="landing-features" id="features" aria-labelledby="features-heading">
          <div className="container">
            <h2 className="section-title fade-in" id="features-heading">Why Choose Firstlookc?</h2>
            <div className="features-grid">
              {features.map(([icon, title, desc], i) => (
                <div className="feature-card fade-in" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="feature-icon" aria-hidden="true">{icon}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="landing-process" id="process" aria-labelledby="process-heading">
          <div className="container">
            <h2 className="section-title fade-in" id="process-heading">How It Works</h2>
            <div className="process-steps">
              {steps.map(([num, title, desc], i) => (
                <div className="process-step fade-in" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="step-number" aria-label={`Step ${num}`}>{num}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="landing-cta" aria-label="Call to action">
          <div className="container fade-in">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-subtitle">Join organisations worldwide using Firstlookc.</p>
            <div className="cta-actions">
              <a className="btn btn-primary" href="#contact">Request a Demo</a>
              <a className="btn btn-secondary" href="#features">Explore Features</a>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="landing-contact" id="contact" aria-labelledby="contact-heading">
          <div className="container contact-grid">
            <div className="contact-copy fade-in">
              <h2 className="contact-heading" id="contact-heading">Talk to Our Team</h2>
              <p className="contact-subtitle">
                Tell us about your verification volume, compliance needs, and timelines.
                We respond within one business day with a tailored demo and onboarding plan.
              </p>
              <ul className="contact-features" aria-label="What to expect">
                <li><span className="check" aria-hidden="true">✓</span> Tailored demo and rollout timeline</li>
                <li><span className="check" aria-hidden="true">✓</span> Secure document access and reporting setup</li>
                <li><span className="check" aria-hidden="true">✓</span> Dedicated verification team onboarding</li>
              </ul>
            </div>

            <div className="contact-form-card fade-in" aria-live="polite">
              {formStatus === "success" ? (
                <div className="form-success">
                  <div className="form-success-icon" aria-hidden="true">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. We will get back to you within one business day.</p>
                  <button className="btn btn-primary" onClick={() => setFormStatus("idle")}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Demo request form">
                  <h3 className="form-title">Request a Demo</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name <span className="required" aria-hidden="true">*</span></label>
                      <input
                        id="name" name="name" type="text" required
                        placeholder="Jane Smith"
                        value={form.name} onChange={handleChange}
                        autoComplete="name"
                        aria-required="true"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Work Email <span className="required" aria-hidden="true">*</span></label>
                      <input
                        id="email" name="email" type="email" required
                        placeholder="jane@company.com"
                        value={form.email} onChange={handleChange}
                        autoComplete="email"
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company" name="company" type="text"
                      placeholder="Your Company Name"
                      value={form.company} onChange={handleChange}
                      autoComplete="organization"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Tell us about your needs</label>
                    <textarea
                      id="message" name="message" rows={4}
                      placeholder="Verification volume, document types, timelines…"
                      value={form.message} onChange={handleChange}
                    />
                  </div>
                  {formStatus === "error" && (
                    <p className="form-error" role="alert">
                      Something went wrong. Please try again or email{" "}
                      <a href="mailto:hello@firstlookc.com">hello@firstlookc.com</a>.
                    </p>
                  )}
                  <button
                    className="btn btn-primary btn-full"
                    type="submit"
                    disabled={formStatus === "sending"}
                  >
                    {formStatus === "sending" ? "Sending…" : "Send Request"}
                  </button>
                  <p className="form-note">
                    Or email us directly at{" "}
                    <a href="mailto:hello@firstlookc.com">hello@firstlookc.com</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="landing-footer">
          <div className="container footer-content">
            <div className="footer-top">
              <span className="footer-logo">Firstlookc</span>
              <nav className="footer-nav" aria-label="Footer navigation">
                <a href="#features">Features</a>
                <a href="#process">Process</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
            <div className="footer-bottom">
              <p>© 2026 Firstlookc. All rights reserved.</p>
              <p className="ceo-name">CEO: Nagesh Shastri</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
