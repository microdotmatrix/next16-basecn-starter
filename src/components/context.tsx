import { ThemeProvider } from "./theme/provider";
import { AnchoredToastProvider, ToastProvider } from "./ui/toast";

export const AppContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="light" enableSystem>
      <ToastProvider>
        <AnchoredToastProvider>{children}</AnchoredToastProvider>
      </ToastProvider>
    </ThemeProvider>
  )
}