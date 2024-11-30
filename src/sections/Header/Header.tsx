import { motion } from "framer-motion";
import { HeaderProps } from "./header-types";
import SocialLinks from "../../components/SocialIcons";
import ThemeToggle from "../../components/ThemeToggle";

const Header: React.FC<HeaderProps> = ({ ROUTES, onSetPath }: HeaderProps) => {
  const centerButtonsProperties = [
    {
      targetRoute: ROUTES.HOME,
    },
    {
      targetRoute: ROUTES.ABOUT,
    },
    {
      targetRoute: ROUTES.PROJECTS,
    },
  ];
  const renderCenterButtons = centerButtonsProperties.map((element) => (
    <button
      key={element.targetRoute}
      className=" bg-transparent"
      onClick={() => onSetPath(element.targetRoute)}
    >
      {element.targetRoute}
    </button>
  ));
  return (
    <header className="shadow-md sticky top-0 z-10  p-4 text-black dark:text-white flex justify-center space-x-8">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center align-middle inset-0 origin-center h-full w-full"
      >
        {/* Header */}
        {renderCenterButtons}
        <div className="translate-x-[30rem] flex items-center gap-2"><ThemeToggle/> <SocialLinks /></div>
      </motion.div>
    </header>
  );
}

export default Header