import "./app.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { PageRoutes } from "./PageRoutes";

function App() {
  const rootData = JSON.parse(localStorage.getItem("persist:root"));
  const user =
    rootData && rootData.user ? JSON.parse(rootData.user).currentUser : null;
  const isAdmin = user ? user.isAdmin : false;
  return (
    <Routes>
      {isAdmin ?(
        <>
          <Route path="/*" element={<PageRoutes />} />
        </>
      ): <Route path="/login" />}
      
        <Route path="/login" element={<Login />} />
     
      
    </Routes>
  );
}

export default App;
