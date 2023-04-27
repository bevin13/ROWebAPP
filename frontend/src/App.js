import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import './assets/styles.css'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
