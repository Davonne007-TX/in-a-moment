import { motion } from "motion/react";

export default function Unique() {
  const myCards = [
    {
      name: "OUR PROMISE",
      image: "./images/sunset.webp",
      alt: "Family walking into the sunset, image by senivpetro on FreePik",
      id: 1,
    },

    {
      name: "THE WORKS",
      image: "./images/burger.webp",
      alt: "Burger and fries, image by Clay Banks on Unsplash",
      id: 2,
    },
    {
      name: "OUR FARM",
      image: "./images/farm.webp",
      alt: "A farm field, image by Özkan AYGÜN on Pexels ",
      id: 3,
    },
  ];

  return (
    <section className="relative flex flex-col justify-center items-center">
      <div className="absolute top-0 left-0 w-full min-h-screen bg-[url('./images/cows2.webp')] bg-center bg-no-repeat bg-cover" />

      <div className="absolute top-0 left-0 w-full h-84 bg-black/30" />

      <div className=" relative p-4 flex-col items-center text-center px-4 w-full">
        <div className="max-w-xl mx-auto my-20">
          <h3 className="text-white font-ber text-5xl mb-4">
            The Brain Freeze{" "}
            <span className="text-[#56F048] p-2">Difference</span>
          </h3>
          <p className="text-white/90 text-2xl font-sans leading-10 ">
            Our family, through each generation, has had the pleasure of serving
            our customers the finest. We strive for quality ingredients, lots of
            flavors, a meal and of course a brain freeze.
          </p>

          <div className="my-20 flex flex-col lg:flex-row justify-center items-center gap-10">
            {myCards.map((cards) => (
              <motion.div
                key={cards.id}
                className="bg-white rounded-t-3xl cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
              >
                <img
                  src={cards.image}
                  alt={cards.alt}
                  className=" max-w-2xs md:max-w-md lg:max-w-sm rounded-t-2xl"
                />
                <h4 className="font-semibold font-serif p-4">{cards.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
