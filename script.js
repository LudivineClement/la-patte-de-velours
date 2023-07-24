const slidingDiscoverRace =  document.querySelector('.discover_race');

window.addEventListener('scroll', ()=> {
  const {scrollTop, clientHeight} = document.documentElement;

  const topElementToTopViewport= slidingDiscoverRace.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.80) {
    slidingDiscoverRace.classList.add('active')
  }
})

const slidingAnimateFromRight =  document.querySelector('.animate-from-right');

window.addEventListener('scroll', ()=> {
  const {scrollTop, clientHeight} = document.documentElement;

  const topElementToTopViewport= slidingAnimateFromRight.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.90) {
    slidingAnimateFromRight.classList.add('active')
  }
})

const slidingAnimateFromLeft =  document.querySelector('.animate-from-left');

window.addEventListener('scroll', ()=> {
  const {scrollTop, clientHeight} = document.documentElement;

  const topElementToTopViewport= slidingAnimateFromLeft.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.90) {
    slidingAnimateFromLeft.classList.add('active')
  }
})

const slidingAnimateFromBottom =  document.querySelector('.animate-from-bottom');

window.addEventListener('scroll', ()=> {
  const {scrollTop, clientHeight} = document.documentElement;

  const topElementToTopViewport= slidingAnimateFromBottom.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.90) {
    slidingAnimateFromBottom.classList.add('active')
  }
})





