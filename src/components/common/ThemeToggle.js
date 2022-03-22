import { useContext } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { ThemeContext } from "../../contexts/ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <SunIcon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 w-6 h-6 cursor-pointer"
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 w-6 h-6 cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;