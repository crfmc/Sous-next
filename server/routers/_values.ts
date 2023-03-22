import { z } from 'zod';
import { procedure } from '../trpc';


const values : number[] = [1,2,3];

export const getLastValues = procedure
  .input(z.number())
  .query(({ input }) => {
    return values.slice(-input) ?? []
  });

export const pushValue = procedure
  .input(
    z.object({
      value: z.number().nullable()
    })
  )
  .mutation(({ input }) => {
    if (input.value === null) {
      values.push(0);
    }
    else {
      values.push(input.value);
    }

    console.log("mutation called")

    console.log("values: ", values);

    return values
  });