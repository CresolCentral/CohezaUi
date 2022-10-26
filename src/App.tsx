import { useToast } from "./context/Toast/ToastContext";
import "./styles/global.css";

export function App() {

  const { showNotification } = useToast();
  
  return (
    <button onClick={() => showNotification('success', 'Efetuado com sucesso', "Sucesso")}>Make me a toast</button>
  );
}
