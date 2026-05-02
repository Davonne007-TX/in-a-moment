import { Menu, ShoppingBasket, User, X } from "lucide-react";
import { useState } from "react";

export default function CarnivalHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavBar = [
    { name: "SINCE 1993", id: 1 },
    { name: "RIDES", id: 1 },
    { name: "FOOD", id: 2 },
    { name: "GAMES", id: 3 },
    { name: "MUSIC", id: 4 },
    { name: "GALLERY", id: 5 },
    { name: "TICKETS", id: 6 },
  ];

  return (
    <header className="relative flex justify-between items-center p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2"
      >
        <Menu className="w-7 h-7" />
        <p className="font-quick text-lg">Menu</p>
      </button>

      <div className="flex flex-col items-center">
        <img className="w-14 h-14" src="./images/logo.png" />
        <h1 className="text-sm font-light tracking-wide">WE HAVE THE WORKS</h1>
      </div>

      <div className="flex gap-4">
        <ShoppingBasket className="w-7 h-7 cursor-pointer" />
        <User className="w-7 h-7 cursor-pointer" />
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black text-white z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <p className="text-2xl font-semibold font-ber">Menu</p>
          <X
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <ul className="flex flex-col p-4 gap-4">
          {mobileNavBar.map((nav) => (
            <li
              key={nav.id}
              className="text-lg p-3 rounded-lg font-thin hover:bg-zinc-800 transition cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {nav.name}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
