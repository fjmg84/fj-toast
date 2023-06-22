import { useRef } from "react";
import { ToastPortal } from "./components/ToastPortal";
import { ToastRefProps } from "./interfaces/ToastInterfaces";

const App = () => {
  const toastRef = useRef<ToastRefProps>();
  const messageRef = useRef<HTMLInputElement>(null)

  const addToast = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (messageRef.current) {
      toastRef.current?.addMessage({
        message: messageRef.current.value
      });
    }
  };

  return (
    <div className="App">
      <h1>Hello</h1>

      <form onSubmit={addToast}>

        <input ref={messageRef} type="text" name="message" />
        <button>Show Toast</button>

      </form>


      <ToastPortal position={"bottom-left"} ref={toastRef} />
    </div>
  );
};

export default App;
