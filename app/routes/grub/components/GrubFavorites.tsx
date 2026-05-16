import CardMenu from "./CardMenu";
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
      price: 5.99,
      button: "Add to Cart",
    },
    {
      id: 3,
      title: "Chicken Tenders",
      image: "./images/chickenTenders.webp",
      alt: "Seasoned chicken tenders with a side of cripsy french fries. Image by poopfishsocks on Unslash.",
      description:
        "A basket full seasond classic chicken tenders with a side of crisp fries, and choice of sauce.",
      price: 9.49,
      button: "Add to Cart",
    },
  ];

  const grubMenu = [
    {
      id: 1,
      name: "Chili Cheese Fries",
      description:
        "Crispy golden fries topped with hearty chili and melted cheddar cheese.",
      price: 8.99,
    },
    {
      id: 2,
      name: "Classic Hot Dog",
      description:
        "All-beef hot dog served on a toasted bun with ketchup, mustard, and relish.",
      price: 6.49,
    },
    {
      id: 3,
      name: "Classic Bacon Cheeseburger",
      description:
        "Juicy beef patty topped with crispy bacon, cheddar cheese, lettuce, tomato, and pickles.",
      price: 10.99,
    },
    {
      id: 4,
      name: "Chicken Tenders",
      description:
        "Hand-breaded chicken tenders served with your choice of dipping sauce.",
      price: 9.49,
    },
    {
      id: 5,
      name: "Onion Rings",
      description:
        "Thick-cut onion rings battered and fried until crispy and golden.",
      price: 7.25,
    },
    {
      id: 6,
      name: "Mozzarella Sticks",
      description:
        "Fried mozzarella cheese sticks served with marinara dipping sauce.",
      price: 8.49,
    },
    {
      id: 7,
      name: "Philly Cheesesteak",
      description:
        "Thinly sliced steak with grilled onions, peppers, and melted provolone cheese on a hoagie roll.",
      price: 13.5,
    },
    {
      id: 8,
      name: "Hot Wings",
      description:
        "Spicy buffalo wings served with ranch or blue cheese dressing.",
      price: 11.99,
    },
    {
      id: 9,
      name: "Caesar Salad",
      description:
        "Fresh romaine lettuce tossed with Caesar dressing, parmesan cheese, and croutons.",
      price: 8.75,
    },
    {
      id: 10,
      name: "Chicken Sandwich",
      description:
        "Seasoned grilled or crispy chicken breast served with lettuce, tomato, and mayo on a brioche bun.",
      price: 10.99,
    },
    {
      id: 11,
      name: "Fried Catfish Basket",
      description:
        "Southern-style fried catfish fillets served with fries and tartar sauce.",
      price: 14.25,
    },
    {
      id: 12,
      name: "Pepperoni Pizza",
      description:
        "Hot and cheesy pepperoni pizza with crispy crust and rich tomato sauce.",
      price: 5.99,
    },
  ];
  return (
    <div className="bg-white p-8 md:rounded-4xl my-10">
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

      <h2 className="font-bold text-4xl text-center font-sta mt-20">Menu</h2>
      <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {grubMenu.map((menu) => (
          <CardMenu
            key={menu.id}
            nameOfDish={menu.name}
            dishPrice={menu.price}
            dishDescription={menu.description}
          />
        ))}
      </ul>
    </div>
  );
}
