import React from "react";
import { Container, Typography, AppBar } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#E1B15C", boxShadow: "none" }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" sx={{ padding: "22px" }}>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/gabriel-souza-web/"
            target="blank"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            @Souzzagabe
          </a>{" "}
          {t("footer")}
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
