import React from 'react'
import logo from  "../../icons/algebra_crown.svg";
import basket from "../../icons/shopping-bag.svg";
import "./Header.css";
import {auth} from '../../firebase-config'


class Header extends React.Component {

    SignOut() {
        auth.signOut();
        localStorage.clear();
        this.render();
    }

    render() {
        return (
            <div className="header">
                <div>
                    <a href="/"><img className='header_logo' src={logo} alt="" /></a>
                </div>
    
                <div className="header_right">
                    <a className="link" href="/AlgebraShop">ALGEBRA SHOP</a>    
                    {localStorage.getItem('user') ? 
                    (<a className="link" onClick = {() => this.SignOut()} href="/Login">SIGN OUT</a>) 
                    : 
                    (<a className="link" href="/Login">SIGN IN</a>)}           
                    <div><a className="link" href="/ShoppingBag"><img className='header_basket' src={basket} alt="" /></a></div>
                </div>

                
    
            </div>
        )
    }

}

export default Header;