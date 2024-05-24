import { expect, it } from "vitest";
import { z } from "zod";

const Form = z.object({
  repoName: z.string(),
  keywords: z.array(z.string()).optional().default([]),
});

export const validateFormInput = (values: unknown) => {
  const parsedData = Form.parse(values);

  return parsedData;
  //     ^?
};

// TESTS

it("Debe regresar keywords si se proporciona", async () => {
  const result = validateFormInput({
    repoName: "geracode",
    keywords: ["123"],
  });

  expect(result.keywords).toEqual(["123"]);
});

it("Debe agregar keywords como un arreglo vacío si no se proporciona", async () => {
  const result = validateFormInput({
    repoName: "geracode",
  });

  expect(result.keywords).toEqual([]);
});
