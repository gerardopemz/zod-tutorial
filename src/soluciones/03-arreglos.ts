/**
 * @GeraCode
 *
 * Problema 03: Verificar APIs desconocidas con un esquema de arreglo
 *
 * Crear un esquema de Zod para la respuesta de la API que regresa
 * un arreglo de objetos con los datos de varias personas.
 */

import { expect, it } from "vitest";
import { z } from "zod";

const FakePerson = z.object({
  name: z.string(),
});

const FakePeopleResults = z.array(FakePerson);

export const fetchFakePeople = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  const parsed = FakePeopleResults.parse(data);

  return parsed;
  //     ^?
};

// TESTS

it("Debe regresar el nombre", async () => {
  expect((await fetchFakePeople())[0]).toEqual({
    name: "Leanne Graham",
  });
});
