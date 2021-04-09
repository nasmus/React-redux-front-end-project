import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className ="home">
             <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/HI_EN/1500x600_Hero-Tall_NP._CB660043011_.jpg"
             />

             {/* Product id, tital, price, ration, image */}
             <div className="home__row">
                <Product
                    id="1234567"
                    title="The lean startup: how to constant innovation The lean startup: how to constant innovation The lean startup: how to constant innovation "
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_SX679_.jpg"
                />
                <Product
                    id="1234567"
                    title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red how to constant innovation The lean startup: how to constant innovation"
                    price={64.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL.jpg"
                />    
             </div>
             
             {/* Product */}
             <div className="home__row">
                
                <Product
                    id="1234567"
                    title="The lean startup: how to constant innovation The lean startup: how to constant innovation The lean startup: how to constant innovation "
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product
                    id="1234569"
                    title="The lean startup: how to constant innovation The lean startup: how to constant innovation The lean startup: how to constant innovation "
                    price={11.96}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
                />

                <Product
                    id="1234567"
                    title="YONEX Astrox 100 ZZ Badminton Racket (Dark Navy)(3UG5)(Unstrung)YONEX Astrox 100 ZZ Badminton Racket (Dark Navy)(3UG5)(Unstrung) "
                    price={225}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51XOBVxLk4L._AC_UL320_.jpg"
                />    
             </div>

             <div className="home__row">
             <Product
                    id="1234567"
                    title="The lean startup: how to constant innovation The lean startup: how to constant innovation The lean startup: how to constant innovation "
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_SX679_.jpg"
                /> 
                <Product
                    id="1234567"
                    title="The lean startup: how to constant innovation The lean startup: how to constant innovation The lean startup: how to constant innovation "
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_SX679_.jpg"
                />
             </div>

        </div>
        
    )
}

export default Home;
