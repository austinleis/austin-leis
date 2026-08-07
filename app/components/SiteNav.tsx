import Link from "next/link";
import { menu } from "@/app/data/nav";

export function SiteNav({ instagram }: { instagram: string }) {
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
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </nav>
  );
}
