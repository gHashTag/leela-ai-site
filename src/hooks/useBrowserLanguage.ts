import { useState, useEffect } from "react";

function useBrowserLanguage() {
  const [language, setLanguage] = useState("");
  const [isRu, setIsRu] = useState(false);

  useEffect(() => {
    const browserLanguage = navigator.language;
    setLanguage(browserLanguage);
    setIsRu(browserLanguage === "ru-RU");
  }, []);

  return { language, isRu };
}

export default useBrowserLanguage;
