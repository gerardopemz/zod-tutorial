import { expect, it } from "vitest";
import { z } from "zod";

// Utilizar esta función para verificar si una persona existe
const doesFakePersonExist = async (id: string) => {
  try {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id
    ).then((res) => res.json());
    return Boolean(data?.name);
  } catch (e) {
    // Returns false if not found
    return false;
  }
};

const Form = z.object({
  id: z.string(),
});

export const validateFormInput = async (values: unknown) => {
  const parsedData = await Form.parseAsync(values);

  return parsedData;
  //     ^?
};

// TESTS

it("Debe lanzar error si la persona no existe", async () => {
  await expect(
    validateFormInput({
      id: "123123123123123123",
    })
  ).rejects.toThrow("No se encontró la persona");
});

it("Debe pasar si la persona existe", async () => {
  expect(
    await validateFormInput({
      id: "1",
    })
  ).toEqual({ id: "1" });
});
