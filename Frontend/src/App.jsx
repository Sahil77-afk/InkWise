import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import CoursePage from "./CoursePage/CoursePage";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<CoursePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
