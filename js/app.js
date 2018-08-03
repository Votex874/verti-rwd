// var menu = document.querySelector("nav");
// var button = document.getElementById("menu-trigger");
// var mobile = window.matchMedia("screen and (max-width: 760px)");
//
// if(mobile.matches){
//     button.style.display = "block";
// }else {
//     button.style.display = "none";
// }
//
// mobile.addListener(function () {
//     if(mobile.matches){
//         button.style.display = "block";
//
//     }else{
//         button.style.display = "none";
//     }
// });
//
// button.addEventListener("click", function () {
//     if(menu.style.display === "block"){
//      menu.style.display = "none";
//     }else{
//         menu.style.display = "block";
//     }
// });
var hamburger = document.querySelector(".hamburger");
var dropDown = document.querySelector(".hamburger ul");
console.log(dropDown);

hamburger.addEventListener("click", function () {
    dropDown.classList.toggle("dropDown");
});