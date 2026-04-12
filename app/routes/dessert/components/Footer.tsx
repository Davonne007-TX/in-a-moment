import Socials from "./Socials";

export default function Footer() {
  const footerLinks = [
    {
      title: "Menu",
      link: [
        "Breakfast",
        "Lunch",
        "Dinner",
        "Combo Meals",
        "Salads",
        "Drinks",
        "Shakes",
        "Ice Cream",
        "Nutrition",
      ],
    },
    {
      title: "Catering",
      link: [
        "Birthday Parties",
        "Business Retreats",
        "Family Reunions",
        "Baby Showers",
        "Weddings",
        "Anniversaries",
        "Graduation Parties",
        "School Events",
      ],
    },
    {
      title: "Ice Cream",
      link: [
        "Vanilla",
        "Chocolate",
        "Strawberry",
        "Cookies 'n Cream",
        "Rocky Road",
        "German Chocolate",
        "Coffee",
        "Bubble Gum",
        "Mango",
        "And more...",
      ],
    },
    {
      title: "About Us",
      link: [
        "Our Story",
        "Locations",
        "Contact Us",
        "Franchisee",
        "Careers",
        "Specials",
        "FAQs",
        "Events",
        "Get Involved",
      ],
    },
  ];
  return (
    <section className="flex flex-col md:flex-row gap-20 p-20 max-w-7xl mx-auto">
      {footerLinks.map((section, index) => (
        <div key={index} className="flex flex-col gap-4">
          <h3 className="font-bold font-coin text-lg text-red-500">
            {section.title}
          </h3>

          <ul className="space-y-1 flex flex-col gap-1 font-semibold">
            {section.link.map((link, i) => (
              <li key={i} className="text-sm hover:underline cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex gap-2 md:ml-auto">
        <img
          src="./images/icon.png"
          className="w-22 h-22 ml-auto"
          alt="Burger Icon"
        />
        <img
          src="./images/cone2.png"
          className="w-22 h-22 ml-auto"
          alt="Burger Icon"
        />
      </div>
    </section>
  );
}
