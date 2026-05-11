import "./App.css";
import Cart from "./components/Cart";
import ProductCart from "./components/ProductCard";
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

  function decreaseQuantity(id: number) {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  }

  function increaseQuantity(id: number) {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  }

  const cartTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <main>
      <h1>Mini Commerce Cart</h1>
      <p>Shopping cart project with React and TypeScript.</p>

      <div className="app-layout">
        <section>
          <h2>Products</h2>

          <section className="products">
            {products.map((product) => (
              <ProductCart
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </section>
        </section>

        <section className="cart">
          <h2>Cart</h2>

          {cart.length === 0 && <p>Your cart is empty.</p>}

          {cart.map((item) => (
            <Cart
              key={item.id}
              item={item}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
            />
          ))}

          <h2>Total: ${cartTotal.toFixed(2)}</h2>
        </section>
      </div>
    </main>
  );
}

export default App;
