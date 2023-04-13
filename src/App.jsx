import { useRef } from "react";
import { ToastPortal } from "./components/ToastPortal";

const App = () => {
  const toastRef = useRef();

  const addToast = (event) => {
    event.preventDefault();

    toastRef.current.addMessage({
      message: event.target[0].value,
    });
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <form onSubmit={(e) => addToast(e)}>
        <input type="text" />
        <button>Show Toast</button>
      </form>
      <ToastPortal ref={toastRef} />
    </div>
  );
};

export default App;
