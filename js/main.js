const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  //Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placehoder', 'integrated search');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placehoder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'      
    });
    gsap.to(toTopEl, .2,{
      x: 0
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,    
      display: 'block' 
    });
    //hide button
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.events .swiper-container',{
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.events .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.events .swiper-prev',
    nextEl: '.events .swiper-next',
  }
});
const eventEl = document.querySelector('.events');
const eventToggleBtn = document.querySelector('.toggle-event');
let isHideEvent = false;
eventToggleBtn.addEventListener('click', function() {
  isHideEvent = !isHideEvent
  if (isHideEvent) {
    eventEl.classList.add('hide');
  } else {
    eventEl.classList.remove('hide');
  }
});

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});