import GrubCard from "./GrubCard";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function GrubFavorites() {
  const grubItems = [
    {
      id: 1,
      title: "Classic Cheeseburger",
      image: "./images/burger4.webp",
      alt: "Classic Cheeseburger with grilled onions, tomatoe, letuce, cheese, bacon, with a side of curly fries. Image by amanda-lim on Unsplash.",
      description:
        "Delicious juicy cheeseburger with grilled onions, tomatoe, letuce, cheese, bacon,  with a side of curly fries.",
      price: 8.99,
      button: "Add to Cart",
    },
    {
      id: 2,
      title: "Pizza",
      image: "./images/pizza1.webp",
      alt: "Row of pizzas, we got chicken and peppers, pepporoni and cheese and pineapple and pepporoni, image by Meg Boulden  ",
      description:
        "Unlimited Slices of Pizza. Cooked to perfection, taste the flavor.",
      price: 12.99,
      button: "Add to Cart",
    },
    {
      id: 3,
      title: "Chicken Tenders",
      image: "./images/chickenTenders.webp",
      alt: "Seasoned chicken tenders with a side of cripsy french fries. Image by poopfishsocks on Unslash.",
      description:
        "A basket full seasond classic chicken tenders with a side of crisp fries, and choice of sauce.",
      price: 7.49,
      button: "Add to Cart",
    },
    {
      id: 3,
      title: "Chicken Sandwich",
      image: "./images/chickenSandwhich.webp",
      alt: "Seasoned chicken sandiwich with extra crispyness, specail sauce, lettuce, with a side of cripsy french fries. Image by Hybrid Storytellers on Unslash.",
      description:
        "Seasond classic grilled or crispy chicken sandwich with secret sauce, lettuce, and pickles, with a side of potatoe wedges.",
      price: 9.99,
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
