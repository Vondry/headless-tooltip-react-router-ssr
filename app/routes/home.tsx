import type { Route } from "./+types/home";
import { TooltipHomepage } from "../welcome/TooltipHomepage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RR SSR Headless Tooltip" },
    { name: "description", content: "This app demonstrates SSR render issue of Headless Tooltip" },
  ];
}

export default function Home() {
  return <TooltipHomepage />;
}
