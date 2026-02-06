import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";

export default function Products () {
  const [products, setProducts] =  useState([]);
  const [ loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts= async () => {
    try {
      const res = await fetchProducts();
      setProducts(res.data);
    }
    catch (err) {
      console.error(err);
      alert("Failed to Load Productsd");
    } finally{
      setLoading(false);
    }
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1>Products</h1>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th>Selling</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.quantity}</td>
              <td>{p.costPrice}</td>
              <td>{p.sellingPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}