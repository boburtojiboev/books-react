import React from "react";
import "../css/App.css";
import { Container,} from "@mui/material";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BooksPage from "../screens/BooksPage";
import ContactPage from "../screens/ContactPage";
import HomePage from "../screens/HomePage";
import { LoginPage } from "../screens/LoginPage";




function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/books">
            <BooksPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
