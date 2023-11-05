import { render, screen } from "@testing-library/react";
import Burger from "./Burger";

describe("BurgerMenu", () => {
  it("renders closed menu icon by default", () => {
    render(<Burger />);
    expect(screen.getByAltText("menu")).toHaveAttribute("src", "Burger.svg");
  });

  it("renders open menu icon when open prop is true", () => {
    render(<Burger isOpen={true} />);
    expect(screen.getByAltText("menu")).toHaveAttribute(
      "src",
      "IconButton.svg"
    );
  });

  it("does not render menu list when closed", () => {
    render(<Burger />);
    expect(screen.queryByTestId("menu-list")).not.toBeInTheDocument();
  });
});
