import React, {useState, useEffect} from "react";
import Base from "./Base";

import { loadCart } from "./helper/cartHelper";
import PaymentB from "./PaymentB";


const Checkout = () => {
    const [reload, setReload] = useState(false)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(loadCart());
    }, [reload]);

const loadCheckout = () => {
        return (
            <div>
                <h1>Checkout</h1>
            </div>
        );
    };
    return (

        <div>
        <Base/>
        <br />
        <br />
        
        
                    <div class="container"> 
                       <div class="spec ">
                         <h3>Make your Payment </h3>
                                      <div class="ser-t">
                                        <b/>
                                        <span>
                                          <i/></span>
                                          <b class="line"/>
                        </div>
                    </div>
                    <br />
                    <br />

                    <div>
                        <div className="col-15">
                        <PaymentB products={products} loadCheckout={loadCheckout} setReload={setReload}/>
                        </div>
                    </div>
                    </div>

                    </div>
    );
};
export default Checkout;
