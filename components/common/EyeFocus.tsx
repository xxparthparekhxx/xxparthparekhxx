import Link from "next/link";
import react, { useEffect, useState } from "react";
import { useLocation } from "react-use";
import { useEyeContext } from "../../context/EyeContext";

export const  EyeFocus= ({event_name}:{event_name?:string}) => {
  const NavItemStyle = {
    paddingTop: "1.5em",
    paddingRight: "0.75em",
    paddingBottom: "1.5em",
  };
  const [BeingHovered, setBeingHovered] = useState(false);

  const eyec = useEyeContext();

  return (
      <div
        onMouseEnter={(e) => {
          setBeingHovered(true);
            eyec.dispatch({ type: event_name??'' });
        }}
        onMouseLeave={(e) => {
          setBeingHovered(true);
          eyec.dispatch({type:undefined});
        }}
      >
      </div>
  );
};
