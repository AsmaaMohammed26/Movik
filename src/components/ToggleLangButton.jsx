import { useLang } from "../contexts/langContext";
import { Button , Tooltip } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

export default function ToggleLangButton() {
  const { toggleLang, language } = useLang();
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };
  return (
    <Tooltip title={language === "en" ? "تغيير اللغة الى العربية" : "Change Language to English"}>
    <Button onClick={toggleLang} sx={buttonStyle} aria-label="Toggle language">
      <LanguageIcon />
      {language === "en" ? "العربية" : "English"}
    </Button>
    </Tooltip>
  );
}
