import { motion } from "motion/react";

export default function Locations() {
  return (
    <section className="flex flex-col justify-center items-center -mt-10">
      <div className="w-full max-w-8xl h-[80vh] bg-[url('./images/iceCream.webp')] bg-cover bg-center bg-no-repeat">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center mt-20"
        >
          <p className="text-white p-4 text-6xl font-chewy text-center max-w-2xl font-bold">
            We have almost every flavor there is! Find your location today!
          </p>

          <div className="flex flex-col gap-4 justify-center items-center font-bold bg-[#f8f8ff] p-6 rounded-xl max-w-sm font-serif mt-4">
            <p className="tracking-widest text-sm text-gray-700">
              FIND A STORE
            </p>

            <div className="flex items-center bg-white border-[1.5px] border-gray-200 rounded-full pl-4 pr-1.5 py-1.5 w-82 gap-2 focus-within:border-gray-400 transition-colors">
              <svg
                className="w-4 h-4 text-gray-300 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="City, State, or Zip"
                className="flex-1 border-none outline-none text-sm text-gray-700 placeholder-gray-300 bg-transparent"
              />
              <button className="bg-gray-800 text-white text-sm font-semibold rounded-full px-4 py-2 hover:bg-gray-700 active:scale-95 transition-all cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
