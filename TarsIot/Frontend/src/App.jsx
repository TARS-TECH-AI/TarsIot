import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Services"
import Products from "./pages/Product"
import Client from "./pages/Client"
import Contact from "./pages/Contact"
import ProductDetail from "./components/ProductDetails"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service/>}/>
        <Route path="/products" element={<Products />} />
        {/* product detail Page */}
        <Route path="/product-detail" element={<ProductDetail />} />

        <Route path="/clients" element={<Client/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
