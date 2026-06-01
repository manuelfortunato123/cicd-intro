import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { expect } from "vitest";

describe("App", () => {
  test("renders the app title", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /ci\/cd react demo/i }),
    ).toBeInTheDocument();
  });

  test("starts with count 0", () => {
    render(<App />);

    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
  });

  test("increases the count when the button is clicked", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: /increase/i }));

    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 1");
  });

  test("resets the count", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: /increase/i }));
    await user.click(screen.getByRole("button", { name: /reset/i }));

    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
  });
});
