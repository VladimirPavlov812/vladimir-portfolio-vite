import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CasePage from "./pages/CasePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases/:slug" element={<CasePage />} />

        {/* редиректы со старых путей (как на Tilda) */}
        <Route path="/sdare" element={<Navigate to="/cases/sdare" replace />} />
        <Route path="/yasha" element={<Navigate to="/cases/yasha" replace />} />
        <Route path="/custdev" element={<Navigate to="/cases/custdev" replace />} />
        <Route path="/Textdocs" element={<Navigate to="/cases/textdocs" replace />} />
        <Route path="/metrictree" element={<Navigate to="/cases/metrictree" replace />} />
        <Route path="/seb" element={<Navigate to="/cases/seb" replace />} />
        <Route path="/edi" element={<Navigate to="/cases/edi" replace />} />
        <Route path="/conf" element={<Navigate to="/cases/conf" replace />} />

        {/* fallback */}
        <Route path="*" element={<div className="p-10">404</div>} />
      </Routes>
    </BrowserRouter>
  );
}