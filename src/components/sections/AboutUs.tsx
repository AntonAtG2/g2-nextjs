type AboutUsData = {
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

import { request } from "graphql-request";

const GRAPHQL_ENDPOINT = "https://spotted-owl.g2dev.co.za/graphql";

// ✅ Server-side logging during build
export async function getStaticProps() {
  try {
    console.log("✅ Raw GraphQL response:", JSON.stringify(data, null, 2));

    const content = data?.aboutUsEntries?.nodes?.[0]?.aboutUsContent || null;

    if (!content) {
      console.warn("⚠️ No content found for About Us section.");
    }

    return {
      props: {
        content,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("❌ GraphQL fetch failed:", error);
    return {
      props: {
        content: null,
      },
    };
  }
}

type AboutUsProps = {
  content: {
    aboutUsHeading: string;
    aboutUsParagraph: string;
  } | null;
};

// ✅ Client-side logging during hydration/debug
export default function AboutUs({ content }: AboutUsProps) {
  if (typeof window !== "undefined") {
    console.log("🧪 Rendering About Us component with content:", content);
  }

  return (
    <section
      aria-label="About The Spotted Owl"
      className="relative w-full bg-cover bg-center py-24 sm:py-32"
      style={{
        backgroundImage: "url('/assets/images/workmen-in-boots.webp')",
      }}
    >
      <div id="AboutUs" className="absolute inset-0 bg-brand-green/75"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 text-white">
          <div className="lg:pt-4 lg:pr-8 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-brand-yellow">
              {content?.aboutUsHeading || "Heading not available"}
            </h2>
            <div className="mt-6 space-y-6 text-base whitespace-pre-line">
              {content?.aboutUsParagraph ? (
                <p>{content.aboutUsParagraph}</p>
              ) : (
                <p className="italic text-gray-300">
                  Paragraph content not found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
