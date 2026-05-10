export default function GrubHero() {
  return (
    <section className="w-full mt-20 md:mt-0 flex justify-center items-center min-h-screen">
      <div className="max-w-3xl flex flex-col justify-center items-center text-center gap-4 px-4">
        <p className="italic text-white text-2xl">
          Est. 1993 in Los Angeles, CA
        </p>

        <h1 className="text-7xl tracking-wide font-sta text-white">
          Its about that time, lets get our{" "}
          <span className="text-blue-600">grub on!</span>
        </h1>

        <p className="tracking-widest leading-12 text-xl md:text-3xl  text-white p-2">
          Imagine being on the beach, hanging out with friends, and all of
          sudden you get hungry. Let's Grub is right on the beach for classic
          summer favorites! Lets eat!
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <button className="p-2 bg-white hover:scale-105 cursor-pointer text-blue-700 font-bow text-lg">
            Make a Reservation
          </button>

          <button className="p-2 bg-white hover:scale-105 cursor-pointer text-blue-700 font-bow text-md text-lg">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
}
