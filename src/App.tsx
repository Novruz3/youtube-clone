import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Video } from "./pages/Video";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="max-h-screen overflow-hidden">
        <div style={{ height: "7.5vh" }}>
          <Navbar />
        </div>
        <div className="flex mt-2" style={{ height: "92.5vh" }}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<Video />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
