import { NavLink } from "react-router";

export function Welcome() {
  const projects = [{ name: "Brain Freeze Burgers", link: "/dessert", id: 1 }];

  return (
    <section className="bg-purple-600 bg-cover min-h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row md:gap-10 justify-center items-center">
          <img
            src="/images/me.webp"
            className="max-w-xs md:max-w-md rounded-3xl p-4"
          />
          <h1 className="text-white text-3xl p-2 md:text-9xl mt-20 font-quick md:ml-auto max-w-md">
            2026 Design to <span className="font-ber"> Code</span>
          </h1>
        </div>

        <ul>
          {projects.map((project) => (
            <li
              key={project.id}
              className="text-white font-bold mt-10 text-2xl hover:scale-105 transition"
            >
              <NavLink to={project.link}>{project.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
