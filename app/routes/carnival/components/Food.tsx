import LetsSearch from "./LetsSearch";

export default function Food() {
  const menuItems = [
    {
      name: "Popcorn",
      image: "./images/popcorn.webp",
      alt: "Popcorn machine, image by Alex Kallgas on Unsplash",
      id: 1,
    },
    {
      name: "Hot Dog and Fries",
      image: "./images/hotDog.webp",
      alt: "Loaded hot dog and fries, image from mr-wdh on Unsplash",
      id: 2,
    },
    {
      name: "Chili Cheese Fries",
      image: "./images/cheese.webp",

      alt: "Loaded Chili Cheese Fries and Classic Bacon Cheeseburger and coke, image by Luca Andrade on Pexels",
      id: 3,
    },

    {
      name: "Ice Cream",
      image: "./images/iceCreamCone.webp",
      alt: "Ice Cream triple stacked, image by William Alvarez",
      id: 4,
    },
  ];

  return (
    <section>
      <LetsSearch />

      <div>
        <ul className="flex flex-col lg:flex-row gap-8 md:gap-10 p-8">
          {menuItems.map((item) => (
            <img src={item.image} className="max-w-xs" key={item.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
