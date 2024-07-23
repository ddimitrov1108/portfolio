import Socials from "../utils/Socials";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse gap-y-8 items-center justify-between lg:flex-row text-sm text-secondary-foreground container py-8">
      <span className="text-center">
        Copyright &copy; {new Date().getFullYear()} DimitrovDEV. All rights
        reserved.
      </span>
      <Socials />
    </footer>
  );
};
export default Footer;
