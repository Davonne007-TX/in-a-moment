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
    <div className="max-w-xs md:max-w-sm rounded-2xl border border-yellow-300 bg-linear-to-br from-yellow-50 to-orange-100 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-extrabold tracking-wide text-gray-900">
          {nameOfDish}
        </h2>

        <span className="rounded-full bg-[#FF6B4A] px-3 py-1 text-sm font-bold text-white shadow-md">
          ${dishPrice.toFixed(2)}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-gray-700">{dishDescription}</p>
    </div>
  );
}
