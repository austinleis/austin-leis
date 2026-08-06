import { createClient } from "@sanity/client";
import lexo from "../studio/node_modules/lexorank/lib/index.js";

const { LexoRank } = lexo;
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_READ_TOKEN,
  apiVersion: "2024-10-01",
  useCdn: false,
});

const docs = await client.fetch(
  `*[_type == "project"]|order(order asc, client asc){_id, client, order, orderRank}`,
);

let rank = LexoRank.middle();
const tx = docs.reduce((t, doc) => {
  const patch = client.patch(doc._id).set({ orderRank: rank.toString() }).unset(["order"]);
  rank = rank.genNext();
  return t.patch(patch);
}, client.transaction());

await tx.commit();
console.log(`ranked ${docs.length} projects, first "${docs[0].client}", last "${docs[docs.length - 1].client}"`);
