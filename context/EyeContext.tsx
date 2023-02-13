import { createContext, useContext, ReactElement, useState } from "react";

const defaultEyeState = {
  expanded: false,
  style: "default",
};

interface IState {
  expanded: boolean;
  style: string;
}
interface IContextProps {
  state: IState;
  dispatch: ({ type }: { type: string }) => void;
}

const EyeContext = createContext({state:{...defaultEyeState},dispatch:(e)=>{console.log(e,"lode")}} as IContextProps);

export function EyeState({ children }: { children: ReactElement[] }) {
  const [eyeC, seteyeC] = useState(defaultEyeState);
  const eyeStateReduser = ({ type }: { type: string }) => {
    console.log(type)
    if (type != undefined) {
      seteyeC({
        expanded: true,
        style: type,
      });
    } else {
      seteyeC(defaultEyeState);
    }
  };
  const val = { state: eyeC, dispatch: eyeStateReduser };
  return <EyeContext.Provider value={val}>{children}</EyeContext.Provider>;
}

export function useEyeContext() {
  return useContext(EyeContext);
}
