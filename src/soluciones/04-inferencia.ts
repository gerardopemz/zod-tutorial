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
