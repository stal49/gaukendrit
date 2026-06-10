import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ContactInvestment from "./pages/ContactInvestment";
import ContactRasGarbha from "./pages/ContactRasGarbha";
import ContactAtalGotha from "./pages/ContactAtalGotha";
import ContactPartnership from "./pages/ContactPartnership";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/contact/investment" component={ContactInvestment} />
      <Route path="/contact/rasgarbha" component={ContactRasGarbha} />
      <Route path="/contact/atal-gotha" component={ContactAtalGotha} />
      <Route path="/contact/partnership" component={ContactPartnership} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
