import React, { useEffect, useState } from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactPage from "../screens/CreatePage";
import HomePage from "../screens/HomePage";
import { LoginPage } from "../screens/LoginPage";
import { Header } from "../components/header/header";
import { BooksPage } from "../screens/BooksPage";
import AuthentificationModal from "../components/auth";
import { Footer } from "../components/footer";
import MemberApiService from "./asiService/memberApiService";
import { sweetFailureProvider, sweetTopSmallSuccessAlert } from "../lib/sweetAlert";
import { Definer } from "../lib/Definer";
import { CartItem } from "../types/others";
import { Product } from "../types/product";

function App() {
  // INITIALIZATIONS
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [orderRebuild, setOrderRebuild] = useState<Date>(new Date());

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

   const cartJson: any = localStorage.getItem("cart_data");
   const current_cart: CartItem[] = JSON.parse(cartJson) ?? [];
   const [cartItems, setCartItems] = useState<CartItem[]>(current_cart);
  /** HANDLERS */

  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const handleLogOutClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseLogOut = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };
  const handleLogOutRequest = async () => {
    try {
      const memberApiService = new MemberApiService();
      await memberApiService.logOutRequest();
      await sweetTopSmallSuccessAlert("success", 700, true);
    } catch (err: any) {
      console.log(err);
      sweetFailureProvider(Definer.general_err1);
    }
  };

   const onAdd = (product: Product) => {
     console.log("product:", product);
     const exist = cartItems.find((item: CartItem) => item._id === product._id);
     if (exist) {
       const cart_updated = cartItems.map((item: CartItem) =>
         item._id === product._id
           ? { ...exist, quantity: exist.quantity + 1 }
           : item
       );
       setCartItems(cart_updated);
       localStorage.setItem("cart_data", JSON.stringify(cart_updated));
     } else {
       const new_item: CartItem = {
         _id: product._id,
         quantity: 1,
         name: product.product_name,
         price: product.product_price,
         image: product.product_images[0],
       };
       const cart_updated = [...cartItems, { ...new_item }];
       setCartItems(cart_updated);
       localStorage.setItem("cart_data", JSON.stringify(cart_updated));
     }
   };
   const onRemove = (item: CartItem) => {
     const item_data: any = cartItems.find(
       (ele: CartItem) => ele._id === item._id
     );
     if (item_data.quantity === 1) {
       const cart_updated = cartItems.filter(
         (ele: CartItem) => ele._id !== item._id
       );
       setCartItems(cart_updated);
       localStorage.setItem("cart_data", JSON.stringify(cart_updated));
     } else {
       const cart_updated = cartItems.map((ele: CartItem) =>
         ele._id === item._id
           ? { ...item_data, quantity: item_data.quantity - 1 }
           : ele
       );
       setCartItems(cart_updated);
       localStorage.setItem("cart_data", JSON.stringify(cart_updated));
     }
   };
   const onDelete = (item: CartItem) => {
     const cart_updated = cartItems.filter(
       (ele: CartItem) => ele._id !== item._id
     );
     setCartItems(cart_updated);
     localStorage.setItem("cart_data", JSON.stringify(cart_updated));
   };
   const onDeleteAll = () => {
     setCartItems([]);
     localStorage.removeItem("cart_data");
   };
  return (
    <Router>
      {
        <Header
          setPath={setPath}
          handleSignupOpen={handleSignupOpen}
          handleLoginOpen={handleLoginOpen}
          anchorEl={anchorEl}
          open={open}
          handleLogOutClick={handleLogOutClick}
          handleCloseLogOut={handleCloseLogOut}
          handleLogOutRequest={handleLogOutRequest}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          setOrderRebuild={setOrderRebuild}
        />
      }

      <Switch>
        <Route path="/books">
          <BooksPage onAdd={onAdd} />
        </Route>
        <Route path="/create">
          <ContactPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
      <AuthentificationModal
        loginOpen={loginOpen}
        handleLoginOpen={handleLoginOpen}
        handleLoginClose={handleLoginClose}
        signupOpen={signupOpen}
        handleSignupOpen={handleSignupOpen}
        handleSignupClose={handleSignupClose}
      />
    </Router>
  );
}
export default App;
