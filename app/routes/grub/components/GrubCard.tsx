type GrubProps = {
  grubTitle: string;
  grubDescription: string;
  grubPrice: number;
  grubImage: string;
  alt: string;
};

export default function GrubCard({
  grubImage,
  alt,
  grubTitle,
  grubDescription,
  grubPrice,
}: GrubProps) {
  return (
    <section className="flex flex-col gap-4">
      <img
        src={grubImage}
        alt={alt}
        className="max-w-sm md:max-w-xs rounded-3xl"
      />
      <h2 className="text-2xl font-bold py-4">{grubTitle}</h2>
      <p className="text-2xl max-w-xs font-thin">{grubDescription}</p>
      <p className="text-2xl">${grubPrice}</p>
    </section>
  );
}
