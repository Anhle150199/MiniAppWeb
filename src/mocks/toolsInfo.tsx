import { ToolsInfoDataType } from "@/types/baseComponentTypes";

export const ToolsInfoData: ToolsInfoDataType = {
  GeneratorTools: {
    Name: "Generator Tools",
    Tools: {
      GuidGenerator: {
        id: 10,
        name: "GUID Generator",
        pageName: "Free Online GUID Generator Tool",
        summary: "Fast and free bulk GUID generator and validator for all your needs",
        image: "/images/logo/guid-generator.webp",
        link: "/guid-generator",
        title: "Free GUID/UUID Generator and Validator Online  - Create Unique Identifiers",
        description: 'Generate and validate GUIDs (Globally Unique Identifiers) with customizable options. Learn more about GUIDs, their uniqueness, and their uses in software development.',
        keywords: ['guid', 'uuid', 'GUID generator', 'guid gen', 'uuid gen', 'UUID generator', 'guid creator', 'uuid creator', 'bulk GUID generation', 'uuid guid generator', 'GUID validator', 'Globally Unique Identifier', 'generate GUIDs online', 'validate GUIDs'],

      },
    }
  },
  TextTools: {
    Name: "Text Tools",
    Tools: {
      TextFormatter: {
        id: 20,
        name: "Text Formatter ",
        summary: "Free online tool for quick text formatting, case conversion, and cleanup.",
        image: "/images/logo/text-formatter.webp",
        title: 'Text Formatter - Free Online Text Editing and Formatting Tool',
        link: "/text-formatter",
        pageName: "Free Text Formatter Tool",
        description: `Discover Text Formatter on ${process.env.NEXT_PUBLIC_NAME} - your free, online text editing tool designed for easy text formatting. Quickly convert text to uppercase, lowercase, capitalize sentences, remove extra spaces, and count words. Perfect for writers, students, and professionals who need fast, reliable text editing. Try Text Formatter today to simplify your text formatting needs!`,
        keywords: ['text formatter', 'text editing tool', 'uppercase converter', 'lowercase converter', 'capitalize sentences', 'text cleaner', 'online text formatting', 'text tools'],
        markdown: "/TextFormatter/guide.md",
      },
      ToSlug: {
        id: 21,
        name: "Text To URL Slug Converter",
        summary: "Quickly convert text to URL Slug.",
        image: "/images/logo/text-formatter.webp",
        title: `Convert Text To URL Slug - ${process.env.NEXT_PUBLIC_NAME}`,
        link: "/text-tools/text-to-url-slug-converter",
        pageName: "Text To URL Slug Converter",
        description: `Easily transform any text into an SEO-friendly URL slug on ${process.env.NEXT_PUBLIC_NAME}. This free, online slug generator is perfect for web developers, content creators, and SEO specialists who want clean, readable, and optimized URLs for websites and blogs.`,
        keywords: [
          'URL slug generator',
          'text to URL slug',
          'slug converter',
          'SEO-friendly URL',
          'URL slug tool',
          'text to URL converter',
          'slug creation tool',
          'online URL slug generator',
          'URL optimization',
          'URL text converter'
        ],
        markdown: "/TextToSLug/descriptionPage.md",

      },
      MarkdownToHTML: {
        id: 22,
        name: "Markdown to HTML Converter",
        summary: "Quickly convert Markdown text to HTML.",
        image: "/images/logo/markdown-to-html.webp",
        title: `Convert Markdown to HTML - ${process.env.NEXT_PUBLIC_NAME}`,
        link: "/text-tools/markdown-to-html",
        pageName: "Markdown to HTML Converter",
        description: `Effortlessly convert Markdown text to HTML on ${process.env.NEXT_PUBLIC_NAME}. This free, online tool is ideal for developers, writers, and content creators who need to format content for the web.`,
        keywords: [
          "markdown to HTML converter",
          "markdown converter",
          "HTML converter",
          "markdown to HTML tool",
          "online markdown converter",
          "HTML formatting",
          "markdown to web",
          "text to HTML"
        ],
        markdown: "/MarkdownToHTML/guide.md"
      }
    }

  }
}