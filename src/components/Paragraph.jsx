import React, { useContext } from "react";
import { ThemeContext } from "../session3/hooks/UseContext";

export default function Paragraph() {
  const theme = useContext(ThemeContext)
  console.log("🚀 ~ file: Paragraph.jsx:6 ~ Paragraph ~ theme:", theme)
  
  return <div className={theme}>Tai</div>;
}
