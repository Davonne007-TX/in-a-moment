import { Menu } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
import { User } from "lucide-react";

export default function CarnivalHeader() {
  return (
    <header className="flex justify-between items-center gap-2 p-8">
      <div className="flex gap-2">
        {" "}
        <Menu className="text-2xl" />
        <p className="font-quick text-lg">Menu</p>
      </div>

      <div className="flex flex-col">
        <img className="w-20 h-20 mx-auto" src="./images/fries.png" />
        <h1 className="text-xl text-center font-thin">WE HAVE THE WORKS</h1>
      </div>

      <div className="flex gap-4">
        <ShoppingBasket className="w-8 h-8" />
        <User className="w-8 h-8" />
      </div>
    </header>
  );
}
