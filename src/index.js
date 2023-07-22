import headBannerFunction from "./header.js";
import introFunction from "./intro.js";
import pageClearFunction from "./pageclear.js";


console.log("hello!")

function openPage(){
    const divContent=document.querySelector('#content');

    const header=headBannerFunction();
    divContent.appendChild(header);

    const homeButton=document.querySelector('#hometitle');
    homeButton.addEventListener('click', function(){
        pageClearFunction();
    })

    const menuButton = document.querySelector('#menutitle');
    const contactButton = document.querySelector('#contacttitle');

    const intro=introFunction();
    divContent.appendChild(intro);
}

openPage();