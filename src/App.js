import Navbar from "./Components/NavBar/Navbar";
import About from "./Components/About/About";
import Roadmap from "./Components/RoadMap/Roadmap";
import Build from "./Components/Build/Build";
import Community from "./Components/Community/Community";
import LiveRoadMap from "./Components/LiveRoadMap/LiveRoadMap";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import GoToTop from "./Components/GoToTop";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/roadmap" element={<Roadmap/>} />
        <Route path="/build" element={<Build/>} />
        <Route path="/community" element={<Community/>} />
        <Route path="/liveroadmap" element={<LiveRoadMap/>} />
      </Routes>
      <GoToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
