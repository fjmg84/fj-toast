import { useRef } from "react";
import { ToastPortal } from "./components/ToastPortal";
import { ToastRefProps } from "./interfaces/ToastInterfaces";

const App = () => {
  const toastRef = useRef<ToastRefProps>();

  const addToast = (): void => {
    const message = "hi, my name is Fidel"
    toastRef.current?.addMessage({
      message,
    });
  };

  return (
    <div className="App">
      <h1>Hello</h1>

      <button onClick={addToast}>Show Toast</button>

      <ToastPortal position={"bottom-left"} ref={toastRef} />
    </div>
  );
};

export default App;
