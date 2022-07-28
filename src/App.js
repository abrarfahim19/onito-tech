import "./App.css";
import { Route, Routes } from "react-router-dom";
import ReceiptsView from "./features/ReceiptsView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ReceiptsView />} />
        <Route path="home" element={<ReceiptsView />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
