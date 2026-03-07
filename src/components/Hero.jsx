const Hero = ({ data, onHover, onUnhover }) => {
  return (
    <section className="hero-section">
      <div className="hero">
        <div>
          <div className="hero-label">{data.title}</div>
          <h1>
            {data.name.split(" ")[0]}
            <br />
            {data.name.split(" ")[1]}
          </h1>
          <div className="hero-title">{data.subtitle}</div>
          <p className="hero-desc">{data.summary}</p>
          <div className="hero-actions">
            <a
              href={`mailto:${data.email}`}
              className="btn-primary"
              onMouseEnter={onHover}
              onMouseLeave={onUnhover}
            >
              Get in Touch ↗
            </a>
            <a
              href="resume.pdf"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={onHover}
              onMouseLeave={onUnhover}
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="terminal">
          <div className="term-header">
            <div className="term-dot" style={{ background: "#ff5f56" }} />
            <div className="term-dot" style={{ background: "#ffbd2e" }} />
            <div className="term-dot" style={{ background: "#27c93f" }} />
            <span className="term-title">oluwajolasun@workstation:~$</span>
          </div>
          <div className="term-body">
            <div>
              <span className="t-prompt">❯</span>{" "}
              <span className="t-cmd">whoami --verbose</span>
            </div>
            <span className="t-out">
              <span className="t-key">name</span>:{" "}
              <span className="t-val">"{data.name}"</span>
            </span>
            <span className="t-out">
              <span className="t-key">role</span>:{" "}
              <span className="t-val">"{data.title}"</span>
            </span>
            <span className="t-out">
              <span className="t-key">location</span>:{" "}
              <span className="t-val">"{data.location}"</span>
            </span>
            <span className="t-out">
              <span className="t-key">education</span>:{" "}
              <span className="t-val">"MEng Software Eng @ UCalgary"</span>
            </span>
            <br />
            <div>
              <span className="t-prompt">❯</span>{" "}
              <span className="t-cmd">ls ./skills/</span>
            </div>
            <span className="t-out">
              networking/&nbsp;&nbsp; windows-support/&nbsp;&nbsp; cloud/
            </span>
            <span className="t-out">
              active-directory/&nbsp;&nbsp; hyper-v/&nbsp;&nbsp; linux/
            </span>
            <span className="t-out">
              m365-admin/&nbsp;&nbsp; sql/&nbsp;&nbsp; powershell/
            </span>
            <br />
            <div>
              <span className="t-prompt">❯</span>{" "}
              <span className="t-cmd">cat status.txt</span>
            </div>
            <span className="t-out">
              <span style={{ color: "var(--accent3)" }}>✔</span> CCNA In
              Progress — Expected Aug 2026
            </span>
            <span className="t-out">
              <span style={{ color: "var(--accent3)" }}>✔</span> Available for
              IT roles immediately
            </span>
            <span className="t-out">
              <span style={{ color: "var(--accent)" }}>▌</span>
              <span className="t-cursor" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
