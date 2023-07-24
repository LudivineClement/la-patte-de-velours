const slidingDiscoverRace =  document.querySelector('.discover_race');

window.addEventListener('scroll', ()=> {
  const {scrollTop, clientHeight} = document.documentElement;

  const topElementToTopViewport= slidingDiscoverRace.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.70) {
    slidingDiscoverRace.classList.add('active')
  }
})

const animateElements = document.querySelectorAll('.animate-from-right, .animate-from-left, .animate-from-bottom');

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight } = document.documentElement;

  animateElements.forEach((element) => {
    const topElementToTopViewport = element.getBoundingClientRect().top;

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - scrollHeight * 0.5) {
      element.classList.add('active');
    }
  });
});



