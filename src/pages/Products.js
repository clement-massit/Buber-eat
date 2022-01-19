import React from "react";
import "../components/navbar.css";
import "./css/products.css";

import Button from '../components/button';


const Product = () => (

  <div class="background">

    <div class="flexbox">

      <div class="food-card">

        <img class="background-image" src="https://assets.afcdn.com/recipe/20161216/61596_w1024h768c1cx2808cy1872.webp"></img>
        <div class="food-card-content">

          <div class="heading show">
            <h2>Burger double steak cheddar</h2>
            <div>
              <Button>Order</Button>
            </div>

            <div class="shadow"></div>
          </div>
          <div class="heading author show">
            <h5>By <a class="profile">Buber eat</a></h5>
            <div class="shadow"></div>
          </div>
          <div class="hover-content">




            <div class="food-card-properties">

              <div><i class="fa fa-clock-o"></i><p>5 min</p></div>
              <div><i class="fa fa-star" ></i><p>4.2(121 votes)</p></div>
              <div><i class="fa fa-money"></i><p>$ 20</p></div>
            </div>

          </div>
        </div>
      </div>


      <div class="food-card" >

        <img class="background-image" src="https://media.gqmagazine.fr/photos/5d8b7254c7191e00083ebdbb/4:3/w_1440,h_1080,c_limit/como%20hacer%20la%20mejor%20pizza%20del%20mundo.jpg"></img>
        <div class="food-card-content">
          <div class="heading show">
            <h2>Pizza</h2>
            <div>
              <Button>Order</Button>
            </div>
            <div class="shadow"></div>
          </div>
          <div class="heading author show">
            <h5>By Buber eat</h5>
            <div class="shadow"></div>
          </div>
          <div class="hover-content">

            <div class="food-card-properties">
              <div><i class="fa fa-clock-o"></i><p>5 min</p></div>
              <div><i class="fa fa-star"></i><p>4.2(121 votes)</p></div>
              <div><i class="fa fa-money"></i><p>$ 20</p></div>
            </div>

         
          </div>
        </div>
      </div>
      <div class="food-card">
        <img class="background-image" src="https://www.bofrost.fr/medias/11472-FR-chicken-wings-pic1.jpg-W720xH450R1.6?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDEyMjExMXxpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g3YS9oMjAvOTE4NjI3MzY4OTYzMC5qcGd8ZWRlYThlNTcxYzliNDY5ZDc2ZWUyNzdkNTQxMGM1ZmEzZTIwMTdkMjJkZDNkNjYzOTEwYTM2YzRkMzI2MDE3OA"></img>
        <div class="food-card-content">
          <div class="heading show">
            <h2>Buffalo Wings</h2>
            <div>
              <Button>Order</Button>
            </div>
            <div class="shadow"></div>
          </div>
          <div class="heading author show">
            <h5>By Buber eat</h5>
            <div class="shadow"></div>
          </div>
          <div class="hover-content">

            <div class="food-card-properties">
              <div><i class="fa fa-clock-o"></i><p>5 min</p></div>
              <div><i class="fa fa-star" ></i><p>4.2(121 votes)</p></div>
              <div><i class="fa fa-money"></i><p>$ 20</p></div>
            </div>

          </div>
        </div>
      </div>
      <div class="food-card">
        <img class="background-image" src="https://wordpress.potagercity.fr/wp-content/uploads/2019/05/Poke-bowl-au-saumon-marin%C3%A9.jpg"></img>
        <div class="food-card-content">
          <div class="heading show">
            <h2>Bowl with salmon</h2>
            <div>
              <Button>Order</Button>
            </div>
            <div class="shadow"></div>
          </div>
          <div class="heading author show">
            <h5>By Buber eat</h5>
            <div class="shadow"></div>
          </div>
          <div class="hover-content">

            <div class="food-card-properties">
              <div><i class="fa fa-clock-o"></i><p>5 min</p></div>
              <div><i class="fa fa-star"></i><p>4.2(121 votes)</p></div>
              <div><i class="fa fa-money"></i><p>$ 20</p></div>
            </div>

           
          </div>
        </div>
      </div>

    </div >
  </div>




);

export default Product;