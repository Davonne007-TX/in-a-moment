import { motion } from "motion/react";

export default function Menu() {
  const ourMenu = [
    {
      name: "Breakfast",
      itemImage: "./images/breakfast.webp",
      alt: "Breakfast Platter, image by pexels-hebersantos on Pexels",
      id: 1,
    },
    {
      name: "Hamburgers",
      itemImage: "./images/hamburger.webp",
      alt: "Hamburger deluxe, image by muhammad.abdullah on freePik",
      id: 2,
    },
    {
      name: "Ice Cream",
      itemImage: "./images/iceCreamMix.webp",
      alt: "Vanilla and Chocolate mix in a cup, image by Haberdoedas Photography on Pexels",
      id: 3,
    },

    {
      name: "Salads",
      itemImage: "./images/ceaser.webp",
      alt: "Cesar Salad, image by muhammad.abdullah on Pexels",
      id: 4,
    },

    {
      name: "Sides",
      itemImage: "./images/fries.webp",
      alt: "French Fries, image bytohamina on Pexels",
      id: 5,
    },
    {
      name: "Combo Meals",
      itemImage: "./images/chicken.webp",
      alt: "Chicken Sandwich and Fries, image by pexles-salman-khan on Pexels",
      id: 6,
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-4 my-20">
      <h2 className=" text-lg md:text-3xl font-quic text-center">
        ITS SO GOOD YOU GET A BRAIN FREEZE AND SOME FOOD!
      </h2>
      <p className="font-coin text-3xl text-pink-500">Our Menu</p>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-30 mt-10">
        {ourMenu.map((item) => (
          <motion.li
            key={item.id}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
          >
            <img
              src={item.itemImage}
              alt={item.alt}
              loading="lazy"
              className="w-48 h-48 rounded-full object-cover cursor-pointer"
            />
            <p className="text-center p-2 font-serif text-2xl tracking-wide">
              {item.name}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
