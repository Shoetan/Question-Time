import * as z from "zod"

export const emailSchema = z.object ({
  email: z.string().min(1,{message: "Email is required"}).email({message: "Email is required"}),
})

export type EmailSchema = z.infer <typeof emailSchema>