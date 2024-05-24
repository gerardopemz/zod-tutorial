import { expect, it } from "vitest";
import { z } from "zod";

export const toString = (num: unknown) => {
  const parsed = z
    .number({ message: "Se espera un valor numérico" })
    .parse(num);
  return String(parsed);
  //            ^?
};

// TESTS

it("Debe lanzar un error cuando se pasa un atributo no numérico", () => {
  expect(() => toString("123")).toThrowError("Se espera un valor numérico");
});

it("Debe regresar un string cuando se pasa un número", () => {
  expect(toString(1)).toBeTypeOf("string");
});
