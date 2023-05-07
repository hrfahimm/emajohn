import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import OrderReview from "./Components/OrderReview/OrderReview";
import NotFound from "./Components/NotFound/NotFound";
import Inventory from "./Components/Inventory/Inventory";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PleaceOrder from "./Components/PleaceOrder/PleaceOrder";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import AuthProvider from "./context/AuthProvider";
//import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/review" element={<OrderReview />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/pleaceorder" element={<PleaceOrder />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
