import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://backend11.codebootcamp.co.kr/graphql",
  generates: {
    "path/to/types/generated/types.ts": {
      plugins: ["typescript"],
      config: { typesPrefix: "I" },
    },
  },
};

export default config;
