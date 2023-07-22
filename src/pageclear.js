// clears page wiht only header remaining //

const pageClearFunction = () => {
    const divContent=document.querySelector('#content');

    while (divContent.children.length>1){
        divContent.children[1].remove();
    }
}

export default pageClearFunction