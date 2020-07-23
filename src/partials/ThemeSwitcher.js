import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitcher = (props) => {
  const { darkMode, setMode } = props;
  return (
    <button
      className="app__dark-mode-btn icon level-right"
      aria-label="theme switcher"
      onClick={() => setMode(!darkMode)}
    >
      <FontAwesomeIcon
        data-testid="test-theme-switcher"
        icon={darkMode ? faSun : faMoon}
        color={darkMode ? "#FFA500" : "#4D5B6B"}
      />
    </button>
  );
};
export default ThemeSwitcher;
