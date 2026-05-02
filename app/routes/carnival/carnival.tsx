import CarnivalHeader from "./components/CarnivalHeader";
import CarnivalHero from "./components/CarnivalHero";
import Food from "./components/Food";

export default function carnival() {
  return (
    <section className="bg-[#FAF9F6] min-h-screen">
      <CarnivalHeader />
      <CarnivalHero />
      <Food />
    </section>
  );
}
