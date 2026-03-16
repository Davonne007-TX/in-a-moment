import HeaderIceCream from "./components/HeaderIceCream";
import Card from "./components/Card";
import SecondHeader from "./components/SecondHeader";

export default function Dessert() {
  const cardDescription = `Whether its 11am, to 11pm, its always a good time
   for ice cream! Here at Brain Freeze we have the best flavors in town!
    From Oreo Blast, Neapolitan, Peanut Butter Cup, Cookie Dough and many more!
    Come on down and get your brain freeze on!`;

  return (
    <section className="bg-[url('images/icecream.webp')] bg-cover bg-center bg-no-repeat min-h-screen w-full">
      <HeaderIceCream />
      <SecondHeader />
      <Card
        className="max-w-xs md:max-w-3xl flex flex-col gap-4 mt-20 p-6 md:p-12 rounded-4xl ml-4 l md:ml-10  bg-neutral-100 shadow-md shadow-black"
        title="Its about that time! Ice Cream Time! "
        titleClassName="font-serif font-bold text-3xl lg:text-5xl"
        description={cardDescription}
        descriptionClassName="text-xl md:text-2xl tracking-wide font-quick leading-12"
        action="Check out our flavors"
        buttonClassName="bg-white font-bold p-2 skew-y-2 font-serif mt-2 text-2xl md:w-80 lg:w-90 shadow-md shadow-black hover:scale-105 hover:bg-[#13D4D4] duration-300 cursor-pointer border-2 border-black"
      />
    </section>
  );
}
