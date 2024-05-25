/**
 * @GeraCode
 *
 * Problema 07: Valores permitidos
 *
 * Actualizar el esquema `Form` para que el campo `privacyLevel` sea de tipo
 * string, y que se permita unicamente los valores `privado` y `publico`.
 */

import { expect, it } from "vitest";
import { z } from "zod";

const Form = z.object({
  repoName: z.string(),
  privacyLevel: z.string(),
});

export const validateFormInput = (values: unknown) => {
  const parsedData = Form.parse(values);

  return parsedData;
  //     ^?
};

// TESTS

it("Debe fallar si se proporciona un valor no permitido en privacyLevel", async () => {
  expect(() =>
    validateFormInput({
      repoName: "geracode",
      privacyLevel: "valor-no-permitido",
    })
  ).toThrowError();
});

it("Debe pasar con valores permitidos de privacyLevel", async () => {
  expect(
    validateFormInput({
      repoName: "geracode",
      privacyLevel: "privado",
    }).privacyLevel
  ).toEqual("privado");

  expect(
    validateFormInput({
      repoName: "geracode",
      privacyLevel: "publico",
    }).privacyLevel
  ).toEqual("publico");
});
