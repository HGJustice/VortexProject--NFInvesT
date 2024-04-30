import { CreateCompanySchema } from './createCompany.schema';

export const createCompanyDefaults: CreateCompanySchema = {
  registrationDocuments: '',
  taxIDNumber: '',
  proofOfAddress: '',
  bankAccountNumber: '',
  financialDocuments: '',
  anualReports: '',
  businessWebsite: '',
};
