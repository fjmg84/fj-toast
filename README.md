# fj-toast

fj-toast is for creating toast in an easy way, without other dependencies.
You import the library, call the component and pass it a reference.

## Example 
```
import { useRef } from "react";
import { ToastPortal } from "./components/ToastPortal";
```

```
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
```

## Props of ToastPortal
autoClose = boolean <br>

autoCloseTime = number <br>

position =  'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' <br>

myStyles = object<br>

<hr>

## Description
autoClose: so that the toasts, after the time defined in autoCloseTime, close by themselves (true value default) <br>

autoCloseTime: the time to close the toast (5000 milliseconds default)<br>

position: is position of the toast<br>

myStyles: object by personal styles

