import "./App.css";
import { Route, Routes } from "react-router-dom";
import ReceiptsView from "./features/ReceiptsView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function App() {
  const themeValues = ["dark", "cupcake", "Bumblebee"];
  useEffect(() => {
    themeChange(false);
  });
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
