import { useEffect, useState } from "react";
import { ToastPosition } from "../interfaces/ToastInterfaces";
import { uuid } from "../util/functionId";

export const useToastPortal = ({ position = "top-right" }: ToastPosition) => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`toast-portal-${uuid()}`);

  const POSITION = {
    "top-right": "top: 10px; right: 10px",
    "top-left": "top: 10px; left: 10px",
    "bottom-right": "bottom: 10px; right: 10px",
    "bottom-left": "bottom: 10px; left: 10px",
  };

  const createElement = () => {
    const div = document.createElement("div");
    div.id = portalId;
    div.style.cssText = `position: fixed; ${POSITION[position]}`;
    document.getElementsByTagName("body")[0].prepend(div);

    return div;
  };

  useEffect(() => {
    let div = createElement();
    setLoaded(true);

    return () => {
      document.getElementsByTagName("body")[0].removeChild(div);
    };
  }, [portalId]);

  return { loaded, portalId };
};
