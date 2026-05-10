import "./App.css";
import { products } from "./data/products";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <main>
      <h1>Mini Commerce Cart</h1>
      <p>Shopping cart project with React and TypeScript.</p>

      <section className="products">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <span className="product-image">{product.image}</span>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <strong>${product.price.toFixed(2)}</strong>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
