import { motion } from "motion/react";
import HeaderIceCream from "./components/HeaderIceCream";
import SecondHeader from "./components/SecondHeader";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Unique from "./components/Unique";

export default function Dessert() {
  const cardDescription = `It's always a good time for ice cream! We have the best flavors in town! From Oreo Blast, Neapolitan, Peanut Butter Cup, and many more! Come on down and get your brain freeze on!`;

  const flavors = [
    {
      name: "Vanilla Dream",
      emoji: "🍦",
      color: "from-amber-100 to-yellow-50",
    },
    { name: "Choco Bliss", emoji: "🍫", color: "from-amber-900 to-orange-600" },
    { name: "Strawberry", emoji: "🍓", color: "from-pink-300 to-red-200" },
    { name: "Minty Fresh", emoji: "🍃", color: "from-teal-300 to-cyan-200" },
  ];

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
        <div className="p-2 bg-pink-500 h-10"></div>
      </section>

      <Menu />
      <Unique />
    </main>
  );
}
