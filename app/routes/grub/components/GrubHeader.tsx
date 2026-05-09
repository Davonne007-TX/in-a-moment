export default function GrubHeader() {
  const myGrubHeader = [
    { name: "Menu", id: 1 },
    { name: "About Us", id: 2 },
    { name: "Deals", id: 3 },
    { name: "Locations", id: 4 },
  ];
  return (
    <header className="w-full">
      <div className="bg-blue-700 w-full items-center p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-5xl font-bow text-white">
            Let's Grub
          </h1>

          <ul className="hidden md:flex gap-8 font-white text-serif text-2xl text-white">
            {myGrubHeader.map((header) => (
              <li key={header.id} className="cursor-pointer ">
                {header.name}
              </li>
            ))}
          </ul>

          <div className="flex gap-8">
            <button className="p-2 bg-white hover:scale-105 cursor-pointer text-blue-700 font-bow">
              Order Now
            </button>
            <button className="p-2 bg-white hover:scale-105 cursor-pointer text-blue-700 font-bow">
              Delivery
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#0A0806] w-full p-2"></div>
    </header>
  );
}
