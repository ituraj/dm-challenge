import React from "react";
import { render } from "@testing-library/react";
import AppContainer from "./AppContainer";

it("renders app container", () => {
  const { getByTestId } = render(<AppContainer />);
  expect(getByTestId("test-app-container")).toBeInTheDocument();
});
