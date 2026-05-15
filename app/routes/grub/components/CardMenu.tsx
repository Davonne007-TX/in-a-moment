type CardMenuProps = {
  nameOfDish: string;
  dishPrice: number;
  dishDescription: string;
};

export default function CardMenu({
  nameOfDish,
  dishPrice,
  dishDescription,
}: CardMenuProps) {
  return (
    <div className="bg-white max-w-sm">
      <h2>{nameOfDish}</h2>
      <p>{dishPrice}</p>
      <p>{dishDescription}</p>
    </div>
  );
}
