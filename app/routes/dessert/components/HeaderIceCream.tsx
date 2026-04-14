import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);

  const ourLinks = [
    { name: "About Us", id: 0 },
    { name: "Menu", id: 1 },
    { name: "Deals", id: 2 },
    { name: "Locations", id: 4 },
    { name: "Contact Us", id: 5 },
  ];

  const moreLinks = [
    { image: "./images/search.webp", alt: "Search", id: 0 },
    { image: "./images/account.webp", alt: "Account", id: 1 },
    { image: "./images/cart.webp", alt: "Cart", id: 2 },
  ];

  return (
    <header className="w-full bg-[#cf1020]/90 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="md:p-4 text-white">
        <div className="flex justify-between py-4 px-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-3 items-center"
          >
            <img
              src="./images/icon.png"
              className="w-10 h-10"
              alt="Burger Icon"
            />
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-coin text-center tracking-wide cursor-pointer mt-1"
            >
              Brain Freeze Burgers
            </motion.h1>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex gap-10 ml-auto">
            {/* Nav */}
            <motion.nav className="flex items-center gap-8 text-white">
              {ourLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="list-none cursor-pointer  font-medium relative group text-xl"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0  bg-red-400 transition-all duration-300 group-hover:w-full" />
                </motion.li>
              ))}
            </motion.nav>

            {/* Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 text-pink-300"
            >
              {moreLinks.map((link) => (
                <motion.button
                  key={link.id}
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
                >
                  <img src={link.image} alt={link.alt} />
                </motion.button>
              ))}
            </motion.div>
          </div>
          <button
            onClick={() => setMobileNavigationOpen(!mobileNavigationOpen)}
            className="lg:hidden focus:outline-none cursor-pointer"
          >
            {mobileNavigationOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile nav */}
      {mobileNavigationOpen && (
        <div className="bg-white">
          <ul className="flex flex-col gap-4">
            {ourLinks.map((links) => (
              <li>{links.name}</li>
            ))}
          </ul>

          {}
        </div>
      )}
    </header>
  );
}
