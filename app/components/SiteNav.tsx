import Link from "next/link";
import { instagram, menu } from "@/app/data/nav";

export function SiteNav() {
  return (
    <nav id="n">
      <div id="n-lo">
        <Link href="/">
          <span>Austin Leis</span>
        </Link>
      </div>
      <ul id="n-me">
        {menu.map((item) => (
          <li key={item.href}>
            <Link className="tx-link" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul id="n-la">
        <li>
          <a
            className="tx-link"
            href={instagram.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {instagram.label}
          </a>
        </li>
      </ul>
    </nav>
  );
}
