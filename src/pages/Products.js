import React from "react";
import "../components/navbar.css";
import "./css/products.css";


const Product = () => (

  <div class="flexbox">
    <div class="food-card">
      <img class="background-image" src="https://assets.afcdn.com/recipe/20161216/61596_w1024h768c1cx2808cy1872.webp"></img>
      <div class="food-card-content">
        <div class="heading show">
          <h2>Beef Steak with mashed Potatoes</h2>
          <div class="shadow"></div>
        </div>
        <div class="heading author show">
          <h5>By <a href="#profile" class="profile">Jyotirmoy Barman</a></h5>
          <div class="shadow"></div>
        </div>
        <div class="hover-content">

          <div class="food-card-properties">
            <div><i class="fa fa-clock-o"></i><p>5 min</p></div>
            <div><i class="fa fa-star" ></i><p>4.2(121 votes)</p></div>
            <div><i class="fa fa-money"></i><p>$ 20</p></div>
          </div>

          <div class="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptas, possimus omnis nostrum, voluptates quas, at autem minus harum excepturi ut perspiciatis. Ducimus nobis consequatur voluptas soluta. Quos, commodi doloribus?<div class="show-less"></div></div>
          <a href="#" class="view-more">View More</a>
        </div>
      </div>
    </div>


    <div class="food-card" >
     <img class="background-image" src="https://media.gqmagazine.fr/photos/5d8b7254c7191e00083ebdbb/4:3/w_1440,h_1080,c_limit/como%20hacer%20la%20mejor%20pizza%20del%20mundo.jpg"></img>
      <div class="food-card-content">
        <div class="heading show">
          <h2>Baby Corn Chili</h2>
          <div class="shadow"></div>
        </div>
        <div class="heading author show">
          <h5>By Jyotirmoy Barman</h5>
          <div class="shadow"></div>
        </div>
        <div class="hover-content">

          <div class="food-card-properties">
            <div><i class="fa fa-clock-o"></i><p>5 min</p></div>
            <div><i class="fa fa-star"></i><p>4.2(121 votes)</p></div>
            <div><i class="fa fa-money"></i><p>$ 20</p></div>
          </div>
          
          <div class ="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Eligendi voluptas, possimus omnis nostrum, voluptates quas, at autem minus harum excepturi ut perspiciatis.Ducimus nobis consequatur voluptas soluta.Quos, commodi doloribus?<div class ="show-less"></div></div>
          <a href="#"class ="view-more">View More</a>
        </div>
      </div>
    </div>
    <div class="food-card" src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/buffalo-wings.jpg">
      <div class="food-card-content">
        <div class="heading show">
          <h2>Buffalo Wings</h2>
          <div class="shadow"></div>
        </div>
        <div class="heading author show">
          <h5>By Jyotirmoy Barman</h5>
          <div class="shadow"></div>
        </div>
        <div class="hover-content">

          <div class="food-card-properties">
            <div><i class="fa fa-clock-o"></i><p>5 min</p></div>
            <div><i class="fa fa-star" ></i><p>4.2(121 votes)</p></div>
            <div><i class="fa fa-money"></i><p>$ 20</p></div>
          </div>
          
          <div class ="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Eligendi voluptas, possimus omnis nostrum, voluptates quas, at autem minus harum excepturi ut perspiciatis.Ducimus nobis consequatur voluptas soluta.Quos, commodi doloribus?<div class ="show-less"></div></div>
          <a href="#"class ="view-more">View More</a>
        </div>
      </div>
    </div>
    <div class="food-card" src="https://media.cntraveller.in/wp-content/uploads/2019/11/SEAGOA_images.jpg">
      <div class="food-card-content">
        <div class="heading show">
          <h2>Prawn</h2>
          <div class="shadow"></div>
        </div>
        <div class="heading author show">
          <h5>By Jyotirmoy Barman</h5>
          <div class="shadow"></div>
        </div>
        <div class="hover-content">

          <div class="food-card-properties">
            <div><i class="fa fa-clock-o"></i><p>5 min</p></div>
            <div><i class="fa fa-star"></i><p>4.2(121 votes)</p></div>
            <div><i class="fa fa-money"></i><p>$ 20</p></div>
          </div>
         
          <div class ="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Eligendi voluptas, possimus omnis nostrum, voluptates quas, at autem minus harum excepturi ut perspiciatis.Ducimus nobis consequatur voluptas soluta.Quos, commodi doloribus?<div class ="show-less"></div></div>
          <a href="#"class ="view-more">View More</a>
        </div>
      </div>
    </div>
    <div class="food-card" src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg">
      <div class="food-card-content">
        <div class="heading show">
          <h2>Burger and Fries</h2>
          <div class="shadow"></div>
        </div>
        <div class="heading author show">
          <h5>By Jyotirmoy Barman</h5>
          <div class="shadow"></div>
        </div>
        <div class="hover-content">

          <div class="food-card-properties">
            <div><i class="fa fa-clock-o"></i><p>5 min</p></div>
            <div><i class="fa fa-star" ></i><p>4.2(121 votes)</p></div>
            <div><i class="fa fa-money"></i><p>$ 20</p></div>
          </div>
         
          <div class ="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Eligendi voluptas, possimus omnis nostrum, voluptates quas, at autem minus harum excepturi ut perspiciatis.Ducimus nobis consequatur voluptas soluta.Quos, commodi doloribus?<div class ="show-less"></div></div>
          <a href="#"class ="view-more">View More</a>
        </div>
      </div>
    </div>
  </div >



);

export default Product;