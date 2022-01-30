import React from 'react'
import "./navbar.css"
import StoreIcon from '@material-ui/icons/Store';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

export default function navbar() {
    return (
        <nav className="navbar">
              <div className="nar_bar">
    <div className="nav_bar">
      <div className="nav-left">
        
        <div className="brand">
          Mall Offer
        </div>
        <div className="nav_search_desk">
          <form action="#" method="get">
            <input type="text" name="search_for" placeholder="Search here............" />
            <button className="search_button">
              <i className="fa fa-search"></i>
            </button>
          </form>
          
        </div>
        
      </div>
      
     
      <div className="nav-right">
        <div className="nav-right-items">
          <div className="search-mob">
            <a href="/search"></a>
          </div>
          <div className="user-desktop">
            <span><a href="/user"><PersonOutlineOutlinedIcon /></a></span>
            <p>User</p>
          </div>
          <div className="user-desktop">
            <span><a href="/favorite"><StoreIcon /></a></span>
            <p>Whislist</p>
          </div>
          <div className="user-desktop">
            <span><a href="/cart"> <LocalOfferIcon />  </a></span>
            <p>Bag</p>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
        </nav>
    )
}
