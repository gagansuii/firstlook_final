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
  [
    "🔒",
    "Secure Verification",
    "Flawless certificate verification with enterprise-grade security.",
  ],
  [
    "📁",
    "Document Management",
    "Upload, store, and manage all your verification documents in one place.",
  ],
  [
    "💬",
    "Direct Communication",
    "Connect and communicate directly with our verification team.",
  ],
  ["⚡", "Fast Processing", "Quick and efficient verification workflows."],
  [
    "👥",
    "Team Collaboration",
    "Seamless collaboration between clients and experts.",
  ],
  ["📊", "Complete Dashboard", "Track all verification activity in one view."],
];

const steps = [
  ["1", "Upload Documents", "Securely upload your certificates."],
  ["2", "Expert Review", "Verification team checks authenticity."],
  ["3", "Real-Time Updates", "Track verification status as it progresses."],
  ["4", "Verified Results", "Download verification reports instantly."],
];

function LandingPage() {
  return (
    <div className="landing">
      <nav className="landing-nav">
        <div className="container nav-content">
          <div className="nav-logo">Firstlookc</div>
          <div className="nav-actions">
            <a className="nav-link" href="#features">
              Features
            </a>
            <a className="nav-link" href="#process">
              Process
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <header className="landing-hero">
        <div className="container hero-content">
          <h1 className="hero-title">Background Verification Made Simple</h1>
          <p className="hero-subtitle">
            Verify certificates flawlessly. Connect with our team. Manage your
            documents securely.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get a Demo
            </a>
            <a className="btn btn-ghost" href="#process">
              See How It Works
            </a>
          </div>
        </div>
      </header>

      <section className="landing-clients" aria-label="Clients">
        <div className="container">
          <h2 className="clients-title">Trusted by Leading Organizations</h2>

          <div className="clients-scroll-wrapper">
            <div className="clients-scroll">
              {clients.concat(clients).map(([icon, name], i) => (
                <div className="client-item" key={i}>
                  <div className="client-logo" aria-hidden="true">
                    {icon}
                  </div>
                  <span className="client-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="landing-features" id="features">
        <div className="container">
          <h2 className="section-title">Why Choose Firstlookc?</h2>

          <div className="features-grid">
            {features.map(([icon, title, desc], i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon" aria-hidden="true">
                  {icon}
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-process" id="process">
        <div className="container">
          <h2 className="section-title">How It Works</h2>

          <div className="process-steps">
            {steps.map(([num, title, desc], i) => (
              <div className="process-step" key={i}>
                <div className="step-number">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-cta">
        <div className="container">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">
            Join organizations worldwide using Firstlookc.
          </p>
          <div className="cta-actions">
            <a className="btn btn-primary" href="#contact">
              Request a Demo
            </a>
            <a className="btn btn-secondary" href="#features">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      <section className="landing-contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <h2 className="section-title">Talk to Our Verification Team</h2>
            <p className="contact-subtitle">
              Tell us about your verification volume, compliance needs, and
              timelines. We will respond with a tailored demo and onboarding
              plan.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href="mailto:hello@firstlookc.com">
                Email Our Team
              </a>
              <a className="btn btn-ghost" href="#process">
                Review the Process
              </a>
            </div>
          </div>
          <div className="contact-card">
            <h3>What happens next</h3>
            <ul className="contact-list">
              <li>We review your verification requirements.</li>
              <li>You get a tailored demo and rollout timeline.</li>
              <li>We set up secure document access and reporting.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="container footer-content">
          <p>© 2026 Firstlookc. All rights reserved.</p>
          <p className="ceo-name">CEO: Nagesh Shastri</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
