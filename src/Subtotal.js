import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotle } from "./reducer";

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className ="subtotal">
            {/* Price */}

            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            subtotal ({basket.length} items): <strong>{` ${value}`  }</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> this order contains a gift
                        </small>
                    </>
                )}

                decimalScal={2}
                value={getBasketTotle(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
