import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart,  removeItemFromCart} from "./helper/cartHelper";
import { isAuthenticated } from "../auth/helper";


const CardItem = ({
  id,
  product,
  increment,
  decrement,
  count,
  addtoCart = true,
  removeFromCart = false,
  reload = undefined,
  setReload = f => f,
  //function(f) {return f}
}) => {
  const [redirect, setRedirect] = useState(false);
  const [itemCount, setItemCount] = React.useState(1);

  const cardTitle = product ? product.name : "A photo from pexels";
  const cartDescription = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "Default price";
  const ItemTotal = itemCount * cartPrice;

    const addToCart = () => {
      if (isAuthenticated()) {
        addItemToCart(product, ()=> setRedirect(true));
        console.log("Added to cart");
      } else {
        console.log("login Please!");
        alert("please login to continue shopping")
      }
    };

    const getAredirect = redirect => {
      if (redirect) {
        return <Redirect to="/cart" />;
      }
    };

    const showAddToCart = (addToCart) => {
      return(
        addtoCart && (
          <button
            onClick={addToCart}
            className="btn btn-warning aab"
          >
            Add to Cart
          </button>
        )
      );
    };

   
     
    
    
    const showRemoveFromCart = (removeFromCart) => {
      return(
        removeFromCart && (
          <div
            onClick={() => {
              
              //TODO : Handle this too
              removeItemFromCart(product.id);
              setReload(!reload)
              console.log("Product removed from cart");
            }}
            >
            <i className="fa fa-trash"></i>
          </div>
        )
      );
    }
    
    return (
      <div>
          <div className="row my-2 text-capitlize text-center">
            <div className="col-10 mx-auto col-lg-2">
            {getAredirect(redirect)}
          <ImageHelper   product={product} style={{width:"5rem", height:"5rem"}}
          className="img-fluid" alt="product"/>
          </div>
          <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product :</span>
                {cardTitle}
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product :</span>
                {cartPrice}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    
                    
                    <div>
                        <span className="btn btn-warning btnModel" onClick={()=>{setItemCount(Math.max(itemCount - 1, 0));}}>-</span>
                        <span className="btn btn-black mx-1">{itemCount}</span>
                        
                        <span className="btn btn-warning btnModel" onClick={()=>{setItemCount(itemCount + 1, 0);}}>+</span>
                        
                    </div>
                    </div>
          
                    </div>
          
          
            <div className="col-10 mx-auto col-lg-2"> 
            {showRemoveFromCart(removeFromCart)}
                
              </div>
              
              <div className="col-10 mx-auto col-lg-2">
                  <strong>Item total :{ItemTotal}</strong>
              </div>
              </div>
              </div>
              
            
      );
    }
    
  export default CardItem;