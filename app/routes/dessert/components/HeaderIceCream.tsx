import { motion } from "motion/react";

export default function () {
  const ourLinks = [
    { name: "About Us", id: 0 },
    { name: "Menu", id: 1 },
    { name: "Rewards", id: 2 },
    { name: "Gift Cards", id: 3 },
    { name: "Locations", id: 4 },
  ];

  return (
    <header className="bg-white w-full text-black p-6 border-2 border-black flex items-center justify-between">
      <h1 className="text-3xl md:text-5xl font-coin">Brain Freeze</h1>

      <ul className="hidden lg:flex items-center justify-center gap-10 text-xl font-sans tracking-widest">
        {ourLinks.map((links) => (
          <motion.li
            whileHover={{ color: "#13D4D4" }}
            transition={{ duration: 0.15 }}
            className="cursor-pointer"
            key={links.id}
          >
            {links.name}
          </motion.li>
        ))}
      </ul>

      <div className="flex gap-4 font-semibold">
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="bg-[#13D4D4] shadow-black shadow-xl text-xl cursor-pointer border-2 border-black p-2"
        >
          Order Online
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="bg-[#13D4D4] shadow-black shadow-xl text-xl cursor-pointer border-2 border-black p-2"
        >
          Contact Us
        </motion.div>
      </div>
    </header>
  );
}
