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
      <h1 className="text-5xl font-chewy">Brain Freeze</h1>

      <ul className="hidden lg:flex items-cente justify-center gap-10 text-xl font-sans tracking-widest">
        {ourLinks.map((links) => (
          <li key={links.id}>{links.name}</li>
        ))}
      </ul>

      <div className="flex gap-4">
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="bg-[#13D4D4] shadow-black shadow-xl text-xl cursor-pointer font-semibold border-2 border-black p-2"
        >
          Order Online
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="bg-[#13D4D4] shadow-black shadow-xl text-xl cursor-pointer font-semibold border-2 border-black p-2"
        >
          Contact Us
        </motion.div>
      </div>
    </header>
  );
}
