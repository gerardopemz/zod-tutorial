import { expect, it } from "vitest";
import { z } from "zod";

const FakePerson = z.object({
  name: z.string(),
});

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
