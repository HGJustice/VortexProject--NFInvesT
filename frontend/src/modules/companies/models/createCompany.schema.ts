import { z } from 'zod';

export const createCompanySchema = () =>
  z.object({
    registrationDocuments: z.string(),
    taxIDNumber: z.string(),
    proofOfAddress: z.string(),
    bankAccountNumber: z.string(),
    financialDocuments: z.string(),
    anualReports: z.string(),
    businessWebsite: z.string(),
  });

export type CreateCompanySchema = z.infer<
  ReturnType<typeof createCompanySchema>
>;
