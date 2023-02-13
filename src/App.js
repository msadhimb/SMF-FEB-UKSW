import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KastratView from "./components/Kastrat/KastratView";
import KastratDetailView from "./components/Kastrat/KastratDetailView";
import KegiatanView from "./components/Kegiatan/KegiatanView";
import KegiatanNav from "./components/Kegiatan/KegiatanNav/KegiatanNav";
import KegiatanDetailView from "./components/Kegiatan/KegiatanDetailView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />

          {/* Kastrat */}
          <Route path="/kastrat" element={<KastratView />} />
          <Route
            path="/kastrat/kastrat-detail"
            element={<KastratDetailView />}
          />

          {/* Kegiatan */}
          <Route path="/kegiatan" element={<KegiatanNav />}>
            <Route index element={<KegiatanView />} />
            <Route path="kegiatan-detail" element={<KegiatanDetailView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
