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
import ThemeSwitch from "../ThemeSwitch";

const NavigationSheet = () => {
  return (
    <Sheet>
      <div className="flex items-center gap-4 lg:hidden"> 
        <ThemeSwitch />
        <SheetTrigger asChild>
          <button
            className="group lg:hidden flex flex-col items-end gap-1.5 w-[22px]"
            title="Open navigation"
          >
            <div className="transition-all w-full h-[2px] rounded-full bg-muted-foreground group-hover:bg-foreground group-hover:w-[80%]"></div>
            <div className="transition-all w-[60%] h-[2px] rounded-full bg-muted-foreground ml-1.5 group-hover:bg-foreground group-hover:w-full"></div>
            <div className="transition-all w-[80%] h-[2px] rounded-full bg-muted-foreground group-hover:bg-foreground group-hover:w-[60%]"></div>
          </button>
        </SheetTrigger>
      </div>

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
              <NavLink href={href} title={name} aria-label={name}>
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
