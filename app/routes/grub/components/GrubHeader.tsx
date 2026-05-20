import { useState } from "react";
import { useNavigate } from "react-router";
import { Menu } from "lucide-react";

export default function GrubHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const myGrubHeader = [
    { name: "About Us", id: 1 },
    { name: "Deals", id: 2 },
    { name: "Menu", id: 3 },
    { name: "Contact", id: 4 },
  ];

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <header className="w-full">
      <div className="bg-blue-700 w-full p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div className="flex items-center justify-between w-full md:w-auto">
            <h1
              onClick={goToHome}
              className="text-2xl sm:text-3xl md:text-5xl cursor-pointer font-bow text-white"
            >
              Let's Grub
            </h1>

            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden text-white p-2"
            >
              <Menu size={32} />
            </button>
          </div>

          <ul className="hidden md:flex gap-8 font-sta text-3xl text-white">
            {myGrubHeader.map((header) => (
              <li
                key={header.id}
                className="cursor-pointer hover:text-gray-200 transition"
              >
                {header.name}
              </li>
            ))}
          </ul>

          <div className="flex gap-2 md:gap-4">
            <button className="px-3 py-2 md:px-4 md:py-3 bg-white hover:scale-105 transition cursor-pointer text-blue-700 font-bow text-sm md:text-base rounded">
              Order Now
            </button>

            <button className="px-3 py-2 md:px-4 md:py-3 bg-white hover:scale-105 transition cursor-pointer text-blue-700 font-bow text-sm md:text-base rounded">
              Delivery
            </button>
          </div>
        </div>
      </div>

      {isNavOpen && (
        <div className="md:hidden bg-[#0A0806] p-4">
          <ul className="flex flex-col gap-4 text-white text-2xl font-sta">
            {myGrubHeader.map((header) => (
              <li
                key={header.id}
                className="cursor-pointer hover:text-blue-400 transition"
              >
                {header.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-[#0A0806] w-full p-1"></div>
    </header>
  );
}
