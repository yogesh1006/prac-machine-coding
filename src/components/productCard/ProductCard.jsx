import "./productcard.css";

const ProductCard = ({ product }) => {
  console.log(product);

  return (
    <div className="card">
      <img className="img" src={product.img} alt="" />
      <div className="card-details">
        <h5 className="brand">{product.brand}</h5>
        <h4 className="name">{product.name}</h4>
        <p className="idealfor">{product.idealfor}</p>
        <p className="price">
          Rs. {product.price}{" "}
          <span className="discount">{product.discount}</span>
        </p>
        <div className="sizes">
          <p className="size">{product.size}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
