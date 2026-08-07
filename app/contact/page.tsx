import type { Metadata } from "next";
import { ogImage } from "@/app/lib/site";
import Image from "next/image";
import { getSettings } from "@/app/lib/content";

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

export default async function Contact() {
  const settings = await getSettings();

  return (
    <main className="tp ct">
      <h1 className="tp-ti">Contact</h1>

      <div className="tp-bd">
        {settings.contactBody.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {settings.contactImage ? (
        <figure className="tp-fig">
          <Image
            src={settings.contactImage.src}
            alt=""
            width={settings.contactImage.width}
            height={settings.contactImage.height}
            sizes={settings.contactImage.sizes}
            priority
          />
        </figure>
      ) : null}

      <dl className="tp-me">
        <div>
          <dt>Enquiries</dt>
          <dd>
            <a className="tx-link" href={`mailto:${settings.email}`}>
              {settings.email}
            </a>
          </dd>
        </div>
        <div>
          <dt>Studio</dt>
          <dd>{settings.location}</dd>
        </div>
        <div>
          <dt>Follow</dt>
          <dd>
            <a
              className="tx-link"
              href={settings.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </dd>
        </div>
      </dl>
    </main>
  );
}
