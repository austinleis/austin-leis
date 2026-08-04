import type { Metadata } from "next";
import Image from "next/image";
import { clients, infoImage, publications } from "@/app/data/info";

export const metadata: Metadata = {
  title: "Info - Austin Leis",
  alternates: { canonical: "/info" },
};

const groups = [
  { term: "Publications", items: publications },
  { term: "Clients", items: clients },
];

export default function Info() {
  return (
    <main className="tp in">
      <h1 className="tp-ti">Info</h1>

      <div className="tp-bd">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
        </p>
      </div>

      <figure className="tp-fig">
        <Image
          src={infoImage.src}
          alt="Portrait drawing"
          width={infoImage.width}
          height={infoImage.height}
          sizes={infoImage.sizes}
          priority
        />
      </figure>

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
