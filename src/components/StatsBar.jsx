export default function StatsBar({ stats }) {
  return (
    <div className="stats-bar">
      {stats.map((s) => (
        <div key={s.label}>
          <div className="stat-number">{s.number}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
