/**
 * GamePulse — Site Configuration
 * -------------------------------
 * Single source of truth for site-wide values: brand info, social links,
 * and official storefront URLs used by download buttons.
 *
 * Change a value here once — it propagates everywhere the config is used
 * (header, footer, about page, contact page, social widgets, floating bar).
 *
 * In a Next.js migration, this becomes `siteConfig` in `lib/config.ts` and
 * the social URLs can be swapped for `process.env.NEXT_PUBLIC_*` vars if
 * you want them editable without a code change/redeploy.
 */

const siteConfig = {
  name: "GamePulse",
  tagline: "Your Pulse on Gaming",
  url: "https://www.gamepulse.example", // TODO: replace with production domain
  description:
    "GamePulse is your source for gaming news, reviews, guides, and official game downloads.",

  social: {
    instagram: {
      label: "Instagram",
      handle: "@gamepulsegaming",
      url: "https://www.instagram.com/gamepulsegaming",
    },
    youtube: {
      label: "YouTube",
      handle: "GamePulse Gaming",
      url: "https://www.youtube.com/@gamepulsegaming", // TODO: confirm exact handle
    },
    discord: {
      label: "Discord",
      handle: "GamePulse Community",
      url: "#", // placeholder — add invite link when ready
    },
    facebook: {
      label: "Facebook",
      handle: "GamePulse Gaming",
      url: "#", // placeholder
    },
    twitter: {
      label: "X (Twitter)",
      handle: "@gamepulsegaming",
      url: "#", // placeholder
    },
  },

  // Official storefronts — used to build "legal download" links per platform.
  // Every commercial-game download button should resolve to one of these
  // (or the publisher's own site), never a direct/cracked file.
  stores: {
    steam: { label: "Steam", baseUrl: "https://store.steampowered.com/" },
    epic: { label: "Epic Games Store", baseUrl: "https://store.epicgames.com/" },
    rockstar: { label: "Rockstar Games Launcher", baseUrl: "https://www.rockstargames.com/games/" },
    playstation: { label: "PlayStation Store", baseUrl: "https://store.playstation.com/" },
    xbox: { label: "Xbox Store", baseUrl: "https://www.xbox.com/games/store/" },
    nintendo: { label: "Nintendo eShop", baseUrl: "https://www.nintendo.com/store/" },
    eaApp: { label: "EA App", baseUrl: "https://www.ea.com/ea-app" },
    ubisoft: { label: "Ubisoft Connect", baseUrl: "https://www.ubisoft.com/en-us/ubisoft-connect" },
    battlenet: { label: "Battle.net", baseUrl: "https://battle.net/" },
    microsoft: { label: "Microsoft Store", baseUrl: "https://www.microsoft.com/store/games" },
  },
};

// Expose to plain <script> usage
if (typeof window !== "undefined") {
  window.siteConfig = siteConfig;
}
// Expose for future module/build usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = siteConfig;
}
