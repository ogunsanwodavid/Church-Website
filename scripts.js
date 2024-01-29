/*The previous and next controls for the slide carousel*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}


//this controls the carousel with the left and right arrow keys 
window.addEventListener("keydown", (e) => {
  if( e.key === "ArrowLeft" ) {
      plusSlides(-1)
  }
  else if( e.key === "ArrowRight" ) {
      plusSlides(1)
  }
})

function hambgFunction() {
  let hambg = document.getElementById("hambg-icon");
  let navdrop = document.getElementById("nav-dropdown");

  if (hambg.classList.contains('fa-reorder')) {
    navdrop.style.height = "max-content";
    hambg.style.transform = 'rotate(360deg)';
    hambg.classList.remove('fa-reorder');
    hambg.classList.add('fa-remove');
  } else {
    navdrop.style.height = "0";
    hambg.style.transform = 'rotate(0deg)';
    hambg.classList.remove('fa-remove');
    hambg.classList.add('fa-reorder');
  }

 // if (navdrop.classList.contains('nav-closed')){
   // navdrop.classList.remove('nav-closed');
    //navdrop.classList.add('nav-opened');
  //} else{
    //navdrop.classList.remove('nav-opened');
    //navdrop.classList.add('nav-closed');
  //}
}

//this function changes the navbar background-color dark onscroll
window.onscroll = function() {navColorChange()};

function navColorChange() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("header-nav").style.background = "black";
    document.getElementById("header-nav").style.borderBottom = "1px solid #fb7777";
    document.getElementById("logo").style.height ="80px"
  } else {
    document.getElementById("header-nav").style.background = "transparent";
    document.getElementById("header-nav").style.borderBottom = "0";
    document.getElementById("logo").style.height ="100px"
  }
}

document.getElementById("whoweare-main").onmouseover = function () {
  document.getElementById("whoweare-sub").style.opacity = "1";
  document.getElementById("whoweare-sub").style.visibility = "visible";
}

document.getElementById("whoweare-main").onmouseout = function () {
  document.getElementById("whoweare-sub").style.opacity = "0";
  document.getElementById("whoweare-sub").style.visibility = "hidden";
}

function menuDrop() {
  let menudrop = document.getElementById("menu-drop");
  let sublinks = document.getElementById("navdrop-sublinks");

  if (menudrop.classList.contains('fa-plus')) {
    menudrop.style.transform = 'rotate(360deg)';
    menudrop.classList.remove('fa-plus');
    menudrop.classList.add('fa-minus')
  } else {
    menudrop.style.transform = 'rotate(0deg)';
    menudrop.classList.remove('fa-minus');
    menudrop.classList.add('fa-plus')
  }

  if (sublinks.classList.contains('menu-closed')) {
    sublinks.classList.remove('menu-closed');
    sublinks.classList.add('menu-opened');
  } else {
    sublinks.classList.remove('menu-opened');
    sublinks.classList.add('menu-closed');
  }
}
