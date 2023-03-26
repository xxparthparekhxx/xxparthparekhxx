import { useEffect, useState } from "react";
import Eye from "./eye";

export const LeftRight = () => {
  const EYE_RAD = 30;
  const [direction, setDirection] = useState(1);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prevRotation => {
        if (prevRotation >= 45) {
          setDirection(-1);
        } else if (prevRotation <= -45) {
          setDirection(1);
        }
        return prevRotation + direction + 7;
      });
    }, 0.001);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <Eye
      eyeRadius={EYE_RAD}
      CurveFunction={(x, y) => {
        const distance = EYE_RAD - EYE_RAD * 0.7;
        const corneaX =
          EYE_RAD +
          distance * Math.cos((rotation * Math.PI) / 180) -
          EYE_RAD * 0.7;
        const corneaY =
          EYE_RAD +
          distance * Math.sin((rotation * Math.PI) / 180) -
          EYE_RAD * 0.7;
        return {
          x: corneaX,
          y: corneaY,
          rotation,
        };
      }}
    />
  );
};
