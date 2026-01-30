import { render, screen } from "@testing-library/react";
import App from "@/app/App";

describe("App", () => {
  it("renders the landing flow selection", () => {
    render(<App />);
    expect(
      screen.getByRole("button", { name: /start onboarding/i })
    ).toBeInTheDocument();
  });
});
