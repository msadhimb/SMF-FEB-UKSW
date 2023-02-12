import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KastratView from "./components/Kastrat/KastratView";
import KastratDetailView from "./components/Kastrat/KastratDetailView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />

          {/* Felt */}
          <Route path="/kastrat" element={<KastratView />} />
          <Route
            path="/kastrat/kastrat-detail"
            element={<KastratDetailView />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
