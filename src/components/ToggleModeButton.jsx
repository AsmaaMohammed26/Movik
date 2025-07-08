import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "../contexts/themeContext";
import { IconButton  , Tooltip} from "@mui/material";


export default function ToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip title={theme === "light" ? "Dark Mode" : "Light Mode"}>
    <IconButton  onClick={toggleTheme}>
      {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
    </Tooltip>
  );
}
