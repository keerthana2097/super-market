import React, {useState, useEffect} from "react";
import Base from "./Base";
import Card from "./Card";
import Footer from "./Footer";
import CartTotal from "./CartTotal";

import { Link } from "react-router-dom"; 
import { loadCart } from "./helper/cartHelper";

import EmptyCart from "./EmptyCart";
import CartColumns from "./CartColumns";
import CardItem from "./CartItem";

const Cart = () => {
  const [reload, setReload] = useState(false)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(loadCart());
}, [reload]);

const loadAllProducts = (products) => {
    return (
    <div>
      {products.map((product, index) => (
        <Card
          key={index}
          product={product}
          removeFromCart={true}
          addtoCart={false}
          reload={reload}
          setReload={setReload}
        />
      ))}
    </div>
  );
};

const loadCheckout = () => {
    return (
        <div>
            <h1>Checkout</h1>
        </div>
    );
};
return (
  <section>
  
    <div>
        <Base/>
        
        
                    <div class="container"> 
                       <div class="spec ">
                         <h3>My Cart</h3>
                                      <div class="ser-t">
                                        <b/>
                                        <span>
                                          <i/></span>
                                          <b class="line"/>
                        </div>
                    </div>

                    <div>
                    {products.length > 0 ?
                    (
                      <div className="container">

                      
                      <CartColumns />
                      
                      {
                      products.map((product, index) => {
                        return(
                          
                        
                        

                          
                            
                          
                          <div
                          
                          
                           key={index}>
                             
                           <CardItem
                           key={index}  
                           product={product}
                           removeFromCart={true}
                           addtoCart={false}
                           reload={reload}
                           setReload={setReload}/>
                        
                           </div>
                           
                           

                          );
                          })
                          
                          }

                   
                        <br/>
                        <br/>
                        <CartTotal />
                        </div>
                   
                         ):
                          (
                            <EmptyCart/>
                            
                             ) }
                          

                        
                        </div>
                        </div>
                        </div>

                        </section>
                                                 
                    
                                                
                                            
                            
                               
                               
 
);
};


                            
                   

<Footer/>
                                                          


export default Cart;