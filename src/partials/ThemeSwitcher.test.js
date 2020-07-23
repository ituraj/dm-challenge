import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeSwitcher from "./ThemeSwitcher";

test("user switched to dark mode", () => {
  const { getByTestId } = render(<ThemeSwitcher />);
  userEvent.click(screen.getByLabelText("theme switcher"));
  expect(getByTestId("test-theme-switcher")).toHaveAttribute("icon", "faSun");
});

test("user switched to light mode", () => {
  const { getByTestId } = render(<ThemeSwitcher />);
  userEvent.click(screen.getByLabelText("theme switcher"));
  expect(getByTestId("test-theme-switcher")).toHaveAttribute("icon", "faMoon");
});
