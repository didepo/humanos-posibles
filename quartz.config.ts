import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Diseño de Posibilidades — configuración de Quartz 4
 * Documentación: https://quartz.jzhao.xyz/configuration
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Diseño de Posibilidades",
    pageTitleSuffix: " · Diseño de Posibilidades",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "es-ES",
    baseUrl: "didepo.github.io/humanos-posibles",
    ignorePatterns: ["private", "_plantillas", ".obsidian", ".trash"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fraunces",
        body: "Source Serif 4",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fbf8f3",
          lightgray: "#e7e1d7",
          gray: "#b3aa9c",
          darkgray: "#3f3a33",
          dark: "#1f1c18",
          secondary: "#8a3b2e",
          tertiary: "#5d7a64",
          highlight: "rgba(138, 59, 46, 0.08)",
          textHighlight: "#f2d58a88",
        },
        darkMode: {
          light: "#17150f",
          lightgray: "#2e2a23",
          gray: "#6b6458",
          darkgray: "#d9d2c5",
          dark: "#f1ebe0",
          secondary: "#e08a6f",
          tertiary: "#93b39b",
          highlight: "rgba(224, 138, 111, 0.12)",
          textHighlight: "#8a6d1f88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
