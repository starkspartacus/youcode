import {createEnv} from "@t3-oss/env-nextjs"
import * as z from "zod"

export const env = createEnv({
  client: {
   
  },
  server: {
    GOOGLE_ID: z.string().min(1),
    GOOGLE_SECRET: z.string().min(1),
  },
  runtimeEnv: {
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
  },
})