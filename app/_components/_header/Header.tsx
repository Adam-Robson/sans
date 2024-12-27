import Navigation from "./Navigation";
import Logo from "./Logo";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <Navigation />
      <Logo src="/images/bow.webp" alt="le fog logo" />
    </header>
  );
}
