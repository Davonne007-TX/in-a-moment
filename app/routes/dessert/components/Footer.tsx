export default function Footer() {
  const footerLinks = [
    {
      title: "Menu",
      link: [
        "Breakfast",
        "Pancakes",
        "Waffles",
        "Lunch",
        "Hamburgers",
        "Chicken",
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
        "Parties",
        "Weddings",
        "Birthday Parties",
        "Business Retreats",
        "Family Reunions",
        "Baby Showers",
        "Bridal Showers",
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
        "Cookie Dough",
        "Rocky Road",
        "Cheesecake",
        "German Chocolate",
        "Coffee",
        "Bubble Gum",
        "Mango",
        "Cherry",
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
        "Your account",
        "Events",
        "Donations",
        "Get Involved",
      ],
    },
  ];
  return (
    <section className="flex flex-col md:flex-row gap-20 p-20">
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
    </section>
  );
}
