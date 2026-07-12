import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { NumberInput, type NumberInputProps } from "./number-input";

const onValueChange = vi.fn();

const renderComponent = (props?: Partial<Omit<NumberInputProps, "onValueChange">>) => {
  render(<NumberInput {...props} onValueChange={onValueChange} />);
  return {
    user: userEvent.setup(),
    input: screen.getByRole("textbox"),
    increaseBtn: screen.getByRole("button", { name: /increase/i }),
    decreaseBtn: screen.getByRole("button", { name: /decrease/i }),
  };
};

describe("NumberInput", () => {
  it("renders the component", () => {
    const { input } = renderComponent();

    expect(input).toBeInTheDocument();
  });

  it("displays value", async () => {
    const value = "25";
    const { user, input } = renderComponent();

    await user.type(input, value);

    expect(input).toHaveDisplayValue(value);
  });

  it("does not display non-numbers", async () => {
    const { user, input } = renderComponent();

    await user.type(input, "hello");

    expect(input).toHaveDisplayValue("");

    await user.clear(input);
    await user.type(input, "#$%^&*()");

    expect(input).toHaveDisplayValue("");
  });

  it("increases value when increase button is clicked", async () => {
    const value = 1;
    const step = 1;
    const { user, input, increaseBtn } = renderComponent({ value, step });

    await user.click(increaseBtn);

    expect(input).toHaveDisplayValue((value + step).toString());
  });

  it("decreases value when decrease button is clicked", async () => {
    const value = 1;
    const step = 1;
    const { user, input, decreaseBtn } = renderComponent({ value, step });

    await user.click(decreaseBtn);

    expect(input).toHaveDisplayValue((value - step).toString());
  });

  it("does not display non-numbers", async () => {
    const { user, input } = renderComponent();

    await user.type(input, "hello");

    expect(input).toHaveDisplayValue("");

    await user.clear(input);
    await user.type(input, "#$%^&*()");

    expect(input).toHaveDisplayValue("");
  });

  it("calls onValueChange when value is changed", async () => {
    const value = 5;
    const { user, input } = renderComponent();

    await user.type(input, value.toString());

    expect(onValueChange).toHaveBeenCalledWith(value);
  });
});
