import GrubCard from "./GrubCard";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
export default function GrubFavorites() {
  const grubItems = [
    {
      id: 1,
      title: "Classic Cheeseburger",
      image: "./images/burger4.webp",
      alt: "Cheeseburger with grilled onions, tomatoe, letuce, cheese, bacon, with a side of curly fries. Image by amanda-lim on Unsplash.",
      description:
        "Delicious juicy cheeseburger with grilled onions, with a side of curly fries.",
      price: 2.99,
      button: "Add to Cart",
    },
    {
      id: 2,
      title: "Pizza",
      image: "./images/pizza.webp",
      alt: "Hot Wings wih a side of fries, image by Joe Boshra on Unsplash.",
      description:
        "Classic Slice of Pizza, your choice of unlimited toppings. Cooked to perfection.",
      price: 1.99,
      button: "Add to Cart",
    },
    {
      id: 3,
      title: "Chicken Tenders",
      image: "./images/chickenTenders.webp",
      alt: "Seasoned chicken tenders with a side of cripsy french fries. Image by poopfishsocks on Unslash.",
      description:
        "A basket full seasond classic chicken tenders with a side of crisp fries, and choice of sauce.",
      price: 3.49,
      button: "Add to Cart",
    },
    {
      id: 3,
      title: "Chicken Tenders",
      image: "./images/chickenTenders.webp",
      alt: "Seasoned chicken tenders with a side of cripsy french fries. Image by poopfishsocks on Unslash.",
      description:
        "A basket full seasond classic chicken tenders with a side of crisp fries, and choice of sauce.",
      price: 3.49,
      button: "Add to Cart",
    },
  ];

  return (
    <section className=" p-4 my-18 flex flex-col justify-center items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-bold text-4xl text-center font-sta"
      >
        Classic Deals
      </motion.h2>

      <motion.li
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 p-0 gap-20"
      >
        {grubItems.map((item) => (
          <GrubCard
            key={item.id}
            grubImage={item.image}
            alt={item.alt}
            grubTitle={item.title}
            grubPrice={item.price}
            grubButton={item.button}
            grubDescription={item.description}
          />
        ))}
      </motion.li>
    </section>
  );
}
