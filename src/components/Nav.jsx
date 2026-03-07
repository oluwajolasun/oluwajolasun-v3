export default function Nav({ onHover, onUnhover }) {
  return (
    <nav className="nav">
      <div className="nav-logo">
        {"< JJ /> 👨🏾‍💻👨🏾‍🔧"}
      </div>
      <ul className="nav-links">
        {["skills", "experience", "certs", "lab", "contact"].map((id) => (
          <li key={id}>
            <a href={`#${id}`} onMouseEnter={onHover} onMouseLeave={onUnhover}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div className="status-badge">
        <div className="status-dot" />
        Open to Work
      </div>
    </nav>
  );
}
