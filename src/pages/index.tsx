import { Cart } from "../components/Cart";
import { Hero } from "../components/Hero";
import { ProductList } from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
