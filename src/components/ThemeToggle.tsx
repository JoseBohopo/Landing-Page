import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 mr-3 rounded focus:outline-none bg-transparent"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
