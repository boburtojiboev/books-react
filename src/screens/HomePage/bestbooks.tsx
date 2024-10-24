import React from "react";
import {Container, Stack } from "@mui/material";
import { useHistory } from "react-router-dom";

export function BestBooks() {
    const history = useHistory();
  const checkProductsHandler = () => {
    history.push(`/books/`);
  };
  return (
    <div className="best_product_frame">
      <Container sx={{ mt: "20px", mb: "40px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <h1 className="category_title">이것은 저의 프로젝트입니다</h1>
          <span className="category_title">
            버튼을 클릭하고 책을 확인하세요
          </span>
          <button onClick={() => checkProductsHandler()}>check</button>
        </Stack>
      </Container>
    </div>
  );
}