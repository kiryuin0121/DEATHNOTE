// entry point of index.html.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../tailwind.css";
// component
import Opening from "./components/Opening";
import Navigation from "../../components/Navigation";
import Information from "./components/Information";
import Gallery from "./components/Gallery";
import Trailer from "./components/Trailer";
import Slider01 from "./components/Slider01";

const mounts = [
  { id: "opening", component: <Opening /> },
  { id: "navigation", component: <Navigation /> },
  { id: "information", component: <Information /> },
  { id: "slider-01", component: <Slider01 /> },
  { id: "gallery", component: <Gallery /> },
  { id: "trailer", component: <Trailer /> },
];

mounts.forEach(({ id, component }) => {
  const el = document.getElementById(id);
  if (el) {
    createRoot(el).render(<StrictMode>{component}</StrictMode>);
  }
});
