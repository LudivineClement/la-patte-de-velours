const slidingDiscoverRace = document.querySelector('.discover_race');

window.addEventListener('scroll', () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = slidingDiscoverRace.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.70) {
    slidingDiscoverRace.classList.add('active')
  } else {
    slidingDiscoverRace.classList.remove('active');
  }
})

const animateElements = document.querySelectorAll('.animate-from-right, .animate-from-left, .animate-from-bottom');

window.addEventListener('scroll', () => {
  const { clientHeight } = document.documentElement;

  animateElements.forEach(element => {
    const topElementToTopViewport = element.getBoundingClientRect().top;

    if (topElementToTopViewport <= clientHeight * 0.70) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
    
    if (topElementToTopViewport <= clientHeight * 0.75) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }

    // Et pour le troisième élément :
    if (topElementToTopViewport <= clientHeight * 0.89) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
});




