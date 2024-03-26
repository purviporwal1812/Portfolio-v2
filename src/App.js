import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { Outlet } from "react-router-dom";
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
