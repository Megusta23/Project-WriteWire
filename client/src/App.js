import { Routes, Route, Outlet, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <p>testing if the routing works:</p>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
