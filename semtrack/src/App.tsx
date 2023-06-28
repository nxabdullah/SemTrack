import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      {/* <div className="flex flex-col justify-between h-screen"> */}
      <Navbar />
      <main className="container mx-auto px-6 pb-12 py-12">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app" element={<Dashboard />} />
          <Route path="/course/:courseId" element={<Dashboard />} />
        </Routes>
      </main>
      {/* </div> */}
    </Router>
  );
}

export default App;
