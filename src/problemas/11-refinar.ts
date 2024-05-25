/**
 * @GeraCode
 *
 * Problema 11: Refinar el esquema
 *
 * Actualizar el esquema `Form` para que cheque que las contraseñas sean iguales.
 */

import { expect, it } from "vitest";
import { z } from "zod";

const Form = z.object({
  password: z.string(),
  confirmPassword: z.string(),
});

export const validateFormInput = (values: unknown) => {
  const parsedData = Form.parse(values);

  return parsedData;
  //     ^?
};

// TESTS

it("Debe lanzar error is las contraseñas no son iguales", () => {
  expect(() =>
    validateFormInput({
      password: "password",
      confirmPassword: "password1",
    })
  ).toThrowError("Las contraseñas no coinciden");
});

it("Debe pasar si las contraseñas son iguales", () => {
  expect(() =>
    validateFormInput({
      password: "password",
      confirmPassword: "password",
    })
  ).not.toThrow();
});
