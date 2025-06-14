import { useEffect, useState } from "react";

export const useThemeSwitcher = () => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    const userPref = window.localStorage.getItem("theme");
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      const newMode = mediaQuery.matches ? "dark" : "light";
      setMode(newMode);
      window.localStorage.setItem("theme", newMode);
    };

    if (userPref) {
      setMode(userPref);
    } else {
      handleChange();
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    window.localStorage.setItem("theme", newMode);
  };

  return [mode, toggleTheme];
};
