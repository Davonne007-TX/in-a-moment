export default function () {
  const ourLinks = [
    { name: "About Us", id: 0 },
    { name: "Menu", id: 1 },
    { name: "Reward Program", id: 2 },
    { name: "Gift Cards", id: 3 },
    { name: "Locations", id: 4 },
    { name: "Merch", id: 5 },
  ];

  return (
    <header className="bg-white w-full text-black p-4 border-2 border-black">
      <div className="flex flex-col justify-between items-center gap-4">
        <h1>The Spot</h1>

        <ul className="flex gap-10">
          {ourLinks.map((links) => (
            <li key={links.id}>{links.name}</li>
          ))}
        </ul>

        <button className="bg-[#13D4D4] border-2 border-black p-2">
          Order Online
        </button>
      </div>
    </header>
  );
}
