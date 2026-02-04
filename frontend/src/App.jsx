import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Purchases from "./pages/Purchases";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import "./styles/layout.css"

function App(){
    return (
        <BrowserRouter>
          <div className="app">
            <Sidebar/>
            <div className="content">
                <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/products" element={<Products />}/>
                    <Route path="/sales" element={<Sales />}/>
                    <Route path="/purchases" element={<Purchases />}/>
                    <Route path="/profile" element={<Profile />}/>
                </Routes>
            </div>
          </div>
            
        </BrowserRouter>
    );
}

export default App;