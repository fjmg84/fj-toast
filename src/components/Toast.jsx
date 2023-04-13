import styles from "./styles.module.css";

const Toast = ({ id, message, onClose, myStyles = undefined }) => {
  return (
    <div
      className={styles.toast}
      onClick={() => onClose(id)}
      key={id}
      style={myStyles}
    >
      {message}
    </div>
  );
};

export default Toast;
