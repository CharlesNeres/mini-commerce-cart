import "./App.css";
import { products } from "./data/products";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const productExists = cart.find((item) => item.id === product.id);

    if (productExists) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      setCart(updatedCart);

      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
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

      <section className="cart">
        <h2>Cart</h2>
        {cart.map((item) => (
          <article key={item.id} className="cart-item">
            <div>
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
            </div>

            <strong>${(item.price * item.quantity).toFixed(2)}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
