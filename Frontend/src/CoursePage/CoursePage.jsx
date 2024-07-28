import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Course />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
