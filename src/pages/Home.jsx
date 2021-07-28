import ProductCard from "../components/productCard/ProductCard";
import Sidebar from "../components/sidebar/Sidebar";
import { useData } from "../context/data-context";
import "./home.css";

const Home = () => {
  const { filteredData } = useData();
  console.log("dfghjgfds", filteredData);

  return (
    <div className="homepage">
      <Sidebar />

      <div className="products" style={{ marginTop: "4rem" }}>
        {filteredData.length > 0 ? (
          filteredData.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        ) : (
          <h2 className="noProducts">No Products Found In This Category</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
