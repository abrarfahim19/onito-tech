import "./App.css";
import { Route, Routes } from "react-router-dom";
import ReceiptsView from "./features/ReceiptsView";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ReceiptsView />} />
        <Route path="home" element={<ReceiptsView />} />
      </Routes>
    </div>
  );
}

export default App;
