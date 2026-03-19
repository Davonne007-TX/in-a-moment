import { motion } from "motion/react";

export default function Header() {
  const ourLinks = [
    { name: "About Us", id: 0 },
    { name: "Menu", id: 1 },
    { name: "Rewards", id: 2 },
    { name: "Gift Cards", id: 3 },
    { name: "Locations", id: 4 },
  ];

  return (
    <header className="bg-neutral-100 w-full text-black p-2 border-b-4 border-black">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-4xl md:text-5xl font-coin tracking-wider">
            Brain Freeze
          </h1>

          <ul className="hidden lg:flex items-center gap-10 text-xl font-sans tracking-widest">
            {ourLinks.map((links) => (
              <motion.li
                key={links.id}
                whileHover={{ color: "#13D4D4", y: -2 }}
                transition={{ duration: 0.15 }}
                className="cursor-pointer"
              >
                {links.name}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2 font-semibold mt-4 md:mt-0">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="bg-[#00C5FF] shadow-black shadow-xl text-md cursor-pointer border-2 border-black px-4 py-2"
          >
            Order Online
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.9 }}
            className="bg-[#00C5FF] shadow-black shadow-xl text-md cursor-pointer border-2 border-black px-4 py-2"
          >
            Contact Us
          </motion.div>
        </div>
      </div>
    </header>
  );
}
