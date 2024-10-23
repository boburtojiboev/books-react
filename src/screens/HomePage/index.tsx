import React from "react";
import { Container } from "@mui/material";
import { NavbarBooks } from "../../components/header/books";
import { BestBooks } from "./bestbooks";

function HomePage() {
  return (
    <div>
      <NavbarBooks/>
      <BestBooks/>
    </div>
  );
}
export default HomePage;
