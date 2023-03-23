import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "../server/routers/_app";

function getBaseUrl() {
  if (typeof Window === "undefined") {
    return ''
  }
  
  if (process.env.HOSTNAME) {
    return `http://${process.env.HOSTNAME}:${process.env.PORT}`
  }

  return `http://localhost:${process.env.PORT ?? 3000}`
}


export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`
        })
      ]
    }
  },
  ssr: false
})