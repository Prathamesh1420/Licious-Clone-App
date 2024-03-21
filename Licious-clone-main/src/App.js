import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import { ApplicationContextProvider } from "./context/app-context";
import AppRoutes from "./routes/app-routes";

function App() {
  return (
    <BrowserRouter>
      <ApplicationContextProvider>
        <Navbar />
        <AppRoutes />
      </ApplicationContextProvider>
    </BrowserRouter>
  );
}

export default App;