export default function TheWorks() {
  return (
    <section className="flex flex-col md:flex-row w-full">
      <div className="relative w-full md:w-1/2 h-1/2 cursor-pointer">
        <img
          src="./images/theWorks.webp"
          className="w-full h-full object-cover"
          alt="Neapolitan Ice Cream Banana Split, image by David Disponett"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <p className="font-coin text-white text-2xl md:text-4xl text-center tracking-widest uppercase px-6 hover:scale-105 transition-transform duration-300">
            Build Your Own Dessert
          </p>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 h-1/2 cursor-pointer">
        <img
          src="./images/cone3.webp"
          className="w-full h-full object-cover"
          alt="Vanilla ice cream with strawberries in a waffle cone, image by David Disponett"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <p className="font-coin text-white text-2xl md:text-4xl text-center tracking-widest uppercase px-6 hover:scale-105 transition-transform duration-300 ">
            WORK WITH US
          </p>
        </div>
      </div>
    </section>
  );
}
