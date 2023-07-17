console.log("hello!")

function components(){
    const divContent=document.querySelector('#content');

    const headBannerFunction = () => {
        const headBanner = document.createElement('div');
        headBanner.id="headbanner";

        const bannerImg = document.createElement('img');
        bannerImg.src="../src/banner.jpeg";
        headBanner.appendChild(bannerImg);

        const headerTitle=document.createElement('div');
        headerTitle.id="headertitle";
        headerTitle.textContent="Restaurant Name";
        headBanner.appendChild(headerTitle);

        divContent.appendChild(headBanner);

        return divContent;
    } 
    
    const introFunction = () => {
        const intro=document.createElement('div');
        intro.id="intro";
    
        const introText=document.createElement('div');
        introText.textContent="This is so yummy boom bam boom";
        intro.appendChild(introText);

        divContent.appendChild(intro)
        
        return divContent;
    }
    

    return {headBannerFunction, introFunction, divContent};
}

components()