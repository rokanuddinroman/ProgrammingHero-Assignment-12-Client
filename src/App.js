import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Dashboard from "./pages/RegisteredUserPages/Dashboard/Dashboard";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Home from "./pages/PublicPages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/Home/ProductDetail";
import MyOrders from "./pages/NormalUserPages/MyOrders/MyOrders";
import AddReview from "./pages/NormalUserPages/AddReview/AddReview";
import AddProduct from "./pages/AdminUserPages/AddProduct/AddProduct";
import ManageOrders from "./pages/AdminUserPages/ManageOrders/ManageOrders";
import ManageProducts from "./pages/AdminUserPages/ManageProducts/ManageProducts";
import ManageUsers from "./pages/AdminUserPages/ManageUsers/ManageUsers";
import RequireAdmin from "./components/RequireAdmin/RequireAdmin";
import Payment from "./pages/NormalUserPages/Payment/Payment";
import ReviewsPage from "./pages/PublicPages/ReviewsPage/ReviewsPage";
import Blogs from "./pages/PublicPages/Blogs/Blogs";
import MyProfile from "./pages/RegisteredUserPages/MyProfile/MyProfile"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import useAdmin from "./hooks/useAdmin";
import Myportfolio from "./pages/MyPortfolio/Myportfolio";
import About from "./pages/PublicPages/About/About";

function App() {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div>
      <Toaster />
      <div className="relative"><Navbar></Navbar></div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/myportfolio" element={<Myportfolio />}></Route>
        <Route path="/reviews" element={<ReviewsPage />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/reset" element={<ForgetPassword />}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route path="myprofile" element={<MyProfile />}></Route>
          {!admin && <>
            <Route index element={<MyOrders />}></Route>
            <Route path="addreview" element={<AddReview />}></Route>
          </>}
          <Route path="payment/:paymentId" element={<Payment />}></Route>
          {admin && <>
            <Route index element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
            <Route path="manageusers" element={<RequireAdmin><ManageUsers /></RequireAdmin>}></Route>
            <Route path="manageorders" element={<RequireAdmin><ManageOrders /></RequireAdmin>}></Route>
            <Route path="manageproducts" element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
          </>}

        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
