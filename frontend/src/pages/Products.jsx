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
  }
}