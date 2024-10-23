import React, { useState } from "react";
import { Box, Button, Checkbox, Container, Stack } from "@mui/material";
import { Close, Home, RemoveRedEye } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import ReactImageMagnify from "react-image-magnify";
import { useHistory } from "react-router-dom";

export function OneBook(props: any) {
  const history = useHistory();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="chosen_product_page">
      <Container className="product_container">
  
            <img
              src="/shops/sneakers.jpg"
              className="img_selected"
              alt="product"
            />

        <Stack className="chosen_product_info_container">
          <Box className="chosen_product_info_box">
            <span className="shop_name">Book name: Business in 1years</span>
            <span className="shop_name">Author: Hanry</span>
            <span className="shop_name">Print date: 2023</span>
            <span className="shop_name">quantaty of sold:  95</span>
            <div className="produt_desc_bottom">
              <div className="bottom_price">
                <div className="pro_price_box">
                  <span>Price:</span>
                  <span>$11</span>
                </div>
                <div className="bottom_box">
                  <Button
                    style={{ backgroundColor: "#f0b512;" }}
                    variant="contained"
                  >
                    Add to box
                  </Button>
                </div>
              </div>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
