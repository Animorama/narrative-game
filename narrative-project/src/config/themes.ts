import { registerPlugin, NarratThemesPlugin, funTheme } from "narrat";

export function setupMyThemes() {
  // Setup the narrat themes plugin (should only be done once)
  const narratThemesPlugin = new NarratThemesPlugin();
  registerPlugin(narratThemesPlugin);
  // Add a theme
  narratThemesPlugin.addTheme(funTheme);
}

// window.addEventListener("load", () => {
//   if (useSteam) {
//     registerPlugin(new SteamPlugin());
//   }
//   setupMyThemes();
//   startApp({
//     configPath: "data/config.yaml",
//     debug,
//     logging: false,
//     scripts,
//   });
// });
