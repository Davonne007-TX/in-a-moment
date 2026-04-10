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
    {
      image: "./images/search.webp",
      alt: "Search icon, icon by icons8",
      id: 0,
    },
    {
      image: "./images/account.webp",
      alt: "Account icon, icon by icons8",
      id: 1,
    },
    {
      image: "./images/cart.webp",
      alt: "Shopping Cart icon, icon by icons8",
      id: 2,
    },
  ];

  return (
    <header className="relative w-full bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-lg p-2">
      <div className="max-w-7xl mx-auto py-2 px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <img
              src="./images/icon.png"
              className="w-12 h-12"
              alt="Burger Icon, image from icon8"
            />
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-coin tracking-wider bg-black/80 bg-clip-text text-transparent cursor-pointer"
            >
              Brain Freeze Burgers
            </motion.h1>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            {/* Nav */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-8"
            >
              {ourLinks.map((links, index) => (
                <motion.li
                  key={links.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ y: -3, color: "" }}
                  className="list-none cursor-pointer font-quick font-medium text-gray-700 text-lg tracking-wide relative group"
                >
                  {links.name}
                  <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-red-400 to-red-200 group-hover:w-full transition-all duration-300" />
                </motion.li>
              ))}
            </motion.nav>

            {/* Icons */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              {moreLinks.map((link) => (
                <motion.button
                  key={link.id}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer"
                >
                  <img src={link.image} alt={link.alt} className="w-6 h-6" />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* MOBILE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:hidden mt-4 pt-4 border-t border-gray-200"
        >
          <div className="flex justify-center gap-6 mt-4">
            {ourLinks.map((links) => (
              <motion.span
                key={links.id}
                whileHover={{ color: "#EC4899", y: -2 }}
                className="cursor-pointer font-quick font-medium text-gray-600 text-base tracking-wide"
              >
                {links.name}
              </motion.span>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-4">
            {moreLinks.map((link) => (
              <motion.button
                key={link.id}
                whileHover={{ scale: 1.15 }}
                className="cursor-pointer"
              >
                <img src={link.image} alt={link.alt} className="w-8" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}
