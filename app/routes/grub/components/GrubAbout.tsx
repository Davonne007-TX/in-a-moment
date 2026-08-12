import GrubStats from "./GrubStats";
import { motion, type Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function GrubAbout() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sta text-4xl font-bold text-center mb-16"
        >
          Our Story
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-14">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="flex-1"
          >
            <img
              src="./images/chef.webp"
              alt="Chef preparing food in the kitchen"
              className="w-full max-w-xl mx-auto rounded-3xl object-cover shadow-xl"
            />
          </motion.div>

          <motion.div
            className="flex-1 space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={item}
              className="font-sta text-6xl md:text-5xl font-bold leading-tight"
            >
              Fine dining at the beach
            </motion.h3>

            <motion.p
              variants={item}
              className="text-lg md:text-2xl leading-9 tracking-wide text-gray-700"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              non eros at nibh fringilla facilisis. Cras id turpis non risus
              pulvinar malesuada. Sed sed volutpat orci. Maecenas sit amet
              mollis massa, non suscipit turpis.
            </motion.p>

            <motion.p
              variants={item}
              className="text-lg md:text-2xl leading-9 tracking-wide text-gray-700"
            >
              Vivamus id lectus tempus, auctor leo nec, condimentum eros. Sed
              rutrum nisl sit amet massa posuere vestibulum. Sed vel lectus sed
              nunc facilisis suscipit nec et tellus. Fusce vitae arcu velit.
            </motion.p>

            <motion.div variants={item}>
              <GrubStats />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
