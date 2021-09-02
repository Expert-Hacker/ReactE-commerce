import {useState,React,useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../../src/head_cont.css'
function Header(props) {
    // localStorage.setItem('cartBadgeNo',props.text);
    return (
        <div className="head_cont">            
            <div className="container">
                <div className="left">
                     <li className="logo text-light">SHOP69</li>
                </div>
                <div className="right">
                <ul>
                    <li className="header_links mx-4"><Link className="link" to="/">HOME</Link></li>
                    <Link to="/"><i class="fas cart_icon cart_icon_resp pt-4  text-white fa-2x fa-home"></i></Link>
                    {/* <li className="header_links mx-4"><a className="link" href="#container_id">PRODUCTS</a></li> */}
                    <li className="header_links mx-4"><Link className="link" to="/cart-details">VISIT STORE</Link></li>
                    <Link to="/cart-details"><i className=" cart_icon pt-4  fa-2x fas text-light  fa-shopping-bag"></i>{props.text>=1 ? <span className="badge" id="badge">{props.text}</span> : ""}</Link>
                </ul>               
                </div>
            </div>        
        </div>
    )
   
}
export default Header
