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
    <header className="relative w-full bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl py-2 px-2 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between ml-4">
          {/* Logo and Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start my-4 md:mb-0"
          >
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-4xl md:text-5xl font-coin tracking-wider bg-black/80 bg-clip-text text-transparent cursor-pointer"
            >
              Brain Freeze
            </motion.h1>
            <p className="text-md font-quick text-gray-600 tracking-wide mt-1 md:ml-1">
              Ice Cream Shop
            </p>
          </motion.div>

          {/* Desktop: Nav + Icons + Order Button */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Nav links */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-8"
            >
              {ourLinks.map((links, index) => (
                <motion.li
                  key={links.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ y: -3, color: "#EC4899" }}
                  className="list-none cursor-pointer font-quick font-medium text-gray-700 text-lg tracking-wide relative group"
                >
                  {links.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-pink-400 to-pink-200 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </motion.li>
              ))}
            </motion.nav>

            {/* Icon buttons */}
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

            {/* Order Online button */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg cursor-pointer border border-pink-400"
            >
              Order Online
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:hidden mt-4 pt-4 border-t border-gray-200"
        >
          <div className="flex justify-center gap-6">
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
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg cursor-pointer border border-pink-400"
            >
              Order Online
            </motion.button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
