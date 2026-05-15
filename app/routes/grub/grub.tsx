import { desc } from "motion/react-client";
import GrubCard from "./components/GrubCard";
import GrubHeader from "./components/GrubHeader";
import GrubHero from "./components/GrubHero";
import GrubAbout from "./components/GrubAbout";
import GrubFavorites from "./components/GrubFavorites";

export default function Grub() {
  return (
    <section className="relative flex flex-col items-center min-h-screen">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <GrubHeader />
        <GrubHero />
        <GrubAbout />

        <GrubFavorites />
      </div>
    </section>
  );
}
