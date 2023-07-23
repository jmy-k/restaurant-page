import contactUsImage from "./imgs/contactUs.png";
import mapIcon from "./icons/map-marker.svg";
import clockIcon from "./icons/clock.svg";
import phoneIcon from "./icons/phone.svg";

const contactPage = () => {
    const contactContainer = document.createElement('div');
    contactContainer.id="contact-container";

    // the contact tab is selected - for styling
    const contactTitle = document.querySelector('#contact-title')
    contactTitle.classList.add('selected');

    // contact image
    const contactImgContainer=document.createElement('div');
    contactImgContainer.id="contact-img-container"

    const contactImage = document.createElement('img');
    contactImage.src = contactUsImage;
    contactImage.id="contact-img";
    contactImgContainer.appendChild(contactImage);
    contactContainer.appendChild(contactImgContainer);

    // container for contact info 
    const contactInfo = document.createElement('div');
    contactInfo.id="info-container";

    // container for the location for later grid styling
    const mapContainer = document.createElement('div');
    mapContainer.className="contact-info-containers"

    const mapIconImage = document.createElement('img');
    mapIconImage.src = mapIcon;
    mapIconImage.className="icon";
    mapContainer.appendChild(mapIconImage);

    const mapInfo = document.createElement('div');
    mapInfo.textContent = "2207 My Heart Road, Julia City";
    mapContainer.appendChild(mapInfo);

    //container for restaurant hours
    const clockContainer = document.createElement('div');
    clockContainer.className="contact-info-containers";

    const clockIconImage = document.createElement('img');
    clockIconImage.src = clockIcon;
    clockIconImage.className="icon";
    clockContainer.appendChild(clockIconImage);

    const clockInfo = document.createElement('div');
    clockInfo.textContent="Open Forever";
    clockContainer.appendChild(clockInfo);

    // container for phone number
    const phoneContainer = document.createElement('div');
    phoneContainer.className="contact-info-containers";

    const phoneIconImage = document.createElement('img');
    phoneIconImage.src = phoneIcon;
    phoneIconImage.className="icon";
    phoneContainer.appendChild(phoneIconImage);

    const phoneInfo = document.createElement('div');
    phoneInfo.textContent = "1-800-MWAH";
    phoneContainer.appendChild(phoneInfo);

    // append all them containers into the contact info containerrrrr
    contactInfo.appendChild(mapContainer);
    contactInfo.appendChild(clockContainer);
    contactInfo.appendChild(phoneContainer);

    contactContainer.appendChild(contactInfo);

    // append to the div in the html file
    const divContent = document.querySelector('#content');
    divContent.appendChild(contactContainer);

    return divContent
}

export default contactPage