// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";

import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KastratView from "./components/Kastrat/KastratView";
import KastratDetailView from "./components/Kastrat/KastratDetailView";
import KegiatanView from "./components/Kegiatan/KegiatanView";
import KegiatanNav from "./components/Kegiatan/KegiatanNav/KegiatanNav";
import KegiatanDetailView from "./components/Kegiatan/KegiatanDetailView";
import Login from "./components/Login/Login";
import KastratNavAdmin from "./components/Admin/Kastrat/KastratNav/KastratNav";
import KastratViewAdmin from "./components/Admin/Kastrat/KastratView";
import KastratDetailViewAdmin from "./components/Admin/Kastrat/KastratDetailView";
import AddKastrat from "./components/Admin/Kastrat/AddKastrat/AddKastrat";

import KegiatanNavAdmin from "./components/Admin/Kegiatan/KegiatanNav/KegiatanNav";
import KegiatanViewAdmin from "./components/Admin/Kegiatan/KegiatanView";
import KegiatanDetailViewAdmin from "./components/Admin/Kegiatan/KegiatanDetailView";
import AddKegiatan from "./components/Admin/Kegiatan/AddKegiatan/AddKegiatan";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Kastrat */}
          <Route path="/kastrat" element={<KastratView />} />
          <Route
            path="/kastrat/kastrat-detail/:id"
            element={<KastratDetailView />}
          />

          {/* Kegiatan */}
          <Route path="/kegiatan" element={<KegiatanNav />}>
            <Route index element={<KegiatanView />} />
            <Route
              path="kegiatan-detail/:id"
              element={<KegiatanDetailView />}
            />
          </Route>

          {/* Admin */}
          <Route path="/kastrat-admin" element={<KastratNavAdmin />}>
            <Route index element={<KastratViewAdmin />} />
            <Route path="add-kastrat" element={<AddKastrat />} />
          </Route>
          <Route
            path="/kastrat-admin/kastrat-detail/:id"
            element={<KastratDetailViewAdmin />}
          />

          {/* Kegiatan Admin*/}
          <Route path="/kegiatan-admin" element={<KegiatanNavAdmin />}>
            <Route index element={<KegiatanViewAdmin />} />
            <Route
              path="kegiatan-detail/:id"
              element={<KegiatanDetailViewAdmin />}
            />
            <Route path="add-kegiatan" element={<AddKegiatan />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
