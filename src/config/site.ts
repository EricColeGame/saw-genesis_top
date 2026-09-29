export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "SAW Genesis Wiki",
  shortName: "SAW Genesis",
  logoText: "S",
  tagline: "Complete Guides, Traps, Roles & Survival Strategies",
  description: "Complete SAW Genesis Wiki covering gameplay guides, Judge and Accused roles, traps, puzzles, updates, and survival strategies for this 3v1 multiplayer horror experience.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://saw-genesis.top",
  supportEmail: "support@saw-genesis.top",
  gameUrl: "https://store.steampowered.com/app/2865960/SAW_Genesis/",
  heroVideoId: "PhgYHFBjq48", // SAW: Genesis Multiplayer Horror Game Official Trailer
  social: {
    discord: "https://discord.com/game/saw-genesis-1528250685919985824",
    youtube: "https://www.youtube.com/watch?v=PhgYHFBjq48",
    twitter: "https://linktr.ee/SawGenesis",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
