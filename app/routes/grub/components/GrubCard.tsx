import { motion } from "motion/react";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

type GrubProps = {
  grubTitle: string;
  grubDescription: string;
  grubPrice: number;
  grubButton: string;
  grubImage: string;
  alt: string;
};

export default function GrubCard({
  grubImage,
  alt,
  grubTitle,
  grubDescription,
  grubPrice,
  grubButton,
}: GrubProps) {
  return (
    <motion.section
      variants={cardVariants}
      // className="flex flex-col gap-4 border border-yellow-300 bg-linear-to-br from-yellow-50 to-orange-100 p-10 shadow-lg transition-all duration-300"
    >
      <img className="max-w-2xs rounded-3xl" src={grubImage} alt={alt} />
      <h2 className="text-2xl font-bold mt-4">{grubTitle}</h2>
      <p className="text-xl max-w-xs font-thin">{grubDescription}</p>
      <div className="flex gap-4">
        {" "}
        <p className="text-xl">${grubPrice}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.4 }}
          className="bg-[#FF6B4A] hover:scale-105 cursor-pointer w-40 p-1 text-white rounded-full text-sm md:text-lg "
        >
          {grubButton}
        </motion.button>
      </div>
    </motion.section>
  );
}
