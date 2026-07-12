import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import z from "zod";

import Form, { type FormProps } from "./form";

const onSubmit = vi.fn();

const renderComponent = (
  props?: Partial<
    Omit<FormProps<{ firstName: string; lastName: string }, boolean>, "children" | "onSubmit">
  >
) => {
  render(
    <Form schema={z.any()} {...props} onSubmit={onSubmit}>
      {({ register }) => (
        <>
          <input {...register("firstName")} />
          <input {...register("lastName")} />
          <button type="submit">Submit</button>
        </>
      )}
    </Form>
  );

  return {
    user: userEvent.setup(),
    submitBtn: screen.getByRole("button", { name: /submit/i }),
    firstNameField: screen.getByRole("textbox", { name: /first name/i }),
    lastNameField: screen.getByRole("textbox", { name: /last name/i }),
  };
};

describe("Form", () => {
  it("renders the component", async () => {
    const { submitBtn, firstNameField, lastNameField } = renderComponent();

    expect(firstNameField).toBeInTheDocument();
    expect(lastNameField).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it("fails validation", async () => {
    const firstNameError = "First name is required";
    const lastNameError = "Last name is required";
    const { user, submitBtn } = renderComponent({
      schema: z.object({
        firstName: z.string().nonempty(firstNameError),
        lastName: z.string().nonempty(lastNameError),
      }),
    });

    await user.click(submitBtn);

    expect(screen.getByText(new RegExp(firstNameError, "i"))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(lastNameError, "i"))).toBeInTheDocument();
  });

  it("displays default values", async () => {
    renderComponent({
      defaultValues: {
        firstName: "Jane",
        lastName: "Smith",
      },
    });

    expect(screen.getByDisplayValue("Jane")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Smith")).toBeInTheDocument();
  });

  it("submits correct values", async () => {
    const { user, submitBtn, firstNameField, lastNameField } = renderComponent();

    await user.type(firstNameField, "John");
    await user.type(lastNameField, "Doe");
    await user.click(submitBtn);

    expect(onSubmit).toHaveBeenCalledWith({ firstName: "John", lastName: "Doe" });
  });
});
