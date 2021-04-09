import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout" >
            <img 
                className="checkout__ad"
                
            />
            
            {basket?.length === 0 ? (
                <div>
                    <h2 className="checkout__title">Your Basket is Empty</h2>
                    
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">your shopping Basket</h2>
                    
                    {/* list out all of the checkout product */}
                    {basket.map((item) => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
            {basket.length > 0 && (
                <div className ="checkout__right">                    
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout;
