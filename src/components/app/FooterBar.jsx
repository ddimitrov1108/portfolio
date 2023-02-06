import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const socialLinks = [
  { href: "https://github.com/ddimitrov1108", icon: <FiGithub /> },
  { href: "https://www.instagram.com/_dimitrovd/", icon: <FiInstagram /> },
  {
    href: "https://www.linkedin.com/in/daniel-dimitrov-94593a180/",
    icon: <FiLinkedin />,
  },
];

export default function FooterBar() {
  return (
    <div className="lg:hidden w-full px-6 py-8 max-w-screen-lg flex items-center justify-between text-xl gap-6">
      <div className="mx-auto grow h-0.5 bg-primary-main"></div>

      <div className="max-w-fit flex gap-8">
        {socialLinks.map((link) => (
          <a
            href={link.href}
            target="_blank"
            key={link.href}
            className="cursor-pointer hover:text-primary-main"
          >
            {link.icon}
          </a>
        ))}
      </div>

      <div className="mx-auto grow h-0.5 bg-primary-main"></div>
    </div>
  );
}
