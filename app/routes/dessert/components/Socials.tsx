import { useState } from "react";

export default function Socials() {
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);

  const socialLinks = [
    { socialMediaIcon: "./images/twitter.png", id: 1 },
    { socialMediaIcon: "./images/instagram.png", id: 2 },
    { socialMediaIcon: "./images/facebook.png", id: 3 },
  ];

  const terms = [
    { name: "Terms of Service", id: 1 },
    { name: "Privacy Policy", id: 2 },
    { name: "Brain Freeze Burgers Project 2026 - Davonne Vigil", id: 3 },
    { name: "Inspired by Braums Ice Cream", id: 4 },
  ];

  return (
    <section className="bg-[#cf1020]/90 w-full flex items-center p-4">
      <div className="flex flex-col gap-8 md:flex-row items-center justify-between w-full px-10">
        <div className="flex items-center gap-6 ml-10 md:ml-20">
          {socialLinks.map((socials) => (
            <img
              src={socials.socialMediaIcon}
              key={socials.id}
              className="h-10 w-10"
            />
          ))}
        </div>

        <ul className="flex flex-col md:flex-row gap-6 text-white text-sm font-semibold">
          {terms.map((term, index) => (
            <li
              key={term.id}
              className={`${index !== terms.length - 1 ? "md:border-r md:pr-6 border-white/60" : ""}`}
            >
              {term.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
