import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import CropPage from "./pages/CropPage";
import CompressPage from "./pages/CompressPage";
import ThumbnailPage from "./pages/ThumbnailPage";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Upload</Link>
        <Link to="/crop">Crop</Link>
        <Link to="/compress">Compress</Link>
        <Link to="/thumbnail">Thumbnail</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/crop" element={<CropPage />} />
        <Route path="/compress" element={<CompressPage />} />
        <Route path="/thumbnail" element={<ThumbnailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
