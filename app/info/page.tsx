import type { Metadata } from "next";
import { ogImage } from "@/app/lib/site";
import Image from "next/image";
import { getSettings } from "@/app/lib/content";

export const metadata: Metadata = {
  title: "Info",
  description:
    "About Austin Leis, a photographer based in Los Angeles, with a list of the publications his work has appeared in and the clients he works with.",
  alternates: { canonical: "/info" },
  openGraph: {
    title: "Info | Austin Leis",
    description: "About Austin Leis, photographer, Los Angeles.",
    url: "/info",
    images: [ogImage],
  },
};

export default async function Info() {
  const settings = await getSettings();
  const groups = [
    { term: "Publications", items: settings.publications },
    { term: "Clients", items: settings.clients },
  ];

  return (
    <main className="tp in">
      <h1 className="tp-ti">Info</h1>

      <div className="tp-bd">
        {settings.infoBody.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {settings.portrait ? (
        <figure className="tp-fig">
          <Image
            src={settings.portrait.src}
            alt="Portrait"
            width={settings.portrait.width}
            height={settings.portrait.height}
            sizes={settings.portrait.sizes}
            priority
          />
        </figure>
      ) : null}

      <dl className="tp-me">
        {groups.map((group) => (
          <div key={group.term}>
            <dt>{group.term}</dt>
            {group.items.map((item) => (
              <dd key={item}>{item}</dd>
            ))}
          </div>
        ))}
      </dl>
    </main>
  );
}
