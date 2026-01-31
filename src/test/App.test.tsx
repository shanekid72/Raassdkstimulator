import { render, screen } from "@testing-library/react";
import App from "@/app/App";
import { SimulatorProvider } from "@/app/simulator/SimulatorStore";

describe("App", () => {
  it("renders the home screen with navigation options", () => {
    render(
      <SimulatorProvider>
        <App />
      </SimulatorProvider>
    );
    // The app defaults to the home screen which shows a "Verify" button
    expect(
      screen.getAllByRole("button", { name: /verify/i })[0]
    ).toBeInTheDocument();
  });
});
