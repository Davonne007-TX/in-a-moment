import { motion } from "motion/react";
import HeaderIceCream from "./components/HeaderIceCream";
import Card from "./components/Card";
import SecondHeader from "./components/SecondHeader";
import Hero from "./components/Hero";

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

      <section className="relative z-10  lg:py-10 bg-[url('./images/cone.webp')] bg-cover bg-no-repeat min-h-screen">
        <div className="flex w-full max-w-5xl flex-col gap-10 md:gap-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative w-full"
            >
              <Hero />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
