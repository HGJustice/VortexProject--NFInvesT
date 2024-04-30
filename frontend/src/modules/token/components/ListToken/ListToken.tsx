import { zodResolver } from '@hookform/resolvers/zod';
import { ethers } from 'ethers';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Button } from '@/components';
import { Form, InputField } from '@/components/Form';
import {
  factoryContractAbi,
  marketplaceContractAbi,
  mintedTokenAbi,
} from '@/contracts';

import {
  listTokenDefaults,
  ListTokenSchema,
  listTokenSchema,
} from '../../models';

const FormWrapper = styled.div`
  width: 800px;
`;

const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  display: inline-flex;
`;

export const ListToken = () => {
  const factoryAddress = process.env.NEXT_PUBLIC_FACTORY_ADDRESS as string;
  const marketplaceAddress = process.env
    .NEXT_PUBLIC_MARKETPLACE_ADDRESS as string;

  const form = useForm<ListTokenSchema>({
    resolver: zodResolver(listTokenSchema()),
    defaultValues: listTokenDefaults,
    mode: 'all',
    criteriaMode: 'all',
  });

  const onSubmit = async (formData: ListTokenSchema) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();

    const factoryContract = new ethers.Contract(
      factoryAddress,
      factoryContractAbi,
      signer,
    );
    const tokenContract = new ethers.Contract(
      factoryContract.getTokensAddress(signerAddress),
      mintedTokenAbi,
      signer,
    );
    const contractMarketplace = new ethers.Contract(
      marketplaceAddress,
      marketplaceContractAbi,
      signer,
    );

    const tx = await tokenContract.approve(marketplaceAddress, formData.amount);
    await tx.wait();
    const tx2 = await contractMarketplace.depositToken(formData.amount);
    await tx2.wait();
    const tx3 = await contractMarketplace.listToken(
      formData.amount,
      formData.price,
    );
    await tx3.wait();
  };
  return (
    <FormWrapper>
      <Form form={form} name="createCompanyForm" onSubmit={onSubmit}>
        <InputField name="tokenAmount" label="Amount" />
        <InputField name="tokenPrice" label="Price" />
        <ButtonContainer>
          <Button variant="primary" type="submit">
            List
          </Button>
        </ButtonContainer>
      </Form>
    </FormWrapper>
  );
};
