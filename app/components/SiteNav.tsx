import Link from "next/link";

const menu = [
  { label: "Work", href: "/" },
  { label: "Info", href: "/info" },
  { label: "Contact", href: "/contact" },
];

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
            <Link className="tx-link" href={item.href} prefetch={false}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul id="n-la">
        <li>
          <a
            className="tx-link"
            href="https://www.instagram.com/"
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
