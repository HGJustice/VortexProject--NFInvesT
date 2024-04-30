import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: process.env.NEXT_PUBLIC_API_URL,
  documents: 'src/modules/**/api/*.graphql',
  generates: {
    'src/gql/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        useTypeImports: true,
        enumsAsTypes: true,
        defaultScalarType: 'unknown',
        skipTypename: true,
        documentMode: 'string',
      },
    },
  },
};

export default config;
