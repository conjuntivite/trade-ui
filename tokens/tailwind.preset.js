/** Trade UI — preset Tailwind (v3). Importe tokens/tokens.css no CSS global e use:
 *   presets: [require("./design-system/tokens/tailwind.preset.js")]
 * Ex.: bg-bg-surface text-fg-primary rounded-xl p-6 text-data-lg
 */
module.exports = {
  "darkMode": [
    "selector",
    "[data-theme=\"dark\"]"
  ],
  "theme": {
    "extend": {
      "colors": {
        "lime-300": "var(--lime-300)",
        "green-500": "var(--green-500)",
        "green-400": "var(--green-400)",
        "green-700": "var(--green-700)",
        "green-950": "var(--green-950)",
        "blue-500": "var(--blue-500)",
        "blue-700": "var(--blue-700)",
        "purple-500": "var(--purple-500)",
        "purple-700": "var(--purple-700)",
        "red-500": "var(--red-500)",
        "red-700": "var(--red-700)",
        "amber-400": "var(--amber-400)",
        "amber-800": "var(--amber-800)",
        "magenta-500": "var(--magenta-500)",
        "ink-950": "var(--ink-950)",
        "ink-900": "var(--ink-900)",
        "gray-600": "var(--gray-600)",
        "gray-500": "var(--gray-500)",
        "gray-200": "var(--gray-200)",
        "gray-100": "var(--gray-100)",
        "gray-50": "var(--gray-50)",
        "white": "var(--white)",
        "offwhite": "var(--offwhite)",
        "night-900": "var(--night-900)",
        "night-800": "var(--night-800)",
        "night-700": "var(--night-700)",
        "bg-page": "var(--bg-page)",
        "bg-surface": "var(--bg-surface)",
        "bg-elevated": "var(--bg-elevated)",
        "bg-inverse": "var(--bg-inverse)",
        "bg-brand": "var(--bg-brand)",
        "bg-brand-deep": "var(--bg-brand-deep)",
        "border-subtle": "var(--border-subtle)",
        "border-strong": "var(--border-strong)",
        "fg-primary": "var(--fg-primary)",
        "fg-secondary": "var(--fg-secondary)",
        "fg-muted": "var(--fg-muted)",
        "fg-inverse": "var(--fg-inverse)",
        "fg-on-brand": "var(--fg-on-brand)",
        "action-primary": "var(--action-primary)",
        "action-primary-fg": "var(--action-primary-fg)",
        "action-accent": "var(--action-accent)",
        "positive": "var(--positive)",
        "positive-fill": "var(--positive-fill)",
        "negative": "var(--negative)",
        "negative-fill": "var(--negative-fill)",
        "warning": "var(--warning)",
        "warning-fill": "var(--warning-fill)",
        "info": "var(--info)",
        "info-fill": "var(--info-fill)",
        "accent-short": "var(--accent-short)",
        "accent-short-fill": "var(--accent-short-fill)",
        "risk": "var(--risk)",
        "risk-fill": "var(--risk-fill)"
      },
      "spacing": {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "8": "32px",
        "10": "40px",
        "12": "48px",
        "16": "64px",
        "24": "96px"
      },
      "borderRadius": {
        "none": "0px",
        "xs": "4px",
        "sm": "8px",
        "md": "12px",
        "lg": "16px",
        "xl": "24px",
        "2xl": "32px",
        "pill": "9999px"
      },
      "fontFamily": {
        "sans": [
          "Plus Jakarta Sans",
          "Geist",
          "system-ui",
          "sans-serif"
        ],
        "mono": [
          "Space Mono",
          "Geist Mono",
          "ui-monospace",
          "monospace"
        ]
      },
      "fontSize": {
        "display-xl": [
          "64px",
          {
            "lineHeight": "68px",
            "fontWeight": "600",
            "letterSpacing": "-0.03em"
          }
        ],
        "display-lg": [
          "48px",
          {
            "lineHeight": "52px",
            "fontWeight": "600",
            "letterSpacing": "-0.02em"
          }
        ],
        "heading-1": [
          "32px",
          {
            "lineHeight": "40px",
            "fontWeight": "600",
            "letterSpacing": "-0.02em"
          }
        ],
        "heading-2": [
          "24px",
          {
            "lineHeight": "32px",
            "fontWeight": "600",
            "letterSpacing": "-0.01em"
          }
        ],
        "heading-3": [
          "20px",
          {
            "lineHeight": "28px",
            "fontWeight": "600"
          }
        ],
        "heading-4": [
          "16px",
          {
            "lineHeight": "24px",
            "fontWeight": "600"
          }
        ],
        "data-xl": [
          "44px",
          {
            "lineHeight": "48px",
            "fontWeight": "500",
            "letterSpacing": "-0.02em"
          }
        ],
        "data-lg": [
          "28px",
          {
            "lineHeight": "34px",
            "fontWeight": "600",
            "letterSpacing": "-0.01em"
          }
        ],
        "data-md": [
          "18px",
          {
            "lineHeight": "24px",
            "fontWeight": "600"
          }
        ],
        "data-sm": [
          "13px",
          {
            "lineHeight": "16px",
            "fontWeight": "500"
          }
        ],
        "body-lg": [
          "16px",
          {
            "lineHeight": "24px",
            "fontWeight": "400"
          }
        ],
        "body-md": [
          "14px",
          {
            "lineHeight": "20px",
            "fontWeight": "400"
          }
        ],
        "body-sm": [
          "12px",
          {
            "lineHeight": "16px",
            "fontWeight": "400"
          }
        ],
        "label": [
          "13px",
          {
            "lineHeight": "16px",
            "fontWeight": "500"
          }
        ],
        "eyebrow": [
          "12px",
          {
            "lineHeight": "16px",
            "fontWeight": "400",
            "letterSpacing": "0.08em"
          }
        ],
        "ticker": [
          "12px",
          {
            "lineHeight": "16px",
            "fontWeight": "400",
            "letterSpacing": "0.02em"
          }
        ]
      },
      "boxShadow": {
        "card": "var(--shadow-card)",
        "glow": "var(--shadow-glow)"
      }
    }
  }
};
