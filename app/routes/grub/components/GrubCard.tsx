type GrubProps = {
  grubTitle: string;
  description: string;
  price: number;
};

export default function GrubCard({ grubTitle, description, price }: GrubProps) {
  return (
    <section>
      <div>
        <h1>{grubTitle}</h1>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </section>
  );
}
