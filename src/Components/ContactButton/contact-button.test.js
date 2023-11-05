import { render, screen } from "@testing-library/react";
import ContactButton from "./ContactButton";

describe("ContactButton", () => {
  it("renders the contact button", () => {
    render(<ContactButton />);
    const button = screen.getByRole("button", { name: /написать/i });
    expect(button).toBeInTheDocument();
  });

  it("applies the correct CSS class", () => {
    render(<ContactButton />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("contact__button");
  });
});
