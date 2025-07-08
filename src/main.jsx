import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter ,HashRouter } from "react-router-dom";
import ThemeProvider from "./contexts/themeContext";
import LanguageProvider from "./contexts/langContext.jsx";
import CustomThemeProvider from "./styles/themeStyle.jsx";
import UserProvider from "./contexts/userContext.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <UserProvider>
      <LanguageProvider>
        <ThemeProvider>
          <CustomThemeProvider>
            <App />
          </CustomThemeProvider>
        </ThemeProvider>
      </LanguageProvider>
    </UserProvider>
  </HashRouter>
);
