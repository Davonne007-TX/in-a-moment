export default function Menu() {
  const ourMenu = [
    { itemImage: "./images/hamburger.webp", alt: "", id: 0 },
    { itemImage: "./images/fries.webp", alt: "", id: 1 },
    { itemImage: "./images/ceaser.webp", alt: "", id: 2 },
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-4 my-20">
      <h2 className=" text-lg md:text-3xl font-quic text-center">
        ITS SO GOOD YOU GET A BRAIN FREEZE AND SOME FOOD!
      </h2>
      <p className="font-coin text-3xl">Our Menu</p>

      <ul className="flex gap-20 mt-10">
        {ourMenu.map((item) => (
          <img src={item.itemImage} className="w-50" />
        ))}
      </ul>
    </section>
  );
}
