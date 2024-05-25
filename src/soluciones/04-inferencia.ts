/**
 * @GeraCode
 *
 * Problema 04: Inferencia de tipos con Zod
 *
 * Actualizar el método `logFakePeopleResults` para extraer el tipo de dato
 * que recibe como argument extraido del esquema `FakePeopleResults`.
 */

import { z } from "zod";

const FakePerson = z.object({
  name: z.string(),
});

const FakePeopleResults = z.array(FakePerson);

function logFakePeopleResults(data: z.infer<typeof FakePeopleResults>) {
  data.map((person) => {
    console.log(person.name);
    //          ^?
  });
}
