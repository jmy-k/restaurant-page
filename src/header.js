const headBannerFunction = () => {
    const headBanner = document.createElement('div');
    headBanner.id="head-banner";

    const bannerImg = document.createElement('img');
    bannerImg.src="../src/banner.jpg";
    bannerImg.id="banner-image"
    headBanner.appendChild(bannerImg);

    const headerTitle=document.createElement('div');
    headerTitle.id="restaurant-title";
    headerTitle.textContent="Chez Julia";
    headBanner.appendChild(headerTitle);

    const homeTitle=document.createElement('div');
    homeTitle.id="home-title";
    homeTitle.textContent="Home";
    headBanner.appendChild(homeTitle);

    const menuTitle=document.createElement('div');
    menuTitle.id="menu-title";
    menuTitle.textContent="Menu";
    headBanner.append(menuTitle);

    const contactTitle=document.createElement('div');
    contactTitle.id="contact-title";
    contactTitle.textContent="Contact";
    headBanner.append(contactTitle);

    return headBanner;
} 
export default headBannerFunction;