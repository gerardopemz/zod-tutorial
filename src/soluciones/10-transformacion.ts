/**
 * @GeraCode
 *
 * Problema 10: Transforma datos dentro de un esquema
 *
 * Actualizar el esquema `FakePerson` para que agregar un campo dinámico
 * llamado `nameAsArray` que sea un array de los nombres de la persona.
 */

import { expect, it } from "vitest";
import { z } from "zod";

const FakePerson = z
  .object({
    name: z.string(),
  })
  .transform((data) => {
    return {
      ...data,
      nameAsArray: data.name.split(" "),
    };
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

it("Debe regresar name y nameAsArray", async () => {
  expect((await fetchFakePeople())[0]).toEqual({
    name: "Leanne Graham",
    nameAsArray: ["Leanne", "Graham"],
  });
});
