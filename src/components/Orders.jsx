import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Orders() {
  return (
    <div className='wrapper'>
        <Navbar />
        <div className="main">
            <Sidebar />
            <div className="order-content">
              <div className="stats-container">
                <div className="stats">
                  <div className="title">
                    <h4>Customer</h4>
                    <h4>1000</h4>
                  </div>
                  <div className="stats-info" id='red'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m10 16-6-6 1.062-1.062 4.188 4.187V4h1.5v9.125l4.188-4.187L16 10Z"/></svg>
                    <h4>-15%</h4>
                  </div>
                </div>
                <div className="stats">
                  <div className="title">
                    <h4>Orders</h4>
                    <h4>1050</h4>
                  </div>
                  <div className="stats-info">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M9.25 16V6.875l-4.188 4.187L4 10l6-6 6 6-1.062 1.062-4.188-4.187V16Z"/></svg>
                    <h4>+20%</h4>
                  </div>
                </div>
                <div className="stats">
                  <div className="title">
                    <h4>Revenue</h4>
                    <h4>$50.000</h4>
                  </div>
                  <div className="stats-info">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M9.25 16V6.875l-4.188 4.187L4 10l6-6 6 6-1.062 1.062-4.188-4.187V16Z"/></svg>
                    <h4>+20%</h4>
                  </div>
                </div>
                <div className="stats">
                  <div className="title">
                    <h4>Net Profit</h4>
                    <h4>$12.000</h4>
                  </div>
                  <div className="stats-info">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M9.25 16V6.875l-4.188 4.187L4 10l6-6 6 6-1.062 1.062-4.188-4.187V16Z"/></svg>
                    <h4>+20%</h4>
                  </div>
                </div>
              </div>
              <div className="body-container">
                <div className="orders">
                  <h3>Latest Orders</h3>
                  <table>
                    <tr>
                      <th>No.</th>
                      <th>Item</th>
                      <th>Quality</th>
                      <th>Revenue</th>
                      <th>Net Profit</th>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>Sashimi</td>
                      <td>30</td>
                      <td>$293.01</td>
                      <td>$710.68</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>Unagi - Grilled Eel</td>
                      <td>30</td>
                      <td>$739.65</td>
                      <td>$779.58</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>Soba - Buckwheat Noodles</td>
                      <td>30</td>
                      <td>$779.58</td>
                      <td>$105.55</td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>Onigiri - Rice balls</td>
                      <td>30</td>
                      <td>$589.99</td>
                      <td>$475.22</td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>Sashimi</td>
                      <td>30</td>
                      <td>$406.27</td>
                      <td>$767.50</td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>Yakitori - Grilled Chicken</td>
                      <td>30</td>
                      <td>$396.84</td>
                      <td>$948.55</td>
                    </tr>
                    <tr>
                      <td>07</td>
                      <td>Royal Milk Tea</td>
                      <td>30</td>
                      <td>$767.50</td>
                      <td>$106.58</td>
                    </tr>
                    <tr>
                      <td>08</td>
                      <td>Flavored Soymilk Drinks</td>
                      <td>30</td>
                      <td>$778.35</td>
                      <td>$778.35</td>
                    </tr>
                  </table>
                </div>
                <div className="items-sold">
                  <div className="item-title">
                    <h4>Items Sold</h4>
                    <button>Best Seller</button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m10 13.062-5-5L6.062 7 10 10.938 13.938 7 15 8.062Z"/></svg>
                  </div>
                  <div className="items">
                    <div></div>
                    <h4>Sashimi</h4>
                    <p>430 Items</p>
                  </div>
                  <div className="items">
                    <div></div>
                    <h4>Unagi - Grilled Eel</h4>
                    <p>200 Items</p>
                  </div>
                  <div className="items">
                    <div></div>
                    <h4>Soba - Buckwheat Noodles</h4>
                    <p>180 Items</p>
                  </div>
                  <div className="items">
                    <div></div>
                    <h4>Onigiri - Rice Balls</h4>
                    <p>120 Items</p>
                  </div>
                  <div className="items">
                    <div></div>
                    <h4>Yakitori - Grilled Chicken</h4>
                    <p>80 Items</p>
                  </div>
                  <div className="items">
                    <div></div>
                    <h4>Royal Milk Tea</h4>
                    <p>70 Items</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Orders