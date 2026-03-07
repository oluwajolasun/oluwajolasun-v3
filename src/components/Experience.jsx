import SectionHeader from "./SectionHeader";

export default function Experience({ experience }) {
  return (
    <section className="section alt" id="experience">
      <div className="section-inner">
        <SectionHeader num="02" title="Work Experience" />
        <div className="timeline">
          {experience.map((job) => (
            <div className="tl-item reveal" key={job.role + job.company}>
              <div className="tl-date">{job.date}</div>
              <div className="tl-role">{job.role}</div>
              <div className="tl-company">{job.company} — {job.location}</div>
              <ul className="tl-points">
                {job.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}