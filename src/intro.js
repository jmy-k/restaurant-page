const introFunction = () => {
    const intro=document.createElement('div');
    intro.id="intro";

    const introText=document.createElement('div');
    introText.textContent="This is so yummy boom bam boom";
    intro.appendChild(introText);
    
    return intro;
}

export default introFunction;