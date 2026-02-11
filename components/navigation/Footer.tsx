import Socials from "../utils/Socials";

const Footer = () => (
    <footer className="container py-6 flex flex-col-reverse gap-y-8 items-center justify-between lg:flex-row text-sm text-muted-foreground">
      <span className="text-center">
        Copyright &copy; {new Date().getFullYear()} DimitrovDEV. All rights reserved.
      </span>
      <Socials />
    </footer>
);
export default Footer;
