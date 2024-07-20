import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "../utils/Logo";
import NavLink from "./components/NavLink";
import { headerNavLinks } from "../constants";

const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <button
          className="group lg:hidden flex flex-col items-end gap-1.5 w-[22px]"
          title="Open navigation"
        >
          <div className="transition-all w-full h-[2px] rounded-full bg-secondary-foreground group-hover:bg-foreground group-hover:w-[80%]"></div>
          <div className="transition-all w-[60%] h-[2px] rounded-full bg-secondary-foreground ml-1.5 group-hover:bg-foreground group-hover:w-full"></div>
          <div className="transition-all w-[80%] h-[2px] rounded-full bg-secondary-foreground group-hover:bg-foreground group-hover:w-[60%]"></div>
        </button>
      </SheetTrigger>
      <SheetContent
        overlayClassName="lg:hidden"
        className="lg:!hidden transition-all bg-background w-full"
      >
        <SheetHeader className="py-0">
          <SheetTitle>
            <SheetClose asChild>
              <Logo href="/" />
            </SheetClose>
            <SheetDescription></SheetDescription>
          </SheetTitle>
        </SheetHeader>

        <nav className="h-[80vh] flex flex-col items-center justify-center gap-8 py-24">
          {headerNavLinks.map(({ name, href }) => (
            <SheetClose key={href} asChild>
              <NavLink key={href} href={href} title={name} aria-label={name}>
                {name}
              </NavLink>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default NavigationSheet;
