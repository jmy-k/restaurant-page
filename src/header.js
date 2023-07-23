const headBannerFunction = () => {
    const headBanner = document.createElement('div');
    headBanner.id="headbanner";

    const bannerImg = document.createElement('img');
    bannerImg.src="../src/banner.jpg";
    headBanner.appendChild(bannerImg);

    const headerTitle=document.createElement('div');
    headerTitle.id="headertitle";
    headerTitle.textContent="Chez Julia";
    headBanner.appendChild(headerTitle);

    const homeTitle=document.createElement('div');
    homeTitle.id="hometitle";
    homeTitle.textContent="Home";
    headBanner.appendChild(homeTitle);

    const menuTitle=document.createElement('div');
    menuTitle.id="menutitle";
    menuTitle.textContent="Menu";
    headBanner.append(menuTitle);

    const contactTitle=document.createElement('div');
    contactTitle.id="contacttitle";
    contactTitle.textContent="Contact";
    headBanner.append(contactTitle);

    return headBanner;
} 
export default headBannerFunction;