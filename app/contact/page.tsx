import type { Metadata } from "next";
import { ogImage } from "@/app/lib/site";
import Image from "next/image";
import { contactFigure } from "@/app/data/figures";
import { instagram } from "@/app/data/nav";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Austin Leis about photography commissions, licensing and press. Based in Los Angeles, working internationally.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Austin Leis",
    description: "Enquiries about photography commissions, licensing and press.",
    url: "/contact",
    images: [ogImage],
  },
};

export default function Contact() {
  return (
    <main className="tp ct">
      <h1 className="tp-ti">Contact</h1>

      <div className="tp-bd">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris.
        </p>
      </div>

      <figure className="tp-fig">
        <Image
          src={contactFigure.src}
          alt=""
          width={contactFigure.width}
          height={contactFigure.height}
          sizes={contactFigure.sizes}
          priority
        />
      </figure>

      <dl className="tp-me">
        <div>
          <dt>Enquiries</dt>
          <dd>
            <a className="tx-link" href="mailto:austin@austinleis.com">
              austin@austinleis.com
            </a>
          </dd>
        </div>
        <div>
          <dt>Studio</dt>
          <dd>Los Angeles, California</dd>
        </div>
        <div>
          <dt>Follow</dt>
          <dd>
            <a
              className="tx-link"
              href={instagram.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {instagram.label}
            </a>
          </dd>
        </div>
      </dl>
    </main>
  );
}
