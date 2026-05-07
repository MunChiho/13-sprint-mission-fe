import "./App.css";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Market from "./pages/Market";
import Footer from "./components/Footer";
import ProductCreate from "./pages/ProductCreatePage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/item" element={<Market />} />
        <Route path="/product/create" element={<ProductCreate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
