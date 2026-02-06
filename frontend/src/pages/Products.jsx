import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";

export default function Products () {
  const [products, setProducts] =  useState([]);
  const [ loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts= async () => {
    const res = await fetchProducts();
    setProducts(res.data);
  }
}