import { motion } from "motion/react";
import HeaderIceCream from "./components/HeaderIceCream";
import Card from "./components/Card";
import SecondHeader from "./components/SecondHeader";

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

      <section className="relative z-10 px-4 py-10 md:py-16 lg:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative w-full"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                className="mx-auto w-full max-w-4xl"
              >
                <button className="bg-linear-to-tr from-pink-100 to-pink-300 text-black cursor-pointer font-bold px-6 py-2 rounded-full font-coin text-lg shadow-lg border-2 border-pink-400 hover:shadow-xl transition-all">
                  🍦 HOMEMADE ICE CREAM 🍦
                </button>
              </motion.div>

              <Card
                className="mt-8 bg-linear-to-br from-white via-pink-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/40"
                title="Ice Cream 4 Days"
                titleClassName="font-coin font-bold text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-pink-500 via-pink-500 to-pink-400 bg-clip-text text-transparent mb-4"
                description={cardDescription}
                descriptionClassName="text-lg md:text-xl tracking-wide font-quick leading-relaxed text-gray-700 mb-6"
                action="Check out our flavors"
                buttonClassName="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold py-3 px-8 rounded-full font-serif text-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-pink-300"
              />
            </motion.div>

            {/* Flavor Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 w-full"
            >
              <h3 className="text-3xl md:text-4xl font-coin text-center mb-8 text-gray-800">
                Popular Flavors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {flavors.map((flavor, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-linear-to-br ${flavor.color} rounded-2xl p-6 text-center shadow-lg cursor-pointer border-2 border-white hover:shadow-2xl transition-all`}
                  >
                    <div className="text-5xl mb-2">{flavor.emoji}</div>
                    <p className="font-quick font-semibold text-gray-800">
                      {flavor.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
