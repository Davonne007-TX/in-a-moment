import HeaderIceCream from "./components/HeaderIceCream";
import Card from "./components/Card";
import SecondHeader from "./components/SecondHeader";

export default function Dessert() {
  const cardDescription = `Its always a good time for ice cream! We have the best flavors in town!
    From Oreo Blast, Neapolitan, Peanut Butter Cup, and many more!
    Come on down and get your brain freeze on!`;

  return (
    <main className="bg-[url('images/icecream.webp')] bg-cover bg-center bg-no-repeat min-h-screen w-full">
      <HeaderIceCream />
      <SecondHeader />
      <section className="flex flex-col absolute">
        <button className="bg-yellow-50 mt-20 ml-8 w-60 p-2 rounded-full font-coin">
          HOMEMADE ICE CREAM
        </button>
        <Card
          className="max-w-xs md:max-w-xl flex flex-col gap-4 p-8 rounded-4xl"
          title="Ice Cream 4 Days "
          titleClassName="font-serif flex flex-col font-bold text-3xl lg:text-8xl"
          description={cardDescription}
          descriptionClassName="text-xl md:text-2xl tracking-wide font-quick leading-9"
          action="Check out our flavors"
          buttonClassName="bg-white font-bold p-2 skew-y-2 font-serif mt-2 text-lg md:w-80 lg:w-60 shadow-md shadow-black hover:scale-105 hover:bg-blue-200 duration-300 cursor-pointer border-2 border-black"
        />
      </section>
    </main>
  );
}
