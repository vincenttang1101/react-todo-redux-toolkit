import { Header, Content, Footer } from "./layouts";
import { ParticlesBackground } from "./components";
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
