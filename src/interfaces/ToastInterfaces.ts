export interface IdToast {
  id: string;
}

export interface MessageToast {
  message: string;
}

export interface ToastProps {
  id: string;
  message: string;
}

export interface Toast extends ToastProps {
  onClose: (id?: string) => void;
  myStyles: {};
}

export interface ToastPosition {
  position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

export interface ToastRefProps {
  addMessage: ({ message }: MessageToast | ToastProps) => void;
}
