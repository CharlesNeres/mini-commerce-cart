function ProductCart({ product, addToCart }: any) {
  return (
    <article className="product-card">
      <span className="product-image">{product.image}</span>
      <h2>{product.name}</h2>
      <p>{product.category}</p>
      <strong>${product.price.toFixed(2)}</strong>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </article>
  );
}

export default ProductCart;
