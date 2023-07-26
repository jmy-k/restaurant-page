const headBannerFunction = () => {
    const headBanner = document.createElement('div');
    headBanner.id="head-banner";

    const bannerImgContainer = document.createElement('div');
    bannerImgContainer.id="banner-img-container"
    const bannerImg = document.createElement('img');
    bannerImg.src="../src/banner.jpg";
    bannerImg.id="banner-image"
    bannerImgContainer.appendChild(bannerImg);
    headBanner.appendChild(bannerImgContainer);

    const headerTitle=document.createElement('div');
    headerTitle.id="restaurant-title";
    headerTitle.textContent="Chez Julia";
    headBanner.appendChild(headerTitle);

    const tabTitles = document.createElement('div');
    tabTitles.id="tab-titles"

    const homeTitle=document.createElement('div');
    homeTitle.id="home-title";
    homeTitle.textContent="Home";
    tabTitles.appendChild(homeTitle);

    const menuTitle=document.createElement('div');
    menuTitle.id="menu-title";
    menuTitle.textContent="Menu";
    tabTitles.append(menuTitle);

    const contactTitle=document.createElement('div');
    contactTitle.id="contact-title";
    contactTitle.textContent="Contact";
    tabTitles.append(contactTitle);

    headBanner.appendChild(tabTitles);

    return headBanner;
} 
export default headBannerFunction;