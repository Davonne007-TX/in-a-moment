import { motion } from "motion/react";

export default function TheWorks() {
  return (
    <section className="flex flex-col md:flex-row w-full">
      <div className="relative w-full md:w-1/2 h-1/2 cursor-pointer">
        <img
          src="./images/burger2.webp"
          className="w-full h-full object-cover"
          alt="Deluxe Cheeseburger and fries, image by pedro furtado on pexels"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="font-coin text-white text-2xl md:text-4xl text-center tracking-widest uppercase px-6 hover:scale-105 transition-transform duration-300"
          >
            Build Your Own Burger
          </motion.p>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 h-1/2 cursor-pointer">
        <img
          src="./images/burger3.webp"
          className="w-full h-full object-cover"
          alt="Burger and fries, image by Daniel Reche on Pexels"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="font-coin text-white text-2xl md:text-4xl text-center tracking-widest uppercase px-6 hover:scale-105 transition-transform duration-300 "
          >
            Want to grill with us?
          </motion.p>
        </div>
      </div>
    </section>
  );
}
