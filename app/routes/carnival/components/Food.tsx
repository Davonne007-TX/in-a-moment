import { ChevronDown, Search } from "lucide-react";

export default function Food() {
  return (
    <section className="mt-20 flex flex-col md:flex-row gap-4 p-8">
      <button className="flex items-center justify-between w-40 p-2 border border-black">
        <span>Carvings</span>
        <ChevronDown size={16} />
      </button>

      <button className="flex items-center justify-between w-40 p-2 border border-black">
        <span>Food Type</span>
        <ChevronDown size={16} />
      </button>

      <div className="flex items-center border-b border-black p-2 md:ml-auto">
        <Search size={16} className="mr-2" />
        <input type="text" className="outline-none w-full" />
      </div>
    </section>
  );
}
