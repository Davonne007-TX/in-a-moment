import HeaderIceCream from "./components/HeaderIceCream";
import Card from "./components/Card";

export default function Dessert() {
  const cardDescription = `Whether its 11am, to 11pm, its always a good time
   for ice cream! Here at Brain Freeze we have the best flavors in town!
    From Oreo Blast, Neapolitan, Peanut Butter Cup, Cookie Dough and many more!
    Come on down and get your brain freeze on!`;

  return (
    <section className="bg-[url('images/icecream.webp')] bg-cover bg-center bg-no-repeat min-h-screen w-full">
      <HeaderIceCream />
      <Card
        className="max-w-xs md:max-w-2xl flex flex-col gap-4 mt-30 p-10 rounded-4xl ml-10 bg-neutral-100 shadow-md shadow-black"
        title="Its about that time! Ice Cream Time! "
        titleClassName="font-serif font-bold text-6xl lg:text-6xl"
        description={cardDescription}
        descriptionClassName="text-2xl md:text-3xl tracking-wide font-quick leading-relaxed"
        action="Check out our flavors"
        buttonClassName="bg-white font-bold p-2 font-serif mt-2 text-2xl w-80 lg:w-90 shadow-md shadow-black hover:scale-105 hover:bg-[#13D4D4] duration-300 cursor-pointer border-2 border-black"
      />
    </section>
  );
}
