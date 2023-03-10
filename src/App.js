import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Community from "./pages/Community";
import Events from "./pages/Events";
import Home from './pages/Home';
import Programs from "./pages/Programs";

function App() {
  return (
    <div className="w-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
