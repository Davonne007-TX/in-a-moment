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
      className="flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        className="h-64 w-full rounded-2xl object-cover"
        src={grubImage}
        alt={alt}
      />

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">{grubTitle}</h2>

        <p className="max-w-xs text-base text-gray-600">{grubDescription}</p>
      </div>

      <div className="mt-auto flex items-center justify-between gap-4">
        <p className="text-xl font-bold">${grubPrice}</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer rounded-full bg-[#FF6B4A] px-6 py-2 text-sm font-semibold text-white shadow-md"
        >
          {grubButton}
        </motion.button>
      </div>
    </motion.section>
  );
}
