import { motion } from "motion/react";
import Card from "./Card";

export default function Hero() {
  return (
    <section>
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        className=" w-full max-w-4xl p-8"
      >
        <button className="bg-linear-to-tr from-pink-100 to-pink-300 text-black cursor-pointer font-bold px-4 py-2 rounded-full font-coin text-lg shadow-lg border-2 border-pink-400 hover:shadow-xl transition-all">
          🍦 HOMEMADE ICE CREAM 🍦
        </button>
      </motion.div>

      <Card
        className="rounded-3xl p-8 shadow-xs"
        title="What time is it? Ice Cream Time!"
        titleClassName="font-coin font-bold text-5xl md:text-7xl bg-gradient-to-r from-pink-500 via-pink-500 to-pink-400 bg-clip-text text-transparent mb-4"
        description="We are open 24/7, all day everyday!"
        descriptionClassName="text-lg md:text-xl tracking-wide  text-white font-quick leading-relaxed text-gray-700 mb-6"
        action={""}
        buttonClassName={""}
      />
    </section>
  );
}
