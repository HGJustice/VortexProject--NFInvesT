import { z } from 'zod';

export const listTokenSchema = () =>
  z.object({
    amount: z.string(),
    price: z.string(),
  });

export type ListTokenSchema = z.infer<ReturnType<typeof listTokenSchema>>;
