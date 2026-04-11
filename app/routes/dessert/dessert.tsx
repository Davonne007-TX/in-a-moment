import { motion } from "motion/react";
import HeaderIceCream from "./components/HeaderIceCream";
import SecondHeader from "./components/SecondHeader";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Unique from "./components/Unique";
import Locations from "./components/Locations";
import TheWorks from "./components/TheWorks";
import Footer from "./components/Footer";

export default function Dessert() {
  return (
    <main className="relative">
      <section className="relative z-10">
        <div className=" w-full bg-[url('./images/open.webp')] bg-cover bg-no-repeat min-h-screen">
          <HeaderIceCream />
          <SecondHeader />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative w-full"
          >
            <Hero />
          </motion.div>
        </div>
        <div className="p-2 bg-[#cf1020]  md:h-10 text-center text-white tracking-widest md:text-xl">
          FREE 2 SCOOPS WITH EVERY ORDER, ANY FLAVOR
        </div>
      </section>

      <Menu />
      <Unique />
      <Locations />
      <TheWorks />
      <Footer />
    </main>
  );
}
