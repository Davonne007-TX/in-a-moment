export default function GrubVisit() {
  return (
    <section className="mt-20 bg-[url('./images/beach.webp')] min-h-screen bg-cover w-full">
      <p className="font-bold text-4xl text-center font-sta mt-20">
        Find your way to us
      </p>
      <h2 className="font-bold text-8xl text-center font-sta mt-8">
        At The Beach
      </h2>

      <div className="flex justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-10 mt-40">
          <div className="bg-white max-w-md rounded-3xl p-10">
            <div className="flex flex-col gap-2 items-center justify-center">
              <img src="./images/location.png" />
              <p className="font-sta text-3xl text-[#22BDEA]">Address</p>
              <p className="text-3xl font-bold">9021 Ocean Avene.</p>
              <p>Los Angelas, California</p>
              <p> Venice Beach</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-10 mt-40">
          <div className="bg-white max-w-md rounded-3xl p-10">
            <div className="flex flex-col gap-2 items-center justify-center">
              <img src="./images/time.png" className="w-18" />
              <p className="font-sta text-3xl text-[#22BDEA]">Hours</p>
              <p className="text-3xl font-bold">Sunday - Monday</p>
              <p className="items-center">8:00am - 10:00pm</p>
              <p className="items-center">All day, everyday!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
