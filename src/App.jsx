import Content from "./layouts/Content/Content";
import Header from "./layouts/Header/Header";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import Footer from "./layouts/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="container">
        <ParticlesBackground></ParticlesBackground>
        <Header />
        <Content />
        <Footer />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{ style: { fontSize: "1.5rem" } }}
      />
    </>
  );
}

export default App;
