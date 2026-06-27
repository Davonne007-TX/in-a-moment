export default function GrubVisit() {
  return (
    <section className="relative w-full min-h-screen mt-20">
      <div className="absolute inset-0">
        <img
          src="./images/beach.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 px-6 py-24 md:py-32 mt-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="font-sta text-sm md:text-base tracking-[0.3em] uppercase text-[#FF6B4A] mb-4">
            Find your way to us
          </p>
          <h2 className="font-sta text-5xl md:text-7xl lg:text-8xl text-[#F7F1E6] leading-[0.95]">
            At The Beach
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <svg
            className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-1/2 z-0"
            height="2"
            viewBox="0 0 100 2"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              stroke="#FF6B4A"
              strokeWidth="2"
              strokeDasharray="1 3"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-[#F7F1E6]/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl">
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-full bg-[#FF6B4A]/10 flex items-center justify-center mb-1">
                  <img src="./images/location.png" alt="" className="w-5 h-5" />
                </div>
                <p className="font-sta text-xs tracking-[0.2em] uppercase text-[#FF6B4A]">
                  Address
                </p>
                <p className="text-2xl md:text-3xl font-bold text-[#1A2E2E] leading-tight">
                  9021 Ocean Avenue
                </p>
                <div className="text-[#1A2E2E]/70 text-base leading-relaxed">
                  <p>Los Angeles, California</p>
                  <p>Venice Beach</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F7F1E6]/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl">
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-full bg-[#FF6B4A]/10 flex items-center justify-center mb-1">
                  <img src="./images/time.png" alt="" className="w-5 h-5" />
                </div>
                <p className="font-sta text-xs tracking-[0.2em] uppercase text-[#FF6B4A]">
                  Hours
                </p>
                <p className="text-2xl md:text-3xl font-bold text-[#1A2E2E] leading-tight">
                  8:00am – 10:00pm
                </p>
                <div className="text-[#1A2E2E]/70 text-base leading-relaxed">
                  <p>All day, every day</p>
                  <p>We're always open for you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
