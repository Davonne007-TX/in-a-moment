import GrubHeader from "./components/GrubHeader";
import GrubHero from "./components/GrubHero";
import GrubAbout from "./components/GrubAbout";
import GrubFavorites from "./components/GrubFavorites";
import GrubVisit from "./components/GrubVisit";
import GrubMenu from "./components/GrubMenu";
import GrubFooter from "./components/GrubFooter";

export default function Grub() {
  return (
    <section className="relative flex flex-col items-center min-h-screen">
      <div className="absolute inset-0"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <GrubHeader />
        <GrubHero />
        <GrubAbout />
        <GrubFavorites />
        <GrubMenu />
        <GrubVisit />
        <GrubFooter />
      </div>
    </section>
  );
}
