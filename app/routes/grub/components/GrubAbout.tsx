import GrubStats from "./GrubStats";

export default function GrubAbout() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-sta text-4xl font-bold text-center mb-16">
          Our Story
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-14">
          <div className="flex-1">
            <img
              src="./images/chef.webp"
              alt="Chef preparing food in the kitchen"
              className="w-full max-w-xl mx-auto rounded-3xl object-cover shadow-xl"
            />
          </div>

          <div className="flex-1 space-y-8">
            <h3 className="font-sta text-6xl md:text-5xl font-bold leading-tight">
              Fine dining at the beach
            </h3>

            <p className="text-lg md:text-2xl leading-9 tracking-wide text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              non eros at nibh fringilla facilisis. Cras id turpis non risus
              pulvinar malesuada. Sed sed volutpat orci. Maecenas sit amet
              mollis massa, non suscipit turpis.
            </p>

            <p className="text-lg md:text-2xl leading-9 tracking-wide text-gray-700">
              Vivamus id lectus tempus, auctor leo nec, condimentum eros. Sed
              rutrum nisl sit amet massa posuere vestibulum. Sed vel lectus sed
              nunc facilisis suscipit nec et tellus. Fusce vitae arcu velit.
            </p>

            <GrubStats />
          </div>
        </div>
      </div>
    </section>
  );
}
