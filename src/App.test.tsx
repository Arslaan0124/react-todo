import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    expect(screen.getByText("React")).toBeInTheDocument();

    // check if App components renders headline
  });
});
