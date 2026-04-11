import { motion } from "motion/react";

export default function Header() {
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
    <header className="w-full bg-red-500 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="p-4 text-white">
        <div className="flex justify-between py-4 px-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-3"
          >
            <img
              src="./images/icon.png"
              className="w-10 h-10"
              alt="Burger Icon"
            />
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-coin tracking-wide cursor-pointer"
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
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <img
                    src={link.image}
                    alt={link.alt}
                    className="w-5 h-5 text-white"
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* MOBILE */}
        <motion.div
          className="lg:hidden mt-4 border-t pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {ourLinks.map((link) => (
              <span
                key={link.id}
                className="text-sm font-medium cursor-pointer"
              >
                {link.name}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-4">
            {moreLinks.map((link) => (
              <button key={link.id}>
                <img src={link.image} alt={link.alt} className="w-6" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}
