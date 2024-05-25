/**
 * @GeraCode
 *
 * Problema 08: Esquema con validaciones adicionales
 *
 * Actualizar el esquema `Form` para agregar validaciones adicionales
 * a los campos `phoneNumber`, `email`, y `website`.
 * phoneNumber:
 *   - Debe tener al menos 5 dígitos.
 *   - Debe tener máximo 20 dígitos.
 * email:
 *   - Debe ser un correo válido.
 * website:
 *   - Debe ser una URL válida.
 */

import { expect, it } from "vitest";
import { z } from "zod";

const Form = z.object({
  name: z.string(),
  phoneNumber: z
    .string()
    .min(5, "Por lo menos 5 caracteres")
    .max(20, "Máximo 20 caracteres")
    .optional(),
  email: z.string().email("Correo inválido"),
  website: z.string().url("URL inválida").optional(),
});

export const validateFormInput = (values: unknown) => {
  const parsedData = Form.parse(values);

  return parsedData;
  //     ^?
};

// TESTS

it("Debe lanzar error si se proporciona un número de teléfono con pocos dígitos", async () => {
  expect(() =>
    validateFormInput({
      name: "Gerardo",
      email: "gerardo@example.com",
      phoneNumber: "1",
    })
  ).toThrowError("Por lo menos 5 caracteres");
});

it("Debe lanzar error si se proporciona un número de teléfono con muchos dígitos", async () => {
  expect(() =>
    validateFormInput({
      name: "Gerardo",
      email: "gerardo@example.com",
      phoneNumber: "1238712387612387612837612873612387162387",
    })
  ).toThrowError("Máximo 20 caracteres");
});

it("Debe lanzar error si se proporciona un correo inválido", async () => {
  expect(() =>
    validateFormInput({
      name: "Gerardo",
      email: "gerardo",
    })
  ).toThrowError("Correo inválido");
});

it("Debe lanzar error cuando se proporciona una URL inválida", async () => {
  expect(() =>
    validateFormInput({
      name: "Gerardo",
      email: "gerardo@example.com",
      website: "/",
    })
  ).toThrowError("URL inválida");
});

it("Debe pasar cuando se pasan datos válidos", async () => {
  expect(() =>
    validateFormInput({
      name: "Gerardo",
      email: "gerardo@example.com",
      website: "https://youtube.com",
    })
  ).not.toThrowError();
});
