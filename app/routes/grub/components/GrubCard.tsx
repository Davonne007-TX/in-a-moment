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
    <section className="flex flex-col gap-4">
      <img
        src={grubImage}
        alt={alt}
        className="max-w-2xs md:max-w-xs rounded-2xl"
      />
      <h2 className="text-2xl font-bold mt-4">{grubTitle}</h2>
      <p className="text-xl max-w-xs font-thin">{grubDescription}</p>
      <div className="flex gap-4">
        {" "}
        <p className="text-2xl">${grubPrice}</p>
        <button className="bg-[#0A0806] hover:scale-105 cursor-pointer w-40 p-2 text-white rounded-full">
          {grubButton}
        </button>
      </div>
    </section>
  );
}
