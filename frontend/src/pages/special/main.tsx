// entry point of kira.html
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../tailwind.css";
import Loading from "../../components/Loading";
import Special from "./components/Special";
import Navigation from "../../components/Navigation";

const mounts = [
  { id: "loading", component: <Loading /> },
  { id: "navigation", component: <Navigation /> },
  { id: "special", component: <Special /> },
];

mounts.forEach(({ id, component }) => {
  const el = document.getElementById(id);
  if (el) {
    createRoot(el).render(<StrictMode>{component}</StrictMode>);
  }
});
