import { nav } from "motion/react-m";
import { useNavigate } from "react-router";

export default function GrubHeader() {
  const myGrubHeader = [
    { name: "Menu", id: 1 },
    { name: "About Us", id: 2 },
    { name: "Deals", id: 3 },
    { name: "Locations", id: 4 },
  ];

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <header className="w-full">
      <div className="bg-blue-700 w-full items-center p-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <h1
            onClick={goToHome}
            className="text-3xl cursor-pointer md:text-5xl font-bow text-white"
          >
            Let's Grub
          </h1>

          <ul className="hidden md:flex gap-8 font-sta text-3xl text-white">
            {myGrubHeader.map((header) => (
              <li key={header.id} className="cursor-pointer ">
                {header.name}
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
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
