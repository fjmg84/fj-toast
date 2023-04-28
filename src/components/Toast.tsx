import { Toast as ToastI } from "../interfaces/ToastInterfaces";
import styles from "./styles.module.css";

const Toast = ({ id, message, onClose, myStyles = {} }: ToastI) => {
  return (
    <div
      className={styles.toast}
      onClick={() => onClose(id)}
      key={id as any}
      style={myStyles}
    >
      {message as any}
    </div>
  );
};

export default Toast;
