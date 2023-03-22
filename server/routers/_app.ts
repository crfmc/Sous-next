/**
 * File details the routes available in the api
 */

import { z } from 'zod';
import { router } from '../trpc';
import { hello } from './_hello';
import { getLastValues, pushValue } from './_values';



export const appRouter = router({
  // Method chaining on the "procedure" allows us to make the input typesafe and give
  // instructions on how to use it as a query
  hello,
  getLastValues,
  pushValue,
});


// Export the type definition of the api
export type AppRouter = typeof appRouter;