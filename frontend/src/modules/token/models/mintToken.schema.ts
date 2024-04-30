import { z } from 'zod';

export const mintTokenSchema = () =>
  z.object({
    tokenName: z.string(),
    tokenSymbol: z.string(),
  });

export type MintTokenSchema = z.infer<ReturnType<typeof mintTokenSchema>>;
