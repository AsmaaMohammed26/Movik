import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MovieIcon from "@mui/icons-material/Movie";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTranslation } from "react-i18next";
import ToggleLangButton from "../ToggleLangButton";
import ToggleModeButton from "../ToggleModeButton";
import { useLang } from "../../contexts/langContext";
import { useToken } from "../../contexts/userContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  console.log(location.pathname)
  const { t } = useTranslation();
  const { token, logOut } = useToken();
  const { language } = useLang();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MovieIcon
            sx={{ display: { xs: "none", md: "flex", color: "white" } }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              marginInlineEnd: "50px",
              textDecoration: "none",
            }}
          >
            {t("appName")}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {token ? (
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "start",
                    mb: "15px",
                  }}
                >
                  <Link className={styles.link} to="/home">
                    {t("home")}
                  </Link>
                  <Link className={styles.link} to="/movies">
                    {t("movies")}
                  </Link>
                  <Link className={styles.link} to="/tv">
                    {t("tv")}
                  </Link>
                  <Link className={styles.link} to="/people">
                    {t("people")}
                  </Link>
                </MenuItem>
              ) : (
                ""
              )}

              <ToggleLangButton />
              <ToggleModeButton />
              {token ? (
                <Button
                  onClick={logOut}
                  aria-label="logout"
                  startIcon={<LogoutIcon />}
                  sx={{
                    display: "flex",
                    gap: language === "en" ? "0px" : "7px",
                  }}
                >
                  {t("logout")}
                </Button>
              ) : (
                
                  location.pathname === "/register" ? (
                    <Link className={styles.link} to="/login">
                      {t("login")}
                    </Link>
                  ) : (
                    <Link className={styles.link} to="/register">
                      {t("register")}
                    </Link>
                  )
                
              )}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <MovieIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,

                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              {t("appName")}
            </Typography>
          </Box>
          {token ? (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: "20px",
              }}
            >
              <Link className={styles.link} to="/home">
                {t("home")}
              </Link>
              <Link className={styles.link} to="/movies">
                {t("movies")}
              </Link>
              <Link className={styles.link} to="/tv">
                {t("tv")}
              </Link>
              <Link className={styles.link} to="/people">
                {t("people")}
              </Link>
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: "20px",
              }}
            ></Box>
          )}

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "20px",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {token ? (
              <Button
                onClick={logOut}
                aria-label="logout"
                startIcon={<LogoutIcon />}
                sx={{
                  display: "flex",
                  gap: language === "en" ? "0px" : "7px",
                  backgroundColor: "red",
                  justifyContent: "space-around",
                }}
              >
                {t("logout")}
              </Button>
            ) : (
              location.pathname === "/register" ? (
                <Link className={styles.link} to="/login">
                  {t("login")}
                </Link>
              ) : (
                <Link className={styles.link} to="/register">
                  {t("register")}
                </Link>
              )
            )}

            <ToggleLangButton />
            <ToggleModeButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
