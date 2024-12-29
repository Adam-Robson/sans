import Link from "next/link";
import { navigation } from "@/_constants/navigation";
import "./navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <nav className="navlinks">
        {navigation.map(({ id, title, url }) => (
          <Link key={id} href={url} className="navlink">
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
