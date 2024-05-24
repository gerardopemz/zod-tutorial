import { expect, it } from "vitest";
import { z } from "zod";

export const toString = (num: unknown) => {
  return String(num);
  //            ^?
};

// TESTS

it("Debe lanzar un error cuando se pasa un atributo no numérico", () => {
  expect(() => toString("123")).toThrowError("Se espera un valor numérico");
});

it("Debe regresar un string cuando se pasa un número", () => {
  expect(toString(1)).toBeTypeOf("string");
});