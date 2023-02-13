import react, { useState } from "react";
import { useEyeContext } from "../../context/EyeContext";

export const NavbarItem = ({ TO, TEXT, blank }) => {
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
        // console.log(TEXT.toLowerCase())
        try {
          eyec.dispatch({ type: TEXT.toLowerCase() });
        } catch {}
      }}
      onMouseLeave={(e) => {
        setBeingHovered(false);
        eyec.dispatch({});
      }}
      style={NavItemStyle}
    >
      <a href={TO} target={blank && "_blank"}>
        {TEXT}
      </a>
      <div
        style={{
          width: "100%",
          height: "0.2em",
          marginTop: "0.3em",
          borderRadius: "4px",
          backgroundColor: "#ffc4ff",
          opacity: BeingHovered ? 1 : 0,
          transition: "all .3s cubic-bezier(.175,.885,.32,1.275);",
          transform: "translate3d(0,5px,0);",
        }}
      ></div>
    </div>
  );
};
