import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { AllBooks } from "./booklist";
import { OneBook } from "./oneBook";
import { NavbarOther } from "../../components/header/others";
import "../../css/books.css";


export function BooksPage() {
  let books = useRouteMatch();
  return (
    <div className="books_page">
      <NavbarOther/>
      <Switch>
        <Route path={`${books.path}/:product_id`}>
          <OneBook />
        </Route>
        <Route path={`${books.path}`}>
          <AllBooks />
        </Route>
      </Switch>
    </div>
  );
}
