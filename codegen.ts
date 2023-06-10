import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://test41991.wpcomstaging.com/graphql',
  documents: ['./**/*.tsx'],
  generates: {
    './types/graphql/graphql.ts': {
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;