function scrollMenu(){
  let header = document.querySelector('.header');
  let headerTop = document.querySelector('.header__top-inner');
  let menu = document.querySelector('.menu__list');

  window.addEventListener('scroll', ()=>{
    if(pageYOffset >= header.clientHeight){
      headerTop.classList.add("header__top-inner--fixed");
      menu.style['color'] = '#000';
    } else{
      headerTop.classList.remove("header__top-inner--fixed");
      menu.style['color'] = '#fff';
    }
  });
}

scrollMenu();

$ (function (){


  $('.menu a').on('click', function(event){
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top,
        topFinish = top;
    $('body,html').animate({scrollTop: topFinish}, 1000);
  });

  $('.menu__btn, .menu a').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');
  });


    $(".star").rateYo({
      starWidth: "15px",
      readOnly: true,
      normalFill: "#D8D8D8",
      ratedFill: "#EA4972",
      starSvg: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.09 1.84889L11.11 3.88989C11.36 4.38089 11.84 4.72089 12.39 4.79989L14.69 5.12689C16.08 5.32589 16.63 7.00289 15.63 7.96589L13.97 9.55489C13.57 9.93689 13.38 10.4879 13.48 11.0269L13.87 13.2709C14.11 14.6299 12.65 15.6669 11.41 15.0259L9.34995 13.9659C8.85995 13.7109 8.26995 13.7109 7.77495 13.9659L5.72095 15.0259C4.47595 15.6669 3.02095 14.6299 3.25895 13.2709L3.65095 11.0269C3.74595 10.4879 3.56295 9.93689 3.16295 9.55489L1.50195 7.96589C0.494952 7.00289 1.04995 5.32589 2.44195 5.12689L4.73895 4.79989C5.29095 4.72089 5.76895 4.38089 6.01595 3.88989L7.04295 1.84889C7.66595 0.611893 9.45995 0.611893 10.09 1.84889Z"/></svg>'
    });
});