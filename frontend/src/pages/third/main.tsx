// entry point of third.html
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../tailwind.css";

import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

const mounts = [
  { id: "component1", component: <Component1 /> },
  { id: "component2", component: <Component2 /> },
];

mounts.forEach(({ id, component }) => {
  const el = document.getElementById(id);
  if (el) {
    createRoot(el).render(<StrictMode>{component}</StrictMode>);
  }
});
