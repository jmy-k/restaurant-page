import "./style.css";

import headBannerFunction from "./header.js";
import introFunction from "./intro.js";
import pageClearFunction from "./pageclear.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";

console.log("hello!")

const divContent=document.querySelector('#content');

function openPage(){
    const header=headBannerFunction();
    divContent.appendChild(header);

    const intro=introFunction(); //home page stuff
    divContent.appendChild(intro);
}

openPage();

const homeButton=document.querySelector('#home-title');
homeButton.addEventListener('click', function(){
    pageClearFunction();
    console.log("home!!");
    const intro=introFunction();
    divContent.appendChild(intro);
})

const menuButton = document.querySelector('#menu-title');
menuButton.addEventListener('click', function (){
    pageClearFunction();
    console.log("menu!!");
    menuPage();
})

const contactButton = document.querySelector('#contact-title');
contactButton.addEventListener('click',function(){
    pageClearFunction();
    console.log("contact!!");
    contactPage();
})