export default function GrubStats() {
  const stats = [
    {
      id: 1,
      number: "25+",
      label: "Years Serving",
    },
    {
      id: 2,
      number: "10k+",
      label: "Happy Customers",
    },
    {
      id: 3,
      number: "50+",
      label: "Signature Dishes",
    },
    {
      id: 4,
      number: "4.9",
      label: "Average Rating",
    },
  ];

  return (
    <section className="bg-black mt-10 text-white py-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="space-y-2">
            <h2 className="text-4xl font-bold font-sta text-white">
              {stat.number}
            </h2>

            <p className="text-lg tracking-wide text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
