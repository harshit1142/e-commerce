import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CardActions from '@mui/material/CardActions';

export default function ProductCard({ title, price, img, describe }) {
  const [open, setOpen] = useState(false);

  const handleModalToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Card Layout */}
      <Card
        sx={{ maxWidth: 345, boxShadow: 5, borderRadius: '15px', margin: '20px auto' }} // Updated styles
        className="card-hover"
      >
        <CardActionArea onClick={handleModalToggle}>
          <CardMedia
            component="img"
            height="200" // Adjust this height as needed
            image={img}
            alt={title}
            style={{
              objectFit: 'contain',
              width: '100%',
              borderTopLeftRadius: '15px', // Rounded corners
              borderTopRightRadius: '15px',
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {describe}
            </Typography>
            <Typography variant="h6" color="success.main">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: 'space-between', padding: '16px' }}>
          <Button className="custom-button" size="small" color="primary" onClick={handleModalToggle}>
            More Info
          </Button>
          <Button className="custom-button" size="small" color="error">
            Add to Wishlist
          </Button>
        </CardActions>
      </Card>

      {/* Modal/Dialog */}
      <Dialog open={open} onClose={handleModalToggle} maxWidth="md" fullWidth>
        <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            height="400"
            image={img}
            alt={title}
            style={{
              objectFit: 'contain',
              width: '100%',
              borderRadius: '15px', // Rounded corners for modal image
            }}
          />
          <Typography variant="body1" sx={{ mt: 2 }}>
            {describe}
          </Typography>
          <Typography variant="h5" color="success.main" sx={{ mt: 2 }}>
            {price}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalToggle} className="custom-button" color="primary">
            Close
          </Button>
          <Button className="custom-button" color="primary">
            Chat with Seller
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
