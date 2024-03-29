import React, { Component, ReactElement } from "react";
import { useEyeContext } from "../../context/EyeContext";
import Eye from "./eye";
export const GetBlackChild = () => {
  const eyeState = useEyeContext();
  const BlackChildReduser = (type: string,customemoji?:string) => {
    switch (type) {
      case "work":
        return "👩‍💻";
      case "about":
        return "😇";
      case "blog":
        return "📰";
      case "contact":
        return "📞";
      case "custom":
        return customemoji;      
      default:
        return "";
    }
  };

  return (
    <Eye Expanded={eyeState.state.expanded}
      blackChild={<div style={{transform:"rotate(180deg)"}}>{BlackChildReduser(eyeState.state.style)}</div>}
    ></Eye>
  );
};
