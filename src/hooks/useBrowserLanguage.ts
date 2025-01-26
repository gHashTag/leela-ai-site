import { useState, useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function useBrowserLanguage() {
  const [language, setLanguage] = useState("");
  const [isRu, setIsRu] = useState(false);
  const { i18n } = useDocusaurusContext();
  console.log(i18n.currentLocale, "i18n.currentLocale"); // e.g. 'en'
  useEffect(() => {
    setIsRu(i18n.currentLocale === "ru");
  }, []);

  return { language, isRu };
}

export default useBrowserLanguage;
