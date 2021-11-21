/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};



document.addEventListener('DOMContentLoaded', function() {
    init();
});

const init = async() => {
    let container = document.getElementsByClassName("tableResponsive");
    let resp = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await resp.json();
    console.log(data);
    for(let i = 0; i< data.length; i++){
        let divContainer = document.createElement("div");
        let text = document.createTextNode(data[i].name);
        divContainer.appendChild(text);
        divContainer.classList.add('containerName');
        container[0].appendChild(divContainer);
    }
}
/******/ })()
;