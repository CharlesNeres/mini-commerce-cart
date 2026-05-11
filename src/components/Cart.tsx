function Cart({
  item,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
}: any) {
  return (
    <article className="cart-item">
      <div>
        <h3>{item.name}</h3>

        <div className="quantity-controls">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
      </div>

      <strong>${(item.price * item.quantity).toFixed(2)}</strong>
      <p>
        <button
          className="remove-button"
          onClick={() => removeFromCart(item.id)}
        >
          X
        </button>
      </p>
    </article>
  );
}

export default Cart;
