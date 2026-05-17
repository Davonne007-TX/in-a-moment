import GrubCard from "./GrubCard";

export default function GrubFavorites() {
  const grubItems = [
    {
      id: 1,
      title: "Classic Cheeseburger",
      image: "./images/burger4.webp",
      alt: "Cheeseburger with grilled onions, tomatoe, letuce, cheese, bacon, with a side of curly fries. Image by amanda-lim on Unsplash.",
      description:
        "Delicious juicy cheeseburger with grilled onions, with a side of curly fries.",
      price: 10.99,
      button: "Add to Cart",
    },
    {
      id: 2,
      title: "Pizza",
      image: "./images/pizza.webp",
      alt: "Hot Wings wih a side of fries, image by Joe Boshra on Unsplash.",
      description:
        "Classic Slice of Pizza, your choice of unlimited toppings. Served with a tall glass of beer",
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
      price: 7.49,
      button: "Add to Cart",
    },
  ];

  return (
    <div className="border border-yellow-300 bg-linear-to-br from-yellow-50 to-orange-100 p-8 md:rounded-4xl my-10">
      <h2 className="font-bold text-4xl text-center font-sta">
        Classic Favorites
      </h2>

      <ul className="flex flex-col md:flex-row justify-center items-center mt-10 p-0 gap-10">
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
      </ul>
    </div>
  );
}
