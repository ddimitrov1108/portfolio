
import Logo from "../utils/Logo";
import NavigationList from "./NavigationList";
import NavigationSheet from "./NavigationSheet";

const Header = () => {
  return (
    <header className="z-40 fixed top-0 w-full bg-background/70 backdrop-blur-md">
      <div className="transition-all bg-transparent container py-4 flex items-center justify-between">
        <Logo href="/" />
        <NavigationList />
        <NavigationSheet />
      </div>
    </header>
  );
};
export default Header;
