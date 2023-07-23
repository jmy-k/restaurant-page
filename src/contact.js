import contactUsImage from "./imgs/contactUs.png";
import mapIcon from "./icons/map-marker.svg";
import clockIcon from "./icons/clock.svg";
import phoneIcon from "./icons/phone.svg";

const contactPage = () => {
    const contactContainer = document.createElement('div');

    // page title
    const contactTitle = document.createElement('div');
    contactTitle.className="page-title";
    contactTitle.textContent="Contact";
    contactContainer.appendChild(contactTitle)

    // contact image
    const contactImage = document.createElement('img');
    contactImage.src = contactUsImage;
    contactContainer.appendChild(contactImage);

    // container for contact info 
    const contactInfo = document.createElement('div');

    // container for the location for later grid styling
    const mapContainer = document.createElement('div');

    const mapIconImage = document.createElement('img');
    mapIconImage.src = mapIcon;
    mapContainer.appendChild(mapIconImage);

    const mapInfo = document.createElement('div');
    mapInfo.textContent = "2207 My Heart Road, Julia City";
    mapContainer.appendChild(mapInfo);

    //container for restaurant hours
    const clockContainer = document.createElement('div');

    const clockIconImage = document.createElement('img');
    clockIconImage.src = clockIcon;
    clockContainer.appendChild(clockIconImage);

    const clockInfo = document.createElement('div');
    clockInfo.textContent="Open Forever";
    clockContainer.appendChild(clockInfo);

    // container for phone number
    const phoneContainer = document.createElement('div');

    const phoneIconImage = document.createElement('img');
    phoneIconImage.src = phoneIcon;
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