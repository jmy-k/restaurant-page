import headBannerFunction from "./header.js";
import introFunction from "./intro.js";
import pageClearFunction from "./pageclear.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";

console.log("hello!")

function openPage(){
    const divContent=document.querySelector('#content');

    const header=headBannerFunction();
    divContent.appendChild(header);

    const homeButton=document.querySelector('#hometitle');
    homeButton.addEventListener('click', function(){
        pageClearFunction();
        console.log("home!!");
        const intro=introFunction();
        divContent.appendChild(intro);
    })

    const menuButton = document.querySelector('#menutitle');
    menuButton.addEventListener('click', function (){
        pageClearFunction();
        console.log("menu!!");
        menuPage();
       
    })

    const contactButton = document.querySelector('#contacttitle');
    contactButton.addEventListener('click',function(){
        pageClearFunction();
        console.log("contact!!");
        contactPage();
    })

    const intro=introFunction();
    divContent.appendChild(intro);
}

openPage();