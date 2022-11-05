import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./page";

it("renders hello message", () => {
  render(<Home />);
  expect(screen.getByText("Get started by editing")).toBeInTheDocument();
});
