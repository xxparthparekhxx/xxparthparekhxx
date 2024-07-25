import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocation } from "react-use";
import { useEyeContext } from "../../context/EyeContext";

export const NavbarItem = ({ TO, TEXT, blank }) => {
  const NavItemStyle = {
    paddingTop: "1.5em",
    paddingRight: "0.75em",
    paddingBottom: "1.5em",
  };
  const [BeingHovered, setBeingHovered] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (typeof TEXT == typeof "") {
      const endpoint = location.href.includes(TEXT);
      console.log(TEXT);
      if (
        endpoint ||
        (TEXT == "Work" &&
          location.href.split("/").at(location.href.split("/").length - 1) ==
            "")
      ) {
        setBeingHovered(true);
      }
    }
  }, [location, BeingHovered,TEXT]);

  const eyec = useEyeContext();

  return (
    <Link
      href={TO != undefined ? TO : TEXT != "Work" ? "/"+TEXT : "/"}
      target={blank && "_blank"}
    >
      <div
        onMouseEnter={(e) => {
          setBeingHovered(true);
          // console.log(TEXT.toLowerCase())
          try {
            eyec.dispatch({ type: TEXT.toLowerCase() });
          } catch {
            eyec.dispatch({ type: "" });
          }
        }}
        onMouseLeave={(e) => {
          setBeingHovered(false);
          eyec.dispatch({});
        }}
        style={NavItemStyle}
      >
        {TEXT}
        <div
          style={{
            width: "100%",
            height: "0.2em",
            marginTop: "0.3em",
            borderRadius: "4px",
            backgroundColor: "#00ff41",
            opacity: BeingHovered ? 1 : 0,
            transition: "all .5s cubic-bezier(.175,.885,.32,1.275)",
            transform: "translate3d(0,5px,0);",
          }}
        ></div>
      </div>
    </Link>
  );
};
