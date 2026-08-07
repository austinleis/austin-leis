import { HomeCollage } from "@/app/components/HomeCollage";
import { getHomeTiles } from "@/app/lib/content";

export default async function Home() {
  const tiles = await getHomeTiles();
  return <HomeCollage tiles={tiles} />;
}
