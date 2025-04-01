// src/types/graphql.ts
export type AboutUsLayout = {
  __typename: "FlexibleContentSectionsAboutUsSectionAboutUsLayout"; // Ensure the __typename is included
  header: string;
  paragraphRepeater: { singleParagraph: string }[];
  backgroundImage?: {
    node: {
      sourceUrl: string;
      altText?: string;
    };
  };
};
