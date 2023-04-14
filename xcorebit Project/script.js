// const bannerContent = document.querySelector(".banner-content");

// window.addEventListener("load", function(){
//     bannerContent.style.transform = "translateX(20%)";
//     // alert("Load");
// })

// const swiper = new Swiper('.swiper', {
//     // Optional parameters

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });




let navContainer = document.querySelector(".nav-links");
let openToggleBtn = document.querySelector(".menu-icon");
let closeToggleBtn = document.querySelector(".close-icon");
let navLinkAnchor = document.querySelectorAll(".nav-link-anchor");

openToggleBtn.addEventListener("click", function(){
    navContainer.classList.add("show");
});

closeToggleBtn.addEventListener("click", function(){
    navContainer.classList.remove("show");
});


for(let i = 0; i < navLinkAnchor.length; i++){
    navLinkAnchor.addEventListener("click", function(){
        navContainer.classList.remove("show");
    });
}
