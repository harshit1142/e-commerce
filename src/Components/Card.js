import React, { useState } from 'react';
import '../App.css';
export default function Card({ title, price, img, describe }) {
  const [open, setOpen] = useState(false);

  const handleModalToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="product-card">
        <button onClick={handleModalToggle} data-bs-target={`#modal-${title}`}>
          <img src={img} alt="Product" />
          <h5>{title}</h5>
          <p className="text-gray">{describe}</p>
          <p className="price fs-1 text-success">{price}</p>
        </button>
        <button className="add-to-wishlist btn btn-danger">Add to Wishlist</button>

        {/* Modal */}
        <div className={open ? "modal fade show" : "modal fade"} 
             id={`modal-${title}`} 
             style={open ? { display: "block" } : { display: "none" }} 
             tabIndex="-1" 
             aria-labelledby="exampleModalLabel" 
             aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-title">{title}</h6>
                <button 
                  type="button" 
                  onClick={handleModalToggle} 
                  className="btn-close" 
                  data-bs-dismiss="modal" 
                  aria-label="Close">
                </button>
              </div>
              <div className="modal-body text-center  dir">
                <img src={img} alt="Product" className="modal-product-image" />
                <p className="product-description">{describe}</p>
                <p className="price fs-1 text-success">{price}</p>
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Add to Wishlist</button>
                <button type="button" className="btn btn-primary">Chat with Seller</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
