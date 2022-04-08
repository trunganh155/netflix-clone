import "./App.scss";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Contents from "./components/Contents/Contents";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop/GoToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
      <GoToTop />
      <Footer />
    </div>
  );
}

export default App;
