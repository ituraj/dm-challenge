import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders challenge title", () => {
  const { getByText } = render(<App />);
  expect(getByText("Dark Mode Challenge")).toBeInTheDocument();
});
