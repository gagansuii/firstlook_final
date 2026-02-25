import React from "react";
import "./Landing.css";

function LandingPage() {
    return (
        <div className="landing">
            <nav className="landing-nav">
                <div className="nav-content">
                    <h1 className="nav-logo">Firstlookc</h1>
                </div>
            </nav>

            <div className="landing-hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Background Verification Made Simple
                    </h1>
                    <p className="hero-subtitle">
                        Verify certificates flawlessly. Connect with our team.
                        Manage your documents securely.
                    </p>
                </div>
            </div>

            <div className="landing-clients">
                <div className="container">
                    <h2 className="clients-title">
                        Trusted by Leading Organizations
                    </h2>

                    <div className="clients-scroll-wrapper">
                        <div className="clients-scroll">
                            {[
                                ["🏢", "TechCorp"],
                                ["💼", "Global Finance"],
                                ["🏛️", "Enterprise Solutions"],
                                ["🌐", "International Group"],
                                ["⚡", "Innovation Labs"],
                                ["🔷", "Prime Industries"],
                                ["🌟", "Star Enterprises"],
                                ["📊", "Data Systems"],
                            ]
                                .concat([
                                    ["🏢", "TechCorp"],
                                    ["💼", "Global Finance"],
                                    ["🏛️", "Enterprise Solutions"],
                                    ["🌐", "International Group"],
                                    ["⚡", "Innovation Labs"],
                                    ["🔷", "Prime Industries"],
                                    ["🌟", "Star Enterprises"],
                                    ["📊", "Data Systems"],
                                ])
                                .map(([icon, name], i) => (
                                    <div className="client-item" key={i}>
                                        <div className="client-logo">{icon}</div>
                                        <span className="client-name">{name}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="landing-features">
                <div className="container">
                    <h2 className="section-title">Why Choose Firstlookc?</h2>

                    <div className="features-grid">
                        {[
                            ["🔒", "Secure Verification", "Flawless certificate verification with enterprise-grade security"],
                            ["📁", "Document Management", "Upload, store, and manage all your verification documents in one place"],
                            ["💬", "Direct Communication", "Connect and communicate directly with our verification team"],
                            ["⚡", "Fast Processing", "Quick and efficient verification process"],
                            ["👥", "Team Collaboration", "Seamless collaboration between clients and experts"],
                            ["📊", "Complete Dashboard", "Track all verification activities"],
                        ].map(([icon, title, desc], i) => (
                            <div className="feature-card" key={i}>
                                <div className="feature-icon">{icon}</div>
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="landing-process">
                <div className="container">
                    <h2 className="section-title">How It Works</h2>

                    <div className="process-steps">
                        {[
                            ["1", "Upload Documents", "Securely upload your certificates"],
                            ["2", "Expert Review", "Verification team checks authenticity"],
                            ["3", "Real-Time Updates", "Track verification status"],
                            ["4", "Verified Results", "Download verification reports"],
                        ].map(([num, title, desc], i) => (
                            <div className="process-step" key={i}>
                                <div className="step-number">{num}</div>
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="landing-cta">
                <div className="container">
                    <h2 className="cta-title">Ready to Get Started?</h2>
                    <p className="cta-subtitle">
                        Join organizations worldwide using Firstlookc
                    </p>
                </div>
            </div>

            <footer className="landing-footer">
                <div className="container">
                    <p>&copy; 2024 Firstlookc. All rights reserved.</p>
                    <p className="ceo-name">CEO: Nagesh Shastri</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;