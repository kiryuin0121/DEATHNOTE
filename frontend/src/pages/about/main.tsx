import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../tailwind.css";
// component
import Navigation from "../../components/Navigation";
import Loading from "../../components/Loading";
import StorySlider01 from "./components/StorySlider01";
import MusicPlayer from "./components/MusicPlayer";
import Slider01 from "./components/Slider01";
import BasicRules from "./components/BasicRules";
import CharacterRelation from "./components/CharacterRelation";
import StorySlider02 from "./components/StorySlider02";

const mounts = [
  { id: "loading", component: <Loading /> },
  { id: "navigation", component: <Navigation /> },
  { id: "story-slider01", component: <StorySlider01 /> },
  { id: "story-slider02", component: <StorySlider02 /> },
  { id: "basic-rules", component: <BasicRules /> },
  { id: "character-relation", component: <CharacterRelation /> },
  { id: "music-player", component: <MusicPlayer /> },
  { id: "slider-01", component: <Slider01 /> },
];

mounts.forEach(({ id, component }) => {
  const el = document.getElementById(id);
  if (el) {
    createRoot(el).render(<StrictMode>{component}</StrictMode>);
  }
});
