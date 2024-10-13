import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CardActions from "@mui/material/CardActions";

export default function ProductCard({ id, val, title, price, img, describe, isInWishList, isInCart, handleWishList,handleCart}) {
  const [open, setOpen] = useState(false);
  // console.log(val);
  const handleModalToggle = () => {
    setOpen(!open);
  };
  // const handleAddToCart = () => {
  //   const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  //   const newItem = { id, title, price, img, describe };
  //   const updatedCartItems = [...cartItems, newItem];
  //   localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  //   alert("Product added to cart!");
  // };

  return (
    <>
      {/* Card Layout */}
      <Card
        sx={{
          maxWidth: 400,
          boxShadow: 5,
          borderRadius: "15px",
          margin: "20px auto",
          padding: "30px 25px",
        }} // Updated styles
        className="card-hover"
      >
        <CardActionArea onClick={handleModalToggle}>
          <CardMedia
            component="img"
            height="120" // Adjust this height as needed
            image={img}
            alt={title}
            style={{
              objectFit: "contain",
              width: "100%",
              borderTopLeftRadius: "15px", // Rounded corners
              borderTopRightRadius: "15px",
            }}
          />
          <CardContent sx={{height: "200px"}}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                height: "80px",
                overflow: "hidden",
                mb: 1, 
                textOverflow: "ellipsis", 
                display: "-webkit-box", 
                WebkitLineClamp: 4, // Limit to 4 lines of text
                WebkitBoxOrient: "vertical", 
              }}
            >
              {describe}
            </Typography>
            <Typography variant="h6" color="success.main">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: "space-between", padding: "16px" }}>
          {/* <Button
            className="custom-button"
            size="small"
            color="primary"
            onClick={handleModalToggle}
          >
            More Info
          </Button> */}
          <button className="btngg addmore" onClick={handleModalToggle}>
            More Info
          </button>
          {/* <Button className="custom-button" size="small" color="error">
            Add to Wishlist
          </Button> */}
          <button
            className="btngg  addwhis"
            onClick={() => {handleWishList({id, title, price, img, describe})}}
            // style={{
            //   background: "green",
            // }}
          >
            {
              isInWishList ? 'Remove' : 'Add to Wishlist'
            }
          </button>
          <button
            className="btngg addcart"
            onClick={() => {handleCart({id, title, price, img, describe})}}
            // style={{ background: "blue" }}
          >
            { isInCart ? 'Remove from Cart' : 'Add to Cart' }
          </button>
        </CardActions>
      </Card>

      {/* Modal/Dialog */}
      <Dialog open={open} onClose={handleModalToggle} maxWidth="md" fullWidth>
        <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            height="250"
            image={img}
            alt={title}
            style={{
              objectFit: "contain",
              width: "100%",
              borderRadius: "15px", // Rounded corners for modal image
            }}
          />
          <b>Details:</b>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {describe}
          </Typography>
          <br />
          <b>Price:</b>
          <Typography variant="h5" color="success.main" sx={{ mt: 2 }}>
            {price}
          </Typography>
        </DialogContent>
        <DialogActions>
          {/* <Button
            onClick={handleModalToggle}
            className="custom-button"
            color="primary"
          >
            Close
          </Button> */}
          {/* <Button className="custom-button" color="primary">
            Chat with Seller
          </Button> */}
          <button
            className="custom-button"
            onClick={handleModalToggle}
            style={{
              marginBottom: "10px",
            }}
          >
            Close
          </button>
          <button
            className="custom-button"
            onClick={handleModalToggle}
            style={{ backgroundColor: "#3c91e6", marginBottom: "10px" }}
          >
            Chat with Seller
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}
