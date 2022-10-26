import { useContext } from "react";
import { ToastContext } from "../Toast/ToastContext";

const useToast = () => {
  return useContext(ToastContext);
};

export default useToast;