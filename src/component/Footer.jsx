import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer>
        <div class="foot-container">
            <div>
                <div>
                    <span class="M">Tech-Shop</span>
                </div>
                    <p>Subscribe to our Email alerts to recieve early discount offers, and mew products info.</p>
                    <input class="tech-place text-white" type="email" placeholder="Email Address*"/><br/>
                    <button class="subs-but">Subscribe</button>
            </div>
            <div class="m2">
                <ul type="none">
                    <h5 className='text-white'>Help</h5>
                    <a class="foot-cont" href="">
                        <li>FAQs</li>
                        <li>Track Order</li>
                        <li>Cancel Order</li>
                        <li>Return Order</li>
                        <li>Warranty Info</li>
                    </a>
                </ul>
            </div>
            <div class="m3">
                <ul type="none">
                    <h5 className='text-white'>Policies</h5>
                    <a class="foot-cont" href="">
                        <li>Return Policy</li>
                        <li>Security</li>
                        <li>Sitemap</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </a>
                </ul>
            </div>
            <div class="m4">
                <ul type="none">
                    <h5 className='text-white'>Company</h5>
                    <a class="foot-cont" href="">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Service Centres</li>
                        <li>Careers</li>
                        <li>Affiliates</li>
                    </a>
                </ul>
            </div>
        </div><hr style={{width: "100%"}}/>
        <div class="foot-bot">
            <span className='text-white'>2025 | All Rights Reserved. Built by | Balaji Sankarapu</span>
            <div class="foot-icns">
                <a href="" style={{textDecorationColor: "none"}}>
                    <img class="icons" style={{width: "30px"}} src="./Images/facebook.png" alt=""/>
                    <img class="icons" style={{width: "30px"}} src="./Images/twitter.png" alt=""/>
                    <img class="icons" style={{width: "30px"}} src="./Images/instagram.png" alt=""/>
                    <img class="icons" style={{width: "30px",marginRight: "20px"}}  src="./Images/linkedin.png" alt=""/>
                </a>
            </div>
        </div>
    </footer>
    </div>
  )
}
