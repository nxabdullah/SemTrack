import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course";
import Toasts from "./components/layout/Toasts";
import MainAlert from "./components/shared/MainAlert";

function App() {
  return (
    <Router>
      {/* <div className="flex flex-col justify-between h-screen"> */}
      <Navbar />
      <main className="container mx-auto px-6 pb-12 py-12">
      <MainAlert />
        <Routes>
          {/* <Route path="/" element={<Landing />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/app" element={<Dashboard />} />
          <Route path="/courses/:courseId" element={<Course />} />
        </Routes>
      </main>
      {/* </div> */}
      <Toasts />
    </Router>
  );
}

export default App;
