import { writable } from "svelte/store";
import type { ThemeType } from "../types";

// Initialize theme from HTML class (default is dark from index.html)
const initialTheme: ThemeType = document.documentElement.classList.contains(
  "dark"
)
  ? "dark"
  : "light";

// Create theme store
export const theme = writable<ThemeType>(initialTheme);

// Toggle theme function
export const toggleTheme = () => {
  theme.update((currentTheme) => {
    const newTheme = currentTheme === "light" ? "dark" : "light";

    // Update HTML class for Tailwind dark mode
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.setProperty(
        "--app-background",
        "var(--gradient-dark)"
      );
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.setProperty(
        "--app-background",
        "var(--gradient-light)"
      );
    }

    return newTheme;
  });
};
