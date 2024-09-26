import Image from "next/image";
import styles from "./styles.module.css";
import FocusOnMouseEnter from "../eye/FocusOnMouseEnter";

type StackProps = {
  id: number;
  img: string;
  name: string;
  selected: boolean;
  setStackSort: (id: number) => any;
  iconOnly: boolean | undefined
};

const Stack = ({ id, img, name, setStackSort, selected,iconOnly=false }: StackProps) => {
  return (
    <FocusOnMouseEnter>
    <div
      onClick={() => setStackSort(id)}
    
      className={styles.StackChipContainer}
      style={
        selected
          ? {
              boxShadow: "0px 0px 20px #4ade80",
            }
          : {}
      }
    >
      <Image width={28} height={28} className={styles.StackImage} src={img} alt={name} />
      {!iconOnly? <div className={styles.StackName}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </div>:<></>}
    </div>
    </FocusOnMouseEnter>
  );
};

export default Stack;
