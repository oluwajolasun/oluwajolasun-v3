import SectionHeader from "./SectionHeader";

export default function HomeLab({ lab }) {
  return (
    <section className="section alt" id="lab">
      <div className="section-inner">
        <SectionHeader num="04" title="Home Lab & Projects" />
        {lab.map((project) => (
          <div className="lab-card reveal" key={project.title}>
            <div className="lab-title">
              {project.title}
              {project.active && <span className="lab-active">ACTIVE</span>}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lab-link"
                >
                  View ↗
                </a>
              )}
            </div>
            <div className="lab-tags">
              {project.tags.map((t) => (
                <span className="lab-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="lab-desc">{project.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
