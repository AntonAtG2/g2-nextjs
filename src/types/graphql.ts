export type AboutUsData = {
    aboutUsEntries: {
      nodes: {
        title: string;
        aboutUsContent: {
          aboutUsHeading: string;
          aboutUsParagraph: string;
        };
      }[];
    };
  };
  