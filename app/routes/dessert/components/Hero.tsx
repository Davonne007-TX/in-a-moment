import { motion } from "motion/react";
import Card from "./Card";
import MyIceCream from "./MyIceCream";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col justify-between">
        {/* <MyIceCream /> */}
        <motion.div
          whileHover={{ y: -5, scale: 1.01 }}
          className=" w-full max-w-4xl p-2"
        >
          <div className="mt-60">
            <button className="bg-linear-to-tr from-red-300 to-red-600 text-white cursor-pointer font-bold py-2 ml-6 rounded-full font-coin text-lg shadow-lg border-2 border-red-400 hover:shadow-xl transition-all">
              🍔 FRESH TO ORDER 🍦
            </button>

            <Card
              className="rounded-3xl p-8 shadow-xs"
              title="Best Burgers & Ice Cream in Town!"
              titleClassName="font-coin font-bold text-5xl md:text-6xl bg-black bg-clip-text text-transparent mb-4 max-w-lg"
              description="We are open 24/7, all day everyday, order online or come in today! Burgers and ice cream for everyone! We can't wait to see you!"
              descriptionClassName="text-lg md:text-xl tracking-wide font-quick leading-relaxed mb-6 max-w-lg"
              action={""}
              buttonClassName={""}
            />
          </div>
        </motion.div>

        {/* //buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-3 ml-8 -mt-8 my-10"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-400 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/20"
          >
            View Flavors
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/90 text-gray-700 font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 backdrop-blur-sm"
          >
            Order Online
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
