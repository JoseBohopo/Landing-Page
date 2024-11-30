import { useTheme } from "../context/ThemeContext";


const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded focus:outline-none bg-transparent hover:bg-gray-200 hover:dark:bg-gray-800"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
