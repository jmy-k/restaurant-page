const introFunction = () => {
    const intro=document.createElement('div');
    intro.id="intro";

    const introText=document.createElement('div');
    introText.id="intro-text";
    introText.textContent="This is so yummy boom bam boom";
    intro.appendChild(introText);

    const homeTitle=document.querySelector('#home-title');
    homeTitle.classList.add("selected");
    
    return intro;
}

export default introFunction;