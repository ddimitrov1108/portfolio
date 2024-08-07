import NavLink from "./components/NavLink";
import { headerNavLinks } from "../constants";
import ThemeSwitch from "../ThemeSwitch";

const NavigationList = () => {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {headerNavLinks.map(({ name, href }) => (
        <NavLink key={href} href={href} title={name} aria-label={name}>
          {name}
        </NavLink>
      ))}

      <ThemeSwitch />
    </nav>
  );
};
export default NavigationList;
