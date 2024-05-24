import { z } from "zod";

const FakePerson = z.object({
  name: z.string(),
});

const FakePeopleResults = z.array(FakePerson);

function logFakePeopleResults(data: unknown) {
  data.map((person) => {
    console.log(person.name);
    //          ^?
  });
}
