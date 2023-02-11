import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeltView from "./components/Felt/FeltView";
import FeltDetailView from "./components/Felt/FeltDetailView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />

          {/* Felt */}
          <Route path="/felt" element={<FeltView />} />
          <Route path="/felt/felt-detail" element={<FeltDetailView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
