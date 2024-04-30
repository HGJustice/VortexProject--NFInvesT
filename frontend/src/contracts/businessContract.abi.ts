export const businessContractAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'ID',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'registrationDocuments',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'taxIDNumber',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'proofOfAddress',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'bankAccountNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'financialDocuments',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'anualReports',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'businessWebsite',
        type: 'string',
      },
    ],
    name: 'BusinessCreated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_registrationDocuments',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_taxIDNumber',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_proofOfAddress',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_bankAccountNumber',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_financialDocuments',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_anualReports',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_businessWebsite',
        type: 'string',
      },
    ],
    name: 'createBusiness',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addy',
        type: 'address',
      },
    ],
    name: 'getBusiness',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'ID',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'registrationDocuments',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'taxIDNumber',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'proofOfAddress',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'bankAccountNumber',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'financialDocuments',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'anualReports',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'businessWebsite',
            type: 'string',
          },
          {
            internalType: 'bool',
            name: 'isCreated',
            type: 'bool',
          },
        ],
        internalType: 'struct BusinessManagement.Business',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
