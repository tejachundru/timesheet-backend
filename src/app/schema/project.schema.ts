import { z } from 'zod'

const create = z.object({
  name: z
    .string({
      required_error: 'name is required',
      invalid_type_error: 'name must be a string',
    })
    .min(2, `name can't be empty`),
  description: z.string(),
})

const projectSchema = { create }

export default projectSchema
