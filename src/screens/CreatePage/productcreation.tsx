import { CloudUpload } from "@mui/icons-material";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import { useState } from "react";
import "../../css/productcreation.css";

export function ProductCreation() {
  /** INITIALIZATIONS **/
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const [imagePreview, setImagePreview] = useState("");

  /** HANDLERS **/
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    console.log("Product Data:", product); // For now, just log the product data
    alert("Product Submitted (Check console for details)");
  };

  return (
    <Container style={{ display: "flex" }}>
      <Stack className="product_creation_page">
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
          {/* Product Name Input */}
          <Box className="input_frame">
            <label>Book title:</label>
            <input
              type="text"
              name="title"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter book title"
              className="input"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </Box>
          <Box className="input_frame">
            <label>Book author:</label>
            <input
              type="text"
              name="author"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter author name"
              className="input"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </Box>
          <Box className="input_frame">
            <label>Print date:</label>
            <input
              type="number"
              name="print data"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter published date"
              className="input"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </Box>
          <Box className="input_frame">
            <label>Amount:</label>
            <input
              type="number"
              name="amount"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter book abount"
              className="input"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </Box>

          {/* Product Price Input */}
          <Box className="input_frame">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Enter book price"
              className="input"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </Box>

          {/* Product Description Input */}
          <Box className="input_frame">
            <label>Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Enter product description"
              rows={3}
              className="textarea"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </Box>
        </Box>
        {/* Submit Button */}
        <Box display="flex" justifyContent={"flex-end"} sx={{ mt: "25px" }}>
          <Button variant="contained" onClick={handleSubmit}>
            Create Product
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
