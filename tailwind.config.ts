import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#3b82f6",
        "background-light": "#f8fafc",
        "background-dark": "#0f172a",
        "surface-light": "#ffffff",
        "surface-dark": "#1e293b",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
      },

      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.slate.700"),
            maxWidth: "none",

            a: {
              color: theme("colors.primary"),
              textDecoration: "none",
              borderBottom: `1px solid ${theme("colors.slate.300")}`,
              "&:hover": {
                color: theme("colors.secondary"),
                borderBottomColor: theme("colors.slate.400"),
              },
            },

            "h1,h2,h3,h4": {
              fontFamily: theme("fontFamily.display").join(", "),
              fontWeight: "700",
              color: theme("colors.slate.900"),
              letterSpacing: theme("letterSpacing.tight"),
            },

            strong: {
              color: theme("colors.slate.900"),
            },

            // Lists & tables (the classic “broken markdown” fix)
            ul: { listStyleType: "disc" },
            ol: { listStyleType: "decimal" },
            "ul > li::marker": { color: theme("colors.slate.400") },
            "ol > li::marker": { color: theme("colors.slate.400") },

            table: {
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: "0",
              overflow: "hidden",
              borderRadius: theme("borderRadius.xl"),
              border: `1px solid ${theme("colors.slate.200")}`,
            },
            thead: {
              backgroundColor: theme("colors.slate.50"),
            },
            th: {
              fontWeight: "700",
              color: theme("colors.slate.900"),
              padding: "0.9rem 1rem",
              borderBottom: `1px solid ${theme("colors.slate.200")}`,
            },
            td: {
              padding: "0.9rem 1rem",
              borderBottom: `1px solid ${theme("colors.slate.200")}`,
              verticalAlign: "top",
            },
            "tbody tr:last-child td": {
              borderBottom: "none",
            },

            blockquote: {
              borderLeftColor: theme("colors.primary"),
              backgroundColor: theme("colors.blue.50"),
              padding: "1rem 1.25rem",
              borderRadius: "0 0.75rem 0.75rem 0",
            },
          },
        },

        invert: {
          css: {
            color: theme("colors.slate.300"),
            a: {
              color: theme("colors.blue.400"),
              borderBottomColor: theme("colors.slate.600"),
              "&:hover": { color: theme("colors.blue.300") },
            },
            "h1,h2,h3,h4": { color: theme("colors.slate.100") },
            strong: { color: theme("colors.slate.100") },
            thead: { backgroundColor: "rgba(30, 41, 59, 0.8)" },
            table: { borderColor: theme("colors.slate.700") },
            th: { borderBottomColor: theme("colors.slate.700") },
            td: { borderBottomColor: theme("colors.slate.800") },
            blockquote: {
              backgroundColor: "rgba(30,41,59,0.5)",
              borderLeftColor: theme("colors.blue.400"),
            },
          },
        },
      }),
    },
  },
  plugins: [forms, typography],
} satisfies Config;
