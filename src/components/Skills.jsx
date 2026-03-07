import SectionHeader from "./SectionHeader";

export default function Skills({ skills }) {
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <SectionHeader num="01" title="Skills & Competencies" />
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-card reveal" key={s.name}>
              <div className="skill-cat">{s.category}</div>
              <div className="skill-name">{s.name}</div>
              <div className="skill-tags">
                {s.tags.map((t) => (
                  <span className="skill-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
