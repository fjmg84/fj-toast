import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useToastPortal } from "../hooks/useToastPortal";
import { uuid } from "../util/functionId";
import Toast from "./Toast";

export const ToastPortal = forwardRef(
  ({ autoClose = true, autoCloseTime = 5000, position, myStyles }, ref) => {
    const [toasts, setToasts] = useState([]);

    const { loaded, portalId } = useToastPortal({ position });
    const [removing, setRemoving] = useState("");

    useEffect(() => {
      if (removing) {
        setToasts(toasts.filter((toast) => toast.id !== removing));
      }
    }, [removing]);

    useEffect(() => {
      if (autoClose && toasts.length) {
        const id = toasts[toasts.length - 1].id;
        setTimeout(() => {
          setRemoving(id);
        }, autoCloseTime);
      }
    }, [toasts, autoCloseTime, autoClose]);

    const removeToast = (id) => {
      setToasts(toasts.filter((toast) => toast.id !== id));
    };

    useImperativeHandle(ref, () => ({
      addMessage(toast) {
        setToasts([...toasts, { ...toast, id: uuid() }]);
      },
    }));

    return loaded ? (
      ReactDOM.createPortal(
        <div>
          {toasts.map((t) => {
            return (
              <Toast
                key={t.id}
                id={t.id}
                message={t.message}
                onClose={removeToast}
                myStyles={myStyles}
              />
            );
          })}
        </div>,
        document.getElementById(portalId)
      )
    ) : (
      <></>
    );
  }
);

ToastPortal.propTypes = {
  autoClose: PropTypes.bool,
  autoCloseTime: PropTypes.number,
  position: PropTypes.oneOf([
    "top-right",
    "bottom-right",
    "top-left",
    "bottom-left",
  ]),
  myStyles: PropTypes.object,
};
