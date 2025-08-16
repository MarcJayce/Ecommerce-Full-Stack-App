import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/header';

type Product = {
    name: string;
    type: string;
    price: number;
    image: string;
};

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/products/${id}`);
                setProduct(response.data);
            }catch {
                setError("Error fetching product details.");
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found.</p>;
    return (
        <>
        <Header/>
         <div>
            <h1 className="text-center my-5">Product Page</h1>
            <h1 className="text-center">{product.name}</h1>
            <p className="text-center">Type: {product.type}</p>
            <p className="text-center">Price: {product.price}</p>
            <h3 className="text-center my-2">No Image Version Working</h3>
           
        </div>
        </>
       
    );
}
export default ProductPage;