import { CloudUpload } from "@mui/icons-material";
import { Box, Button, Container, Stack } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import "../../css/productcreation.css";
import { serverApi } from "../../lib/config";

export function ProductCreation() {
  /** INITIALIZATIONS **/
  const [product, setProduct] = useState({
    product_name: "",
    product_author: "",
    product_price: "",
    product_cnt: "",
    product_images: "",
  });

  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);

  /** HANDLERS **/
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    setProduct({ ...product, product_images: file });
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    setLoading(true);

    // Prepare form data for submission (for handling file uploads)
    const formData = new FormData();
    formData.append("product_name", product.product_name);
    formData.append("product_author", product.product_author);
    formData.append("product_price", product.product_price);
    formData.append("product_cnt", product.product_cnt);
    formData.append("product_image", product.product_images);

    try {
      const url = `${serverApi}/createpro`; 
      const result = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
        withCredentials: true, 
      });

      console.log("Product Created:", result.data);
      alert("Product Created Successfully!");
      setProduct({
        product_name: "",
        product_author: "",
        product_price: "",
        product_cnt: "",
        product_images: "",
      });
      setImagePreview("");
    } catch (err: any) {
      console.error("Error creating product:", err.message);
      alert("Failed to create product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container style={{ display: "flex" }}>
      <Stack className="product_creation_page">
        <h1>Create product</h1>
        {/* Image Upload Section */}
        <Box className="product_media_frame">
          <img
            src={imagePreview || "/img/book.png"}
            alt="Product"
            className="product_image"
            width={"100px"}
            height={"100px"}
            style={{ borderRadius: "10%" }}
          />
          <div className="media_change_box">
            <span>Upload Product Image</span>
            <p>You can only upload JPG, JPEG, PNG formats!</p>
            <Button
              component="label"
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "yellowgreen",
              }}
            >
              <CloudUpload />
              <input type="file" hidden onChange={handleImageUpload} />
            </Button>
          </div>
        </Box>

        <Box className="productss_right">
          <Box className="input_frame">
            <label>Book title:</label>
            <input
              type="text"
              name="product_name"
              value={product.product_name}
              onChange={handleChange}
              placeholder="Enter book title"
              className="input"
            />
          </Box>
          <Box className="input_frame">
            <label>Book author:</label>
            <input
              type="text"
              name="product_author"
              value={product.product_author}
              onChange={handleChange}
              placeholder="Enter author name"
              className="input"
            />
          </Box>
          <Box className="input_frame">
            <label>Number of Book:</label>
            <input
              type="number"
              name="product_cnt"
              value={product.product_cnt}
              onChange={handleChange}
              placeholder="Enter book amount"
              className="input"
            />
          </Box>
          <Box className="input_frame">
            <label>Book Price:</label>
            <input
              type="number"
              name="product_price"
              value={product.product_price}
              onChange={handleChange}
              placeholder="Enter book price"
              className="input"
            />
          </Box>
        </Box>

        {/* Submit Button */}
        <Box display="flex" justifyContent={"flex-end"} sx={{ mt: "25px" }}>
          <Button variant="contained" onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Create Product"}
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}

