/**
 * @GeraCode
 *
 * Problema 02: Verificar APIs desconocidas con un esquema de objeto
 *
 * Crear un esquema de Zod para la respuesta de la API que regresa
 * un objeto con los datos de una persona.
 */

import { expect, it } from "vitest";
import { z } from "zod";

const FakePerson = z.unknown();

export const fetchFakePersonName = async (id: string) => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  ).then((res) => res.json());

  const parsed = FakePerson.parse(data);

  return parsed.name;
  //     ^?
};

// TESTS

it("Debe regresar el nombre de la persona", async () => {
  expect(await fetchFakePersonName("1")).toEqual("Leanne Graham");
  expect(await fetchFakePersonName("2")).toEqual("Ervin Howell");
});
