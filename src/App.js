import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/user/:userId" element={<User/>} />
          <Route path="/newUser" element={<NewUser/>} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/product/:productId" element={<NewUser/>} />
          <Route path="/newProduct" element={<NewUser/>} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
