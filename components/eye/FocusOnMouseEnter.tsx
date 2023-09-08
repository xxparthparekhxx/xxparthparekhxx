import React, { useState } from "react";
import { useEyeContext } from "../../context/EyeContext";

function FocusOnMouseEnter(props:any,{customEmojee,}:{customEmojee:string|undefined}) {
  const eyec = useEyeContext();
  const [BeingHovered, setBeingHovered] = useState(false);
  return (
    <div
      onMouseEnter={(e) => {
        setBeingHovered(true);
        // console.log(TEXT.toLowerCase())
        eyec.dispatch({ type: "" });
      }}
      onMouseLeave={(e) => {
        setBeingHovered(false);
        eyec.dispatch({type:undefined});
      }}
    >
        {props.children}
    </div>
  );
}

export default FocusOnMouseEnter;
