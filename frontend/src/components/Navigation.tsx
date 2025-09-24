import React, { useEffect, useState } from "react";
import NavigationMenu from "./NavigationMenu";
import NavigationButton from "./NavigationButton";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  // ナビゲーション表示中は背面のスクロールを禁止
  useEffect(() => {
    const bodyEl = document.querySelector("body");
    if (!bodyEl) return;

    if (isOpen) {
      bodyEl.style.overflowY = "hidden";
      // スクロールバーが無くなることによるNavigationButtonの横ずれを防止
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      bodyEl.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      bodyEl.style.overflowY = "visible";
      bodyEl.style.paddingRight = "0px";
    }
  }, [isOpen]);

  return (
    <div className="fixed top-0 right-0 z-20">
      <NavigationButton handleMenu={() => setIsOpen((isOpen) => !isOpen)} />
      <NavigationMenu isOpen={isOpen} />
    </div>
  );
};

export default Navigation;
