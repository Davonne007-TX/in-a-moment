import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

export default function LetsSearch() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="mt-10 p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-40">
            <button
              onClick={() => setOpen(open === "cravings" ? null : "cravings")}
              className="flex items-center justify-between cursor-pointer w-full p-2 border border-black"
            >
              <span>Cravings</span>
              <ChevronDown size={16} />
            </button>

            {open === "cravings" && (
              <div className="absolute top-full left-0 w-full bg-white border border-black mt-1 z-10">
                <p className="p-2 hover:bg-gray-100">Fried</p>
                <p className="p-2 hover:bg-gray-100">Hearty</p>
                <p className="p-2 hover:bg-gray-100">Sweet</p>
                <p className="p-2 hover:bg-gray-100">Spicy</p>
              </div>
            )}
          </div>

          <div className="relative w-full sm:w-40">
            <button
              onClick={() => setOpen(open === "foodType" ? null : "foodType")}
              className="flex items-center justify-between w-full cursor-pointer p-2 border border-black"
            >
              <span>Food Type</span>
              <ChevronDown size={16} />
            </button>

            {open === "foodType" && (
              <div className="absolute top-full left-0 w-full bg-white border border-black mt-1 z-10">
                <p className="p-2 hover:bg-gray-100">Fried</p>
                <p className="p-2 hover:bg-gray-100">Hearty</p>
                <p className="p-2 hover:bg-gray-100">Sweet</p>
                <p className="p-2 hover:bg-gray-100">Spicy</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center border-b border-black p-2 w-80 md:ml-auto">
          <Search size={16} className="mr-2 shrink-0" />
          <input
            type="text"
            className="outline-none w-full"
            placeholder="Search"
          />
        </div>
      </div>
    </section>
  );
}
