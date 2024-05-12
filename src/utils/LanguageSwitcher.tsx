import { useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/material";
import brazilFlag from "../assets/brasil.png";
import usaFlag from "../assets/eua.png";

const useStyles = makeStyles({
  flag: {
    width: 40,
    height: 40,
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});

const LanguageSwitcher = () => {
  const classes = useStyles();
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  
  const [lang, setLang] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = lang === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setLang(newLanguage);
  };

  return (
    <button onClick={handleChangeLanguage}>
      {lang === "en" ? (
        <img src={brazilFlag} alt="Brazil Flag" className={classes.flag} />
      ) : (
        <img src={usaFlag} alt="USA Flag" className={classes.flag} />
      )}
    </button>
  );
};

export default LanguageSwitcher;
