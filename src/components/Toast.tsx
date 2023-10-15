import { useEffect } from "react";

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed right-4 bottom-4 p-4 bg-gray-800 text-white rounded-lg ${
        show ? "block" : "hidden"
      }`}
    >
      {message}
    </div>
  );
};
