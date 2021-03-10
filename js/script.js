$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
/*Scroll Reveal Animations*/
ScrollReveal().reveal('.animation-left',{
    origin:'left',
    distance: '10rem',
    duration: 1000,
    easing: 'ease-in'
});
ScrollReveal().reveal('.animation-fade-up',{
   opacity:0,
   easing: 'ease-in'
});
ScrollReveal().reveal('.animation-bottom',{
    origin:'bottom',
    distance: '10rem',
    duration: 1000,
    easing: 'ease-in'
});
ScrollReveal().reveal('.animation-bottom-2',{
    origin:'bottom',
    distance: '10rem',
    duration: 2000,
    easing: 'ease-in'
});
ScrollReveal().reveal('.animation-delay',{
  delay: 500
});
ScrollReveal().reveal('.animation-delay-2',{
   delay: 1000
});

function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}