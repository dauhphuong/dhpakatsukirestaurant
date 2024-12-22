/*===============-- Header down -> active --===============*/
window.addEventListener("scroll", function(){
  var header = document.querySelector(".header");
  header.classList.toggle("active", window.scrollY > 0);
})

/*===============-- Customer  --===============*/
  var swiper = new Swiper(".ctm--slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, 
  });  

/*===============-- Scroll on top  --===============*/
  // Get the button
let mybutton = document.getElementById("btn-up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*===============-- Res--header  --===============*/
 $(document).ready(function(){
   $('.nav-down').click(function(){
     $('nav').slideToggle();
   });
 })

 /* ======== No Function ====== */
var a = document.querySelectorAll(".No-Function")
for(var i = 0 ; i < a.length ; i++){
  a[i].onclick = function(e){
    alert('Chưa có chức năng!!')
    e.preventDefault();
  }
};

/* =============== Model Delivery =================== */
var $1 = document.querySelector.bind(document);
var $$1 = document.querySelectorAll.bind(document);

let lognIn = $$1('.js_lognIn');
let lognUp = $$1('.js_lognUp');
let modal = $1('.modal');
let modalLognUp = $1('.modal-lognUp');
let modalLognIn = $1('.modal-lognIn');
let btnUp = $1('.js-btn-Up');
let btnIn = $1('.js-btn-In');

function ShowLogIn() {
    modal.style.display = 'flex';
    modalLognIn.style.display = 'flex';
    modalLognUp.style.display = 'none';

    $1('.cut').style.display = 'none';
    
}
function ShowLogUp() {
    modal.style.display = 'flex';
    modalLognUp.style.display = 'flex';
    modalLognIn.style.display = 'none';
}
for(let i = 0 ; i < lognIn.length; i++){
  lognIn[i].addEventListener('click', ShowLogIn);

}
for(let i = 0 ; i < lognUp.length; i++){
  lognUp[i].addEventListener('click', ShowLogUp);

}
btnUp.addEventListener('click', ShowLogIn);
btnIn.addEventListener('click', ShowLogUp);
modal.addEventListener('click', function () {
    modal.style.display = 'none';
    modalLognUp.style.display = 'none';
    modalLognIn.style.display = 'none';
});
modalLognUp.addEventListener('click', function (e) {
    e.stopPropagation();
})
modalLognIn.addEventListener('click', function (e) {
    e.stopPropagation();
});
