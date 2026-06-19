import CardMenu from "./CardMenu";

export default function GrubMenu() {
  const grubMenu = [
    {
      id: 1,
      name: "Chili Cheese Fries",
      description:
        "Crispy golden fries topped with hearty chili and melted cheddar cheese.",
      price: 4.99,
    },
    {
      id: 2,
      name: "Classic Hot Dog",
      description:
        "All-beef hot dog served on a toasted bun with ketchup, mustard, and relish. Comes with a bag of chips and small soda.",
      price: 3.49,
    },
    {
      id: 3,
      name: "Classic Cheeseburger",
      description:
        "Juicy beef patty topped with crispy bacon, cheddar cheese, lettuce, tomato, and pickles.",
      price: 2.99,
    },
    {
      id: 4,
      name: "Chicken Tenders",
      description:
        "Hand-breaded fried chicken tenders served with your choice of dipping sauce, fries and a drink",
      price: 3.49,
    },
    {
      id: 5,
      name: "Onion Rings",
      description:
        "Thick-cut onion rings battered and fried until crispy and golden.",
      price: 4.25,
    },
    {
      id: 6,
      name: "Mozzarella Sticks",
      description:
        "Fried mozzarella cheese sticks served with marinara dipping sauce.",
      price: 3.49,
    },
    {
      id: 7,
      name: "Philly Cheesesteak",
      description:
        "Thinly sliced steak with grilled onions, peppers, and melted provolone cheese on a hoagie roll.",
      price: 12.5,
    },
    {
      id: 8,
      name: "Hot Wings",
      description:
        "Spicy buffalo wings served with ranch or blue cheese dressing, large fry and drink.",
      price: 13.99,
    },
    {
      id: 9,
      name: "Caesar Salad",
      description:
        "Fresh romaine lettuce tossed with Caesar dressing, parmesan cheese, and croutons.",
      price: 6.75,
    },
    {
      id: 10,
      name: "Chicken Switch",
      description:
        "Seasoned grilled or crispy chicken breast served with lettuce, tomato, and mayo on a brioche bun.",
      price: 9.99,
    },
    {
      id: 11,
      name: "Fried Catfish Basket",
      description:
        "Southern-style fried catfish fillets served with fries and tartar sauce.",
      price: 10.25,
    },
    {
      id: 12,
      name: "Pepperoni Pizza",
      description:
        "Hot and cheesy pepperoni pizza with crispy crust and rich tomato sauce.",
      price: 1.99,
    },
  ];
  return (
    <section>
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

      <div className="flex flex-col justify-center items-center gap-4 mt-20">
        <p className="text-2xl text-center">
          Served fresh to order all day, everyday!
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="border-yellow-300 bg-linear-to-br from-yellow-50 to-orange-100 hover:text-red-500 cursor-pointer hover:font-bold p-4 shadow-lg">
            View Nutrition Info
          </button>
          <button className="border-yellow-300 bg-linear-to-br from-yellow-50 to-orange-100 hover:text-red-500 hover:font-bold cursor-pointer p-4 shadow-lg">
            Vegan and Gluteen Free Options
          </button>
        </div>
      </div>
    </section>
  );
}
