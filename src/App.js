import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Activities from "./pages/Activities";
import FindJob from "./pages/FindJob";
import TrainingPrograms from "./pages/TrainingPrograms";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Activities />} />
        <Route path="/trainingprograms" element={<FindJob />} />
        <Route path="/findjob" element={<TrainingPrograms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
