function toggleDropdown(menuId) {
    let dropdown = document.getElementById(menuId);
    let isVisible = dropdown.style.display === 'block';
    let allDropdowns = document.getElementsByClassName('dropdown-content');

    //Hide all dropdowns
    for (let i = 0; i < allDropdowns.length; i++) {
        allDropdowns[i].style.display = 'none';
    }

    dropdown.style.display = isVisible ? 'none' : 'block';
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Cambiar imagen cada 5 segundos
}

function changeSlide(n) {
  slideIndex += n;
  let slides = document.getElementsByClassName("mySlides");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}