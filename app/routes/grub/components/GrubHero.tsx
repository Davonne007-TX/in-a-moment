export default function GrubHero() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-[url('./images/theSpot.webp')] bg-cover bg-no-repeat w-full">
      <div className="max-w-3xl flex flex-col justify-center items-center text-center gap-8 px-4 bg-[#0A0806]/40 p-4">
        <p className="italic text-white text-2xl mt-10">
          Est. 1993 in Los Angeles, CA
        </p>

        <h1 className="text-7xl tracking-wide font-sta text-white">
          Its about that time lets get our{" "}
          <span className="text-blue-600">grub on!</span>
        </h1>

        <p className="tracking-widest leading-12 text-xl md:text-2xl text-white max-w-2xl">
          Imagine being on the beach, hanging out with friends, and all of
          sudden you get hungry. Let's Grub is right on the beach for classic
          summer favorites! Lets eat!
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <button className="p-2 bg-white hover:scale-105 cursor-pointer text-blue-700 font-bow text-lg">
            Download our app
          </button>

          <button className="p-2 bg-white hover:scale-105 cursor-pointer text-blue-700 font-bow text-md text-lg">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
}
