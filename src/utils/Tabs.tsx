import CustomTabs from "./CustomTabs";
import CharacterCard from "@/components/pages/Characters";
import EpisodesCard from "@components/pages/Episodes";
import Home from "@components/pages/Home";
import { useTranslation } from "react-i18next";

function Tabs() {
  const { t } = useTranslation();

  const tabs = [
    { label: t("home"), path: "/home", component: Home },
    { label: t("character"), path: "/personagens", component: CharacterCard },
    { label: t("episodios"), path: "/episodios", component: EpisodesCard },
  ];

  return (
    <>
      <CustomTabs tabs={tabs} />
    </>
  );
}

export default Tabs;
