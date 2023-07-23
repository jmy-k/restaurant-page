import cigJeffImage from "./imgs/cigJeff.png";
import muscleJeffImage from "./imgs/muscleJeff.png";
import scubaJeffImage from "./imgs/scubaJeff.png";
import sunglassJeffImage from "./imgs/sunglassJeff.png";
import superJeffImage from "./imgs/superJeff.png";
import tacoJeffImage from "./imgs/tacoJeff.png";

const jeffMenu = ["Cig Jeff","Muscle Jeff","Scuba Jeff","Sunglass Jeff","Super Jeff", "Taco Jeff"];
const jeffImages = [cigJeffImage, muscleJeffImage, scubaJeffImage, sunglassJeffImage, superJeffImage, tacoJeffImage];
const jeffPrices = ["$7","$22","$22","$7","$22","$1996"]

const menuPage = () => {
    const divContent = document.querySelector('#content');

    // the menu tab is selected - for styling
    const menuTitle = document.querySelector('#menu-title')
    menuTitle.classList.add('selected');

    // container for all menu items
    const menuContainer = document.createElement('div');
    menuContainer.id="menu-container";

    // for each item in the jeffMenu array
    for (let i = 0; i < jeffMenu.length; i +=1){

        //containers for each menu item
        let menuItem = document.createElement('div');
        menuItem.className="menu-item";

        let itemName = document.createElement('div');
        itemName.textContent = jeffMenu[i];
        itemName.className="item-name";
        menuItem.appendChild(itemName);

        let itemImage = document.createElement('img');
        itemImage.src = jeffImages[i];
        itemImage.className="item-image";
        menuItem.appendChild(itemImage);

        let itemPrice = document.createElement('div');
        itemPrice.textContent=jeffPrices[i];
        itemPrice.className="item-price";
        menuItem.appendChild(itemPrice);

        menuContainer.appendChild(menuItem);
    }
    
    divContent.appendChild(menuContainer);
    
    return divContent
}

export default menuPage