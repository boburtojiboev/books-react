import React from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import ContactPage from "../screens/CreatePage";
import HomePage from "../screens/HomePage";
import { LoginPage } from "../screens/LoginPage";
import { Header } from "../components/header/header";
import { BooksPage } from "../screens/BooksPage";
import AuthentificationModal from "../components/auth";
import { Footer } from "../components/footer";


function App() {
  return (
    <Router>
      {<Header />}

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
      <Footer/>
      <AuthentificationModal />
    </Router>
  );
}
export default App;
