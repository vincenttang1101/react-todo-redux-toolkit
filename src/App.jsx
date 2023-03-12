import Content from "./layouts/Content/Content";
import Header from "./layouts/Header/Header";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import Footer from "./layouts/Footer/Footer";

function App() {
  return (
    <>
      <div className="container">
        <ParticlesBackground></ParticlesBackground>
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
