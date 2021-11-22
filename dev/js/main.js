import '../index.html';
import '../styles/normalize.css';
import '../styles/main.css';
import background from '../assets/img/background-main.jpg';

document.addEventListener('DOMContentLoaded', function() {
    console.log(URL);
    init();
});

const init = async() => {
    let container = document.getElementsByClassName("tableResponsive");
    let resp = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await resp.json();
    console.log(data);
    for(let i = 0; i< data.length; i++){
        let divContainer = document.createElement("div");
        let text = document.createTextNode(data[i].name + data[i].username);
        divContainer.appendChild(text);
        divContainer.classList.add('containerName');
        container[0].appendChild(divContainer);
    }
    let imgContainer = document.getElementsByClassName("imgContainer");
    const img = new Image();
    img.src = background;
    img.alt = "background";
    imgContainer[0].appendChild(img);

}