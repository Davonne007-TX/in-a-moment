import { desc } from "motion/react-client";
import GrubCard from "./components/GrubCard";

const grubItems = [
  {
    id: 1,
    title: "Classic Cheeseburger",
    image: "./images/burger4.webp",
    alt: "Cheeseburger with grilled onions, tomatoe, letuce, cheese, bacon, with a side of curly fries. Image by amanda-lim on Unsplash.",
    description:
      "Delicious juicy cheeseburger with grilled onions, with a side of curly fries.",
    price: 10.99,
  },
  {
    id: 2,
    title: "Hot Wings",
    image: "./images/hotWings.webp",
    alt: "Hot Wings wih a side of fries, image by Joe Boshra on Unsplash.",
    description: "Buffalo Crispy Wings with a side of carrots and celery",
    price: 5.99,
  },
  {
    id: 3,
    title: "Chicken Tenders",
    image: "./images/chickenTenders.webp",
    alt: "Seasoned chicken tenders with a side of cripsy french fries. Image by poopfishsocks on Unslash.",
    description:
      "A basket full seasond classic chicken tenders with a side of crisp fries, and choice of sauce.",
    price: 8.99,
  },
];

export default function Grub() {
  return (
    <section className="flex flex-col items-center min-h-screen ">
      <h1 className="mt-10 text-7xl font-chewy">Let's Grub</h1>

      <ul className="flex flex-col md:flex-row justify-center items-center mt-10 p-0 gap-8">
        {grubItems.map((item) => (
          <GrubCard
            key={item.id}
            grubImage={item.image}
            alt={item.alt}
            grubTitle={item.title}
            grubPrice={item.price}
            grubDescription={item.description}
          />
        ))}
      </ul>
    </section>
  );
}
