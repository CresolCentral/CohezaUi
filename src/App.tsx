import useToast from "./context/UseToast/UseToast";
import "./styles/global.css";

export function App() {

  const { showNotification } = useToast();
  
  return (
    <button onClick={() => showNotification('success', 'Efetuado com sucesso')}>Make me a toast</button>
  );
}
