import { zodResolver } from '@hookform/resolvers/zod';
import { ethers } from 'ethers';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Button } from '@/components';
import { Form, InputField } from '@/components/Form';
import { businessContractAbi } from '@/contracts';

import {
  createCompanyDefaults,
  CreateCompanySchema,
  createCompanySchema,
} from '../../models';

const contractAddress = '0x0A0E8290c4eBb871876Ad4E04110ca5DF023Ea4b';

const FormWrapper = styled.div`
  width: 800px;
`;

const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  display: inline-flex;
`;

export const CreateCompany = () => {
  const form = useForm<CreateCompanySchema>({
    resolver: zodResolver(createCompanySchema()),
    defaultValues: createCompanyDefaults,
    mode: 'all',
    criteriaMode: 'all',
  });

  const onSubmit = async (formData: CreateCompanySchema) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      contractAddress,
      businessContractAbi,
      signer,
    );
    const tx = await contract.createBusiness(
      formData.registrationDocuments,
      formData.taxIDNumber,
      formData.proofOfAddress,
      formData.bankAccountNumber,
      formData.financialDocuments,
      formData.anualReports,
      formData.businessWebsite,
    );

    await tx.wait();
  };
  return (
    <FormWrapper>
      <Form form={form} name="createCompanyForm" onSubmit={onSubmit}>
        <InputField name="registrationDocuments" label="Company name" />
        <InputField name="taxIDNumber" label="Tax ID number" />
        <InputField name="proofOfAddress" label="Address" />
        <InputField
          name="bankAccountNumber"
          label="IBAN"
          type="number"
          min="0"
        />
        <InputField name="financialDocuments" label="Documents" />
        <InputField name="anualReports" label="Annual report" />
        <InputField name="businessWebsite" label="Website" />
        <ButtonContainer>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </ButtonContainer>
      </Form>
    </FormWrapper>
  );
};
