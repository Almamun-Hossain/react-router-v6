import { Route, Routes } from "react-router-dom";
import Categories from "./ pages/Category/Categories";
import CategoryProducts from "./ pages/Category/CategoryProducts";
import Contact from "./ pages/Contact";
import Home from "./ pages/Home";
import PageNotFound from "./ pages/PageNotFound";
import ProductDetails from "./ pages/Product/ProductDetails";
import Products from "./ pages/Product/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":categoryName" element={<CategoryProducts />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="product/:productID" element={<ProductDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
