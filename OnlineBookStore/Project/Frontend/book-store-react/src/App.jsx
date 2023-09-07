import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import BookGallery from "./components/book";
import Book from "./components/bookDetails";
import Author from "./components/authorDetails";
import Footer from "./components/footer";
import Header from "./components/header";
import "./styles/style.css";
import Login from "./components/login";
import Faq from "./components/faq";
import AboutUs from "./components/aboutUs";
import PaymentHelp from "./components/paymentHelp";
import ContactUs from "./components/contactUs";
import Register from "./components/register";
import Cart from "./components/cart";
import Logout from "./components/logout";
import MyProfile from "./components/profile";
import Address from "./components/address/addresses";
import AddAddress from "./components/address/addAddress";
import EditAddress from "./components/address/editAddress";
import Dashboard from "./components/dashboard";
import BestSelling from "./components/bestselling";
import CarouselBooks from "./components/carouselBooks";
import Test from "./components/test";
import ScienceBooks from "./components/scienceFriction";
import AdminDashboard from "./components/admin/admin";
import AdminHeader  from "./components/admin/adminHeader";
import Order from './components/order/order';
import PlaceOrder from "./components/order/placeOrder";
import MakePayment from "./components/order/makePayment";
import AdminShowBooks from "./components/admin/adminShowBooks";
import UpdateBook from "./components/admin/updateForm";
import AdminAddBook from "./components/admin/adminAddBook";
import Search from "./components/Search";


function App() {

  const token = useSelector((state) => state.auth.token);
  console.log(token)
  const role = useSelector((state) => state.user.role);
  if (role === "ROLE_ADMIN") {

    return (
      <>
      <AdminHeader/>
        <Routes>
            <Route exact path="/admin" element={<AdminDashboard/>}/>
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/adminShowBooks" element={<AdminShowBooks />} />
            <Route exact path="/updateBookForm" element={<UpdateBook />} />
            <Route exact path="/adminAddBook" element={<AdminAddBook />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </>
    );

   
  } else {
    return (
      <>
        <Header />
        <Routes>

          {token !== null ? (
            <>
              <Route exact path="/userProfile" element={<MyProfile />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/address" element={<Address />} />
              <Route exact path="/add_address" element={<AddAddress />} />
              <Route exact path="/address/edit" element={<EditAddress />} />
              {/* Other routes */}
            </>
          ) : (
            <>
              <Route exact path="/userProfile" element={<Login />} />
              <Route exact path="/cart" element={<Login />} />
              <Route exact path="/address" element={<Login />} />
              <Route exact path="/address/edit" element={<Login />} />
              {/* Other routes */}
            </>
          )}

          <Route exact path="/scienceBooks" element={<ScienceBooks />} />
          <Route exact path="/test" element={<Test />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/carouselBooks" element={<CarouselBooks />} />
          <Route exact path="/bestSelling" element={<BestSelling />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/allBooks" element={<BookGallery />} />
          <Route exact path="/bookDetails" element={<Book />} />
          <Route exact path="/authorDetails" element={<Author />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/about_us" element={<AboutUs />} />
          <Route exact path="/payment_help" element={<PaymentHelp />} />
          <Route exact path="/contact_us" element={<ContactUs />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/order" element={<Order />}></Route>
          <Route exact path="/placeOrder" element={<PlaceOrder />}></Route>
          <Route exact path="/make_payment" element={<MakePayment />}></Route>
          <Route exact path="/search" element={<Search/>}/>
        </Routes>
        <ToastContainer />
        <Footer />
      </>
    );
  } 
}

export default App;