import EmblaCarousel from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'
import { addThumbBtnsClickHandlers, addToggleThumbBtnsActive } from './EmblaCarouselThumbsButton'
import { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton'

export function applyCarousel(carousel) {
  const mainNode = carousel.querySelector('[data-home-carousel-main-viewport]')
  const mainPrevNode = carousel.querySelector('[data-home-carousel-main-prev]')
  const mainNextNode = carousel.querySelector('[data-home-carousel-main-next]')
  const mainDotsNode = carousel.querySelector('[data-home-carousel-main-dots]')
  const thumbsNode = carousel.querySelector('[data-home-carousel-thumbs-viewport]')

  const emblaApiMain = EmblaCarousel(mainNode, {
    loop: true,
    slidesToScroll: 'auto'
  }, [
    Autoplay({ playOnInit: true, delay: 4000 })
  ])
  const emblaApiThumbs = EmblaCarousel(thumbsNode, {
    // containScroll: 'trimSnaps',
    axis: 'y',
    containScroll: 'trimSnaps',
    // loop: true,
    dragFree: true
  })

  const removeMainPrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
    emblaApiMain,
    mainPrevNode,
    mainNextNode
  )
  const removeThumbBtnsClickHandlers = addThumbBtnsClickHandlers(emblaApiMain, emblaApiThumbs)
  const removeToggleThumbBtnsActive = addToggleThumbBtnsActive(emblaApiMain, emblaApiThumbs)
  const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
    emblaApiMain,
    mainDotsNode
  )

  emblaApiMain
    .on('destroy', removeMainPrevNextBtnsClickHandlers)
    .on('destroy', removeThumbBtnsClickHandlers)
    .on('destroy', removeToggleThumbBtnsActive)
    .on('destroy', removeDotBtnsAndClickHandlers)
  emblaApiThumbs
    .on('destroy', removeThumbBtnsClickHandlers)
    .on('destroy', removeToggleThumbBtnsActive)
}

export function initHomeCarousel() {
  const items = document.querySelectorAll('[data-home-carousel]') || []

  Array.from(items).forEach(applyCarousel)
}
