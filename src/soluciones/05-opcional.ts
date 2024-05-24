import { expect, it } from "vitest";
import { z } from "zod";

const Form = z.object({
  name: z.string({ message: "Campo obligatorio" }),
  phoneNumber: z.string().optional(),
});

export const validateFormInput = (values: unknown) => {
  const parsedData = Form.parse(values);

  return parsedData;
  //     ^?
};

// TESTS

it("Debe validar el formulario", async () => {
  expect(() =>
    validateFormInput({
      name: "Gerardo",
    })
  ).not.toThrow();

  expect(() =>
    validateFormInput({
      name: "Gerardo",
      phoneNumber: "123",
    })
  ).not.toThrow();
});

it("Debe lanzar error si no se manda el nombre", async () => {
  expect(() => validateFormInput({})).toThrowError("Campo obligatorio");
});
