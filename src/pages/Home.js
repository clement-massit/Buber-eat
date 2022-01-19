import React from "react";
import './css/home.css';
import './css/home.scss';

import "../components/navbar.css";



import { dividerClasses } from "@mui/material";

const Home = () => (


    <div>
        <div id="svgContainer"></div>
        <h1 class='retroshadow'>BUBER EAT</h1>
       
        <div class="l-container">
            <div class="b-game-card">
                <div class="b-game-card__cover" >
                    <img class="image" src="https://cdn-icons-png.flaticon.com/512/1532/1532688.png"></img>
                </div>
            </div>
            <div class="b-game-card">
                <div class="b-game-card__cover">
                <img class="image" src="https://www.pngkit.com/png/full/392-3922751_livraison-gratuite-icon-png-car-tow-icon.png"></img>
                </div>
            </div>
            <div class="b-game-card">
                <div class="b-game-card__cover">
                    <img class="image" src="https://image.flaticon.com/icons/png/512/1058/1058096.png"></img></div>
            </div>
            <div class="b-game-card">
                <div class="b-game-card__cover">
                    <img class="image" src="https://icon-library.com/images/thumbs-up-icon/thumbs-up-icon-3.jpg"></img></div>
            </div>
        </div>













    </div>





);

export default Home;