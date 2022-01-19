import React from "react";
import "../components/navbar.css";
import "./css/pricing.css";

const Pricing = () => (
  
    <div class="background">
      <div class="container">
        <div class="panel pricing-table">

          <div class="pricing-plan">
            <img src="https://cdn.discordapp.com/attachments/768454494995611669/915526369323143198/fast-food.png" alt="" class="pricing-img"></img>
            <h2 class="pricing-header">Occasional</h2>
            <ul class="pricing-features">
             
            </ul>
            
            <span class="pricing-price">Basic</span>
            <a href="#/" class="pricing-button">Create an account</a>
          </div>

          <div class="pricing-plan">
            <img src="https://cdn.discordapp.com/attachments/768454494995611669/915526885339967498/drone.png" alt="" class="pricing-img"></img>
            <h2 class="pricing-header">Monthly</h2>
            <ul class="pricing-features">
              <li class="pricing-features-item">No shipping cost </li>
              
            </ul>
            <span class="pricing-price">$9.99</span>
            <a href="#/" class="pricing-button is-featured">Free trial</a>
          </div>

          <div class="pricing-plan">
            <img src="https://cdn.discordapp.com/attachments/768454494995611669/915526506606899230/food-truck.png" alt="" class="pricing-img"></img>
            <h2 class="pricing-header">Annual</h2>
            <ul class="pricing-features">
              <li class="pricing-features-item">No shipping cost </li>
              <li class="pricing-features-item">1 free command under $20 every trimester</li>
            </ul>
            <span class="pricing-price">$88.99</span>
            <a href="#/" class="pricing-button">Sign up</a>
          </div>

        </div>
      </div>
    </div>

 
);

export default Pricing;