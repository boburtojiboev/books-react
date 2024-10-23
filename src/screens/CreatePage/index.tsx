import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { NavbarOther } from "../../components/header/others";
import { ProductCreation } from "./productcreation";
import { ProductEdit } from "./editproduct";
function CreatePage() {
  let books = useRouteMatch();
  return (
    <div>
      <NavbarOther />
      <Switch>
        <Route path={`${books.path}/:book_id`}>
          <ProductEdit />
        </Route>
        <Route path={`${books.path}`}>
          <ProductCreation />
        </Route>
      </Switch>
    </div>
  );
}
export default CreatePage;
