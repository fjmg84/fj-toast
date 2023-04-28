import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import ReactDOM from "react-dom";
import { useToastPortal } from "../hooks/useToastPortal";
import { uuid } from "../util/functionId";
import Toast from "./Toast";
import { ToastProps } from "../interfaces/ToastInterfaces";

interface ToastPortal {
  autoClose?: boolean;
  autoCloseTime?: number;
  position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  myStyles?: {};
}

export const ToastPortal = forwardRef(
  (
    { autoClose = true, autoCloseTime = 5000, position, myStyles }: ToastPortal,
    ref
  ) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);
    const [removing, setRemoving] = useState("");
    const { loaded, portalId } = useToastPortal({ position });

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

    const removeToast = (id: any) => {
      setToasts(toasts.filter((toast) => toast.id !== id));
    };

    useImperativeHandle(ref, () => ({
      addMessage(toast: ToastProps) {
        setToasts([...toasts, { ...toast, id: uuid() }]);
      },
    }));

    return loaded ? (
      ReactDOM.createPortal(
        <div>
          {toasts.map((t, i) => {
            return (
              <div key={i}>
                <Toast
                  id={t.id}
                  message={t.message}
                  onClose={removeToast}
                  myStyles={myStyles ? myStyles : {}}
                />
              </div>
            );
          })}
        </div>,
        document.getElementById(portalId) as Element | DocumentFragment
      )
    ) : (
      <></>
    );
  }
);
