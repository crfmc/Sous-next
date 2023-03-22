/**
 * File details the routes available in the api
 */

import { z } from 'zod';
import { procedure, router } from '../trpc';


const values : number[] = [1,2,3];

export const appRouter = router({
  // Method chaining on the "procedure" allows us to make the input typesafe and give
  // instructions on how to use it as a query
  hello: procedure
    .input(
      z.object({
        text: z.string()
      })
    )
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`
      }
    }),
  getLastValues: procedure
    .input(z.number())
    .query(({ input }) => {
      return values.slice(-input) ?? []
    }),
  pushValue: procedure
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
    })
});


// Export the type definition of the api
export type AppRouter = typeof appRouter;