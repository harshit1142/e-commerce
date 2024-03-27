import React, { useState } from 'react'

export default function Card({title,price,img,describe}) {

    const [open,setOpen]=useState(false);
 
  
  return (
    <>
          <div class="product-card">
          
              <button onClick={()=>setOpen(!open)} data-bs-target="#example">
                  <img src={img} alt="Product" />
                  <h5>{title}</h5>
                  <p className='text-gray'>{describe}</p>
                  <p className='price fs-1 text-success'>{price}</p>
              </button>
              <button class="add-to-wishlist btn btn-danger">Add to Wishlist</button>
              <div class={open ? "modal fade show" : "modal fade"} id="example" style={open?{display:"block"}:{display:"none"}} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h6>{title}</h6>
                          <button type="button" onClick={()=>setOpen(!open)} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                              <div class="product-card">
                                  <img src={img} alt="Product" />
                                  
                                  <p>{describe}</p>
                                  <p className='price fs-1 text-success'>{price}</p>
                              </div>
                      </div>
                      <div class="modal-footer">
                              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Add to Wishlist</button>
                          <button type="button" class="btn btn-primary">Chat with Seller</button>
                      </div>
                  </div>
              </div>
          </div>
          </div>
        
         

         
          
    </>
  )
}
