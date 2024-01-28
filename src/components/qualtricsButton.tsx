import ButtonLink from "@/components/buttonLink";
import { Language } from "@/types";
import React from "react";

const QualtricsButton = ({text, language}: {text: string, language: Language}) => {
  return (
    <ButtonLink
      text={text}
      url={language === "english" ? "/about#survey-block" : "/aboutESP#survey-block"}
    />
  );
};

export default QualtricsButton;
