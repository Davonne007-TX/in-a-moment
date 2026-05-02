import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Davonne's Projects" },
    { name: "description", content: "Welcome to Davonne's  Projects!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
