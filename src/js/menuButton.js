const button = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');
let flag = true;

const showAndCloseMenu = e => {
    e.preventDefault();
    if(flag){
    TweenMax.to('.navigation',{duration: 2, y: 0, ease: "bounce.out"});
    flag = false;
}else{
    TweenMax.to('.navigation',{duration: 1, y: -(window.innerHeight + 300)});
    flag = true; 
}}

button.addEventListener('click', showAndCloseMenu);