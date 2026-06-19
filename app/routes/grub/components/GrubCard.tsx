type GrubProps = {
  grubTitle: string;
  grubDescription: string;
  grubPrice: number;
  grubButton: string;
  grubImage: string;
  alt: string;
};

export default function GrubCard({
  grubImage,
  alt,
  grubTitle,
  grubDescription,
  grubPrice,
  grubButton,
}: GrubProps) {
  return (
    <section className="flex flex-col gap-4 border border-yellow-300 bg-linear-to-br from-yellow-50 to-orange-100 p-10 shadow-lg transition-all duration-300">
      <img
        src={grubImage}
        alt={alt}
        className="max-w-3xs md:w-96 rounded-2xl"
      />
      <h2 className="text-2xl font-bold mt-4">{grubTitle}</h2>
      <p className="text-xl max-w-xs font-thin">{grubDescription}</p>
      <div className="flex gap-4">
        {" "}
        <p className="text-xl">${grubPrice}</p>
        <button className="bg-[#0A0806] hover:scale-105 cursor-pointer w-40 p-1 text-white rounded-full text-sm md:text-lg ">
          {grubButton}
        </button>
      </div>
    </section>
  );
}
