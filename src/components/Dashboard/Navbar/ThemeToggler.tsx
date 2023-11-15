import { useState, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const ThemeToggle = () => {
  const temp = localStorage.getItem(
    "theme"
  ) as string;
  const [theme, setTheme] = useState<
    "light" | "dark" | string
  >(temp);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add(
        "dark"
      );
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove(
        "dark"
      );
      localStorage.removeItem("theme");
    }
  }, [theme]);
  return (
    <button
      className={`bg-slate-800 dark:bg-slate-600 p-2 rounded-full text-white text-sm transform scale-100 transition-all duration-700 delay-300`}
      onClick={() =>
        setTheme((prevTheme) =>
          prevTheme === "dark" ? "light" : "dark"
        )
      }
    >
      {theme !== "dark" ? <HiMoon /> : <HiSun />}
    </button>
  );
};

export default ThemeToggle;
