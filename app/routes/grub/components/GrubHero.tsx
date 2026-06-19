export default function GrubHero() {
  return (
    <section className="relative flex justify-center items-center min-h-screen w-full overflow-hidden bg-[#0E4749]">
      <div className="absolute inset-0">
        <img
          src="./images/theSpot.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0E4749]/60" />
        <div className="absolute inset-0 bg-linear-to-b from-[#0E4749]/80 via-[#0E4749]/30 to-[#0E4749]/90" />
      </div>

      <div className="relative z-10 max-w-3xl flex flex-col justify-center items-center text-center gap-6 mb-3">
        <p className="font-sta text-xs md:text-sm tracking-[0.3em] uppercase text-[#FF6B4A]">
          Est. 1993 in Los Angeles, CA
        </p>

        <h1 className="text-5xl md:text-7xl tracking-wide font-sta text-[#F7F1E6] leading-[0.95]">
          It's about that time, let's get our{" "}
          <span className="text-[#FF6B4A]">grub on!</span>
        </h1>

        <svg width="120" height="2" viewBox="0 0 120 2" aria-hidden="true">
          <line
            x1="0"
            y1="1"
            x2="120"
            y2="1"
            stroke="#FF6B4A"
            strokeWidth="10"
            strokeDasharray="1 5"
          />
        </svg>

        <p className="leading-relaxed text-lg md:text-xl text-[#F7F1E6]/80 max-w-2xl">
          Imagine being on the beach, hanging out with friends, and all of a
          sudden you get hungry. Let's Grub is right on the beach for classic
          summer favorites. Let's eat!
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <button className="px-7 py-3 bg-[#F7F1E6] hover:bg-white hover:scale-105 transition-all cursor-pointer text-[#FF6B4A] font-bow text-base rounded-full shadow-lg">
            Download our app
          </button>

          <button className="px-7 py-3 bg-transparent border-2 border-[#F7F1E6]/40 hover:border-[#FF6B4A] hover:scale-105 transition-all cursor-pointer text-[#F7F1E6] font-bow text-base rounded-full">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
}
