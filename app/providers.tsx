import { ThemeProvider } from "@/components/providers/ThemeProvider";

const RootProviders = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
};
export default RootProviders;
