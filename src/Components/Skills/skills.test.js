import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  it("renders skill category names", () => {
    render(<Skills />);

    expect(screen.getByText(/Продукт/i)).toBeInTheDocument();
    expect(screen.getByText(/UXI/i)).toBeInTheDocument();
    expect(screen.getByText(/Команда/i)).toBeInTheDocument();
    expect(screen.getByText(/Документация/i)).toBeInTheDocument();
    expect(screen.getByText(/Знания\/Навыки/i)).toBeInTheDocument();
  });

  it("renders skill items for each category", () => {
    render(<Skills />);

    const productSkills = screen.getByText(/Jobs To Be Done/i);
    expect(productSkills).toBeInTheDocument();

    const uxSkills = screen.getByText(/Прототипирование/i);
    expect(uxSkills).toBeInTheDocument();
  });
});
