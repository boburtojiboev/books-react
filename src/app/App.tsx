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

function App() {
  // INITIALIZATIONS
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [orderRebuild, setOrderRebuild] = useState<Date>(new Date());

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

    // const cartJson: any = localStorage.getItem("cart_data");
    // const current_cart: CartItem[] = JSON.parse(cartJson) ?? [];
    // const [cartItems, setCartItems] = useState<CartItem[]>(current_cart);
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
          // cartItems={cartItems}
          // onAdd={onAdd}
          // onRemove={onRemove}
          // onDelete={onDelete}
          // onDeleteAll={onDeleteAll}
          setOrderRebuild={setOrderRebuild}
        />
      }

      <Switch>
        <Route path="/books">
          <BooksPage />
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
