// entry point of second.html
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../tailwind.css";

import News from "./components/News";
import Loading from "../../components/Loading";
import Navigation from "../../components/Navigation";

const mounts = [
  { id: "loading", component: <Loading /> },
  { id: "navigation", component: <Navigation /> },
  { id: "news", component: <News /> },
];

mounts.forEach(({ id, component }) => {
  const el = document.getElementById(id);
  if (el) {
    createRoot(el).render(<StrictMode>{component}</StrictMode>);
  }
});
