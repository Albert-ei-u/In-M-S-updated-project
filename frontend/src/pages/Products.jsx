import { use, useEffect, useState } from "react";
import Table from "../components/Table";
import api from "../api/axios";
import "../styles/table.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  const columns = ["Name", "Category", "Price", "Stock", "Actions"];

  useEffect(() => {
    api.get("/products")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error("Failed to Fetch products", err);
      });
  }, []);

  const tableData = products.map(product => ({
    name: product.name,
    category: product.category,
    price: product.price,
    stock: product.stock,
    actions: "Edit | Delete",
  }));
  
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Product Management</h1>
        <button className="primary-btn">Add Product</button>
      </div>

      <Table columns={columns} data= {tableData}/>
    </div>
  );
}
