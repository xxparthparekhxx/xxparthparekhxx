import Image from "next/image";
import styles from "./styles.module.css";

type StackProps = {
  id: number;
  img: string;
  name: string;
  selected: boolean;
  setStackSort: (id: number) => any;
};

const Stack = ({ id, img, name, setStackSort, selected }: StackProps) => {
  return (
    <div
      onClick={() => setStackSort(id)}
      className={styles.StackChipContainer}
      style={
        selected
          ? {
              boxShadow: "0px 0px 20px #ffc4ff",
            }
          : {}
      }
    >
      <img  className={styles.StackImage} src={img} alt={name} />
      <div className={styles.StackName}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </div>
    </div>
  );
};

export default Stack;
