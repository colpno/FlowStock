import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import z from "zod";

import Form, { type FormProps } from "@/components/form/form";

import NumberField from "./number-field";

const onSubmit = vi.fn();

const renderComponent = (
  props?: Omit<Partial<FormProps<{ age: number }, boolean>>, "onSubmit" | "children">
) => {
  render(
    <Form schema={z.any()} {...props} onSubmit={onSubmit}>
      <NumberField name="age" label="Age" />
    </Form>
  );

  return {
    user: userEvent.setup(),
    input: screen.getByRole("textbox", { name: /age/i }),
    submitBtn: screen.getByRole("button", { name: /submit/i }),
  };
};

describe("NumberField", () => {
  it("renders the component", () => {
    const { input } = renderComponent();

    expect(input).toBeInTheDocument();
  });

  it("displays value", async () => {
    const value = 25;
    const { user, input } = renderComponent();

    await user.type(input, value.toString());

    expect(input).toHaveDisplayValue(value.toString());
  });

  it("displays default value", async () => {
    const defaultValue = 30;
    const { input } = renderComponent({
      defaultValues: {
        age: defaultValue,
      },
    });

    expect(input).toHaveDisplayValue(defaultValue.toString());
  });

  it("fails validation", async () => {
    const error = "Expect age to be at least 1";
    const { user, input, submitBtn } = renderComponent({
      schema: z.object({
        age: z.number().min(1, { message: error }),
      }),
    });

    await user.type(input, "0");
    await user.click(submitBtn);

    expect(screen.getByText(new RegExp(error, "i"))).toBeInTheDocument();
  });

  it("submits correct value", async () => {
    const value = 5;
    const { user, input, submitBtn } = renderComponent();

    await user.type(input, value.toString());
    await user.click(submitBtn);

    expect(input).toHaveDisplayValue(value.toString());
    expect(onSubmit).toHaveBeenCalledWith({ age: value }, expect.anything());
  });
});
