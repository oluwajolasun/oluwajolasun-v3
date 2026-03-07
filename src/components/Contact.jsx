export default function Contact({ data, onHover, onUnhover }) {
  const links = [
    { icon: "in", label: data.linkedin, href: `https://${data.linkedin}` },
    { icon: "gh", label: data.github, href: `https://${data.github}` },
    { icon: "↗", label: data.website, href: `https://${data.website}` },
  ];

  return (
    <section className="section alt" id="contact">
      <div className="contact-inner">
        <div>
          <div className="hero-label" style={{ marginBottom: "1rem" }}>
            Let's Connect
          </div>
          <div className="contact-headline">
            Ready to contribute to your IT team.
          </div>
          <p className="contact-sub">
            Available for IT Support, Infrastructure, Helpdesk, and Systems
            Administration roles in Calgary and beyond. Let's talk about how I
            can add value to your organization.
          </p>
          <a
            href={`mailto:${data.email}`}
            className="btn-primary"
            onMouseEnter={onHover}
            onMouseLeave={onUnhover}
          >
            {data.email} ↗
          </a>
        </div>
        <div className="contact-links">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="contact-link"
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              onMouseEnter={onHover}
              onMouseLeave={onUnhover}
            >
              <span className="contact-icon">{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
