const sortbyContainer = document.querySelector('.cv-sortby-container');
const sortbyOptions = document.querySelector('.cv-sortby-options');
const filterContainer = document.querySelector('.cv-filters-container');
const filterOptions = document.querySelector('.cv-filters-options');


sortbyContainer.addEventListener('click', function() {
    sortbyOptions.classList.toggle('show');
});

filterContainer.addEventListener('click', function(){
    filterOptions.classList.toggle('disp');
})

$(document).ready(function() {
    $('#play-video').on('click', function(ev) {

      $(".video")[0].src += "&autoplay=1";
      ev.preventDefault();

    });
  });