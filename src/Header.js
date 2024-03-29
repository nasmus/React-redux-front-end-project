import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';


function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () =>{
        if(user) {
            auth.signOut();
        }
        else{

        }
    }

    

    return (
        <div className ="header">
            {/* logo in left */}

            <Link to="/">
                <img
                    className ="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            {/* Search box */}

            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon type="text" className="header__searchIcon" />
            </div>

            {/* 3 links */}

            <div className="header__nev">
                {/* 1st link */}

                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email} </span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out':'Sign in'}</span>
                    </div>
                </Link>

                {/* 2nd link */}

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3ed link */}

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th link */}


                <Link to="/chackout" className="header__link">
                    <div className="header__optionBasket">

                        {/* Shopping basket icon */}

                        <ShoppingBasketIcon />

                        {/* number of items in the basket */}

                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>


            </div>
            {/* basket icon with number */}
        </div>
    )
}

export default Header
