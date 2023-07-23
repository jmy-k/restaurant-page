// clears page wiht only header remaining //

const pageClearFunction = () => {
    const divContent=document.querySelector('#content');

    while (divContent.children.length>1){
        divContent.children[1].remove();
    }

    const menuTitle = document.querySelector('#menu-title');
    const contactTitle = document.querySelector('#contact-title');
    const homeTitle=document.querySelector('#home-title');

    menuTitle.classList.remove('selected');
    contactTitle.classList.remove('selected');
    homeTitle.classList.remove('selected');
}

export default pageClearFunction