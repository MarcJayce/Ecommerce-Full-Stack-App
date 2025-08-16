import { useLocation } from 'react-router-dom';
import Header from "../Components/header";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShoppingPage = () => {

  const [products, setProducts] = useState([{
    id: 0,
    name: "",
    type: "",
    price: 0
  }]); 

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data); 
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  fetchProducts();
}, []);


  const query = new URLSearchParams(useLocation().search);
  const tab = query.get('tab') || 'gravel';

  const filteredProducts = products.filter(
    (product) => product.type.toLowerCase() === tab.toLowerCase()
  );
  

  
  return (
    <>
    <Header/>
    {/* Product Header */}
    <div className="header-container">
        {(() => {
          const capitalizedTab = tab.charAt(0).toUpperCase() + tab.slice(1);
          const isGear = tab === "gear";
          const title = isGear
            ? `Shop Cycling ${capitalizedTab}s`
            : `Shop ${capitalizedTab} Bikes`;
          const description = isGear
            ? `Explore our collection of Cycling ${tab}s, designed for performance and comfort.`
            : `Explore our collection of ${tab} bikes, designed for performance and comfort.`;

          return (
            <>
              <h1 className="text-center my-5">{title}</h1>
              <p className="text-center mb-5">{description}</p>
            </>
          );
        })()}
      </div>

      {/* Product Cards */}
      <div className="card-grid">
        {filteredProducts.map((item) => (
          <div className="card">
            <Link to={`/product/${item.id}`} key={item.id} className="card-link">
              <h3>{item.name}</h3>
              <p>Type: {item.type}</p>
              <p>Price: {item.price}</p>
            </Link>
          </div>
        ))}
      </div>


    </>
    
  );
}
export default ShoppingPage;  