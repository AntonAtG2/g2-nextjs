export interface AboutUsContent {
  header: string;
  paragraphRepeater: { singleParagraph: string }[];
  backgroundImage: {
    node: {
      sourceUrl: string;
      altText?: string;
      mediaDetails?: {
        width: number;
        height: number;
      };
    };
  };
}
