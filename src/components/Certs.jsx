import SectionHeader from "./SectionHeader";

export default function Certs({ certifications, plannedCerts }) {
  return (
    <section className="section" id="certs">
      <div className="section-inner">
        <SectionHeader num="03" title="Certifications & Education" />
        <div className="certs-grid">
          {certifications.map((c) => (
            <div className="cert-card reveal" key={c.name}>
              <div className={`cert-badge ${c.status}`}>
                {c.status === "in-progress" ? "In Progress" : "Completed"}
              </div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-issuer">
                {c.issuer} · {c.date}
              </div>
            </div>
          ))}
        </div>
        <div className="planned-card reveal">
          <div>
            <div className="planned-title">Next Target Certifications</div>
            <div className="planned-tags">
              {plannedCerts.map((c) => (
                <span className="skill-tag" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="planned-arrow">Planned →</div>
        </div>
      </div>
    </section>
  );
}
