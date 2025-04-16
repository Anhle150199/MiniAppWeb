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
        link: "/generator-tools/guid-generator",
        title: "GUID Generator Online – Free & Secure UUID Generator",
        description: 'Generate and validate GUIDs (UUIDs) online for free. Instantly create unique identifiers with customizable options. No installation required. Try now!',
        keywords: ["guid generator", "uuid generator", "generate guid online",
          "online uuid generator", "bulk guid generator", "guid validator",
          "uuid validator", "generate unique identifier",
          "free guid generator", "random uuid generator", "guid creator",
          "generate guid v4", "guid vs uuid"],
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
        link: "/text-tools/text-formatter",
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
        link: "/text-tools/markdown-to-html-converter",
        pageName: "Markdown to HTML Converter",
        description: `Effortlessly convert Markdown text to HTML on ${process.env.NEXT_PUBLIC_NAME}. This free, online tool is ideal for developers, writers, and content creators who need to format content for the web.`,
        keywords: [
          "markdown to HTML converter",
          "markdown converter",
          "HTML converter",
          "markdown convert",
          "markdown to HTML tool",
          "online markdown converter",
          "HTML formatting",
          "markdown to web",
          "text to HTML",
          "markdown",
          "html convert from markdown"
        ],
        markdown: "/MarkdownToHTML/guide.md"
      }
    }
  },
  CalculateTools: {
    Name: "Calculate Tools",
    Tools: {
      SplitMoney: {
        id: 30,
        name: "Split Money",
        summary: "Quickly split money between people.",
        image: "/images/logo/split-money.webp",
        title: `Split Money - Smart Group Expense Calculator | Split Bills Easily - ${process.env.NEXT_PUBLIC_NAME}`,
        link: "/calculate-tools/split-money",
        pageName: "Split Money Tool",
        description: `Easily split money among friends, family, or colleagues with our free online Split Money tool. Perfect for group outings, shared expenses, and more. Try it now!`,
        keywords: [
          "split money calculator",
          "money splitter",
          "expense sharing tool",
          "split bill calculator",
          "group expense calculator",
          "cost sharing tool",
          "money division tool",
          "shared expenses calculator",
          "bill splitting tool",
          "online money splitter"
        ],
        markdown: "/CalculateTools/SplitMoney.md",
      },
    }
  },
}