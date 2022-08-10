import React from 'react'
import Navbar from "./Navbar";
import Sidebar from './Sidebar';
import {NavLink} from "react-router-dom";

function Products() {
  return (
    <div className='wrapper'>
        <Navbar />
        <div className="main">
          <Sidebar />
          <div className="product-content">
            <div className="body">
              <div className="search-bar">
                <img src="/icons/SEARCH.svg" alt="search" />
                <input type="text" placeholder='Search Here...' />
              </div>
              <div className="categories">
                <NavLink to="/">All</NavLink>
                <NavLink to="food">Food</NavLink>
                <NavLink to="drinks">Drinks</NavLink>
                <NavLink to="snacks">Snacks</NavLink>
                <NavLink to="packages">Packages</NavLink>
              </div>
              <h2>Food</h2>
              <div className="products">
                <div className="product-card">
                  <div></div>
                  <h4>Sashimi</h4>
                  <span>$22</span>
                </div>
                <div className="product-card">
                  <div></div>
                  <h4>Unagi - Grilled Eel</h4>
                  <span>$22</span>
                </div>
                <div className="product-card">
                  <div></div>
                  <h4>Soba - Buckwheat Noodles</h4>
                  <span>$22</span>
                </div>
                <div className="product-card">
                  <div></div>
                  <h4>Onigiri - Riceballs</h4>
                  <span>$22</span>
                </div>
                <div className="product-card">
                  <div></div>
                  <h4>Yakitori - Grilled Chicken</h4>
                  <span>$22</span>
                </div>
                <div className="product-card">
                  <div></div>
                  <h4>Miso Soup</h4>
                  <span>$22</span>
                </div>
              </div>
              <h2>Drinks</h2>
              <div className="products">
                <div className="product-card">
                  <div></div>
                  <h4>Amazake</h4>
                  <span>$22</span>
                </div>
                <div className="product-card">
                  <div></div>
                  <h4>Royal Milk Tea</h4>
                  <span>$22</span>
                </div>
                <div className="product-card">
                  <div></div>
                  <h4>Flavored Soymilk Drink</h4>
                  <span>$22</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Products