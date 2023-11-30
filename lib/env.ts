import {createEnv} from "@t3-oss/env-nextjs"
import * as z from "zod"

export const env = createEnv({
  client: {
   
  },
  server: {
    GITHUB_ID: z.string().min(1),
    GITHUB_SECRET: z.string().min(1),
  },
  runtimeEnv: {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
  },
})