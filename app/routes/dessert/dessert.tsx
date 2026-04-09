import { motion } from "motion/react";
import HeaderIceCream from "./components/HeaderIceCream";
import SecondHeader from "./components/SecondHeader";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Unique from "./components/Unique";
import Locations from "./components/Locations";

export default function Dessert() {
  return (
    <main className="relative">
      <HeaderIceCream />
      <SecondHeader />

      <section className="relative z-10">
        <div className=" w-full bg-[url('./images/cone.webp')] bg-cover bg-no-repeat min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative w-full"
          >
            <Hero />
          </motion.div>
        </div>
        <div className="p-2 bg-pink-500 h-10 text-center text-white tracking-widest text-xl">
          FREE 2 SCOOPS WITH EVERY ORDER, ANY FLAVOR
        </div>
      </section>

      <Menu />
      <Unique />
      <Locations />
    </main>
  );
}
