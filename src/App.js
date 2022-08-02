import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container className="my-3 d-block ">
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path='product/:id' element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
