import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import BrazilFlag from "../assets/brasil.png";
import UsaFlag from "../assets/eua.png";

const LanguageSwitcher = () => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  
  const [lang, setLang] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = lang === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setLang(newLanguage);
  };

  const handleMouseEnter = (e: any) => {
    e.currentTarget.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e: any) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <Button onClick={handleChangeLanguage} sx={{ p: 0 }}>
      {lang === "en" ? (
        <img
          src={BrazilFlag}
          alt="Brazil Flag"
          style={{
            width: "32px",
            height: "32px",
            transition: "transform 300ms",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ) : (
        <img
          src={UsaFlag}
          alt="USA Flag"
          style={{
            width: "32px",
            height: "32px",
            transition: "transform 300ms",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </Button>
  );
};

export default LanguageSwitcher;
