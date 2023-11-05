import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About", () => {
  it("renders the about text", () => {
    render(<About />);
    const aboutText = screen.getByText(/Я продуктовый дизайнер/i);
    expect(aboutText).toBeInTheDocument();
  });

  it("renders the about image", () => {
    render(<About />);
    const aboutImage = screen.getByRole("img");
    expect(aboutImage).toHaveAttribute("src", "Photo.png");
  });
});
