import { FormEvent, useRef } from "react";
import { ToastPortal } from "./components/ToastPortal";
import { ToastRefProps } from "./interfaces/ToastInterfaces";

const App = () => {
  const toastRef = useRef<ToastRefProps>();

  // FormEvent<HTMLFormElement>
  const addToast = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    let { value } = event.target[0];

    if (value)
      toastRef.current?.addMessage({
        message: value,
      });
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <form onSubmit={(event) => addToast(event)}>
        <input type="text" name="text" />
        <button>Show Toast</button>
      </form>
      <ToastPortal position={"bottom-left"} ref={toastRef} />
    </div>
  );
};

export default App;
