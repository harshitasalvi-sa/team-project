
import "./ProductCard.css";

const ProductCard = ({ name, description, price, image, inStock }) => {
  function handleBuy(){
    alert("You will be redirected to Buy Now page! 💸")
  }
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <div className="product-info">

          <h3>{name}</h3>

        <p className="desc">{description}</p>
        <p className="price">₹{price}</p>

        <button
          className={`buy-btn ${!inStock ? "disabled" : ""}`}
          disabled={!inStock}
          onClick={handleBuy}
        >
          {inStock ? "Buy Now" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
