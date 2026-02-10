import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Purchases from "./pages/Purchases";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./styles/layout.css"

function App(){
  const location = useLocation();
  const hideSidebar = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="min-h-screen bg-gray-50">
      {!hideSidebar && <Sidebar />}
      <div className={`${!hideSidebar ? 'ml-64' : ''} transition-all duration-300`}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/sales" element={<Sales />}/>
          <Route path="/purchases" element={<Purchases />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;