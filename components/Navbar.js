import Logo from "./Logo";

const left = ["Markets", "Portfolio", "Research"];
const right = ["Insights", "Wealth", "Contact"];

const Links = ({ items }) => (
  <ul className="nav-links">
    {items.map((l) => (
      <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
    ))}
  </ul>
);

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner" aria-label="Primary">
        <div className="nav-side nav-left"><Links items={left} /></div>
        <a href="/" className="nav-logo" aria-label="FinanceCorp home"><Logo /></a>
        <div className="nav-side nav-right"><Links items={right} /></div>
      </nav>
    </header>
  );
}
