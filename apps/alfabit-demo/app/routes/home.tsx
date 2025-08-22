import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alfabit Demo" },
    { name: "description", content: "Bem vindo à demo do design system alfabit!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
