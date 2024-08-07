import Socials from "../utils/Socials";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container py-6 flex flex-col-reverse gap-y-8 items-center justify-between lg:flex-row text-sm text-muted-foreground">
      <span className="text-center">
        Copyright &copy; {year} DimitrovDEV. All rights reserved.
      </span>
      <Socials />
    </footer>
  );
};
export default Footer;
