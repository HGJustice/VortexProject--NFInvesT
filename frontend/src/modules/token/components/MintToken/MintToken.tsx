import { zodResolver } from '@hookform/resolvers/zod';
import { ethers } from 'ethers';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Button } from '@/components';
import { Form, InputField } from '@/components/Form';
import { factoryContractAbi } from '@/contracts';

import {
  mintTokenDefaults,
  type MintTokenSchema,
  mintTokenSchema,
} from '../../models';

const FormWrapper = styled.div`
  width: 800px;
`;

const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  display: inline-flex;
`;

export const MintToken = () => {
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;

  const form = useForm<MintTokenSchema>({
    resolver: zodResolver(mintTokenSchema()),
    defaultValues: mintTokenDefaults,
    mode: 'all',
    criteriaMode: 'all',
  });

  const onSubmit = async (formData: MintTokenSchema) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      contractAddress,
      factoryContractAbi,
      signer,
    );
    const tx = await contract.createToken(
      formData.tokenName,
      formData.tokenSymbol,
    );
    await tx.wait();
  };
  return (
    <FormWrapper>
      <Form form={form} name="createCompanyForm" onSubmit={onSubmit}>
        <InputField name="tokenName" label="Token name" />
        <InputField name="tokenSymbol" label="Token Symbol" />
        <ButtonContainer>
          <Button variant="primary" type="submit">
            Mint
          </Button>
        </ButtonContainer>
      </Form>
    </FormWrapper>
  );
};
