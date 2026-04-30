/**
 * Initializes theme-markup carousels (Swiper 5 API) inside static page HTML: hero slider,
 * testimonials, post carousels, etc. Matches public/js/.../carousel.js options closely.
 */
import Swiper from 'swiper/js/swiper.esm.bundle.js'
import 'swiper/css/swiper.min.css'

function truthy(v) {
  return v === true || v === 'true' || v === 1 || v === '1'
}

/** Swiper 5 only starts autoplay when `autoplay.enabled` is true (delay alone is not enough). */
function wantsAutoplay(settings, slidersRoot) {
  if (truthy(settings.autoplay)) return true
  if (settings.autoplay === '' && slidersRoot.classList.contains('pxl-testimonial-carousel')) return true
  return false
}

function parseSettings(container) {
  const raw = container.getAttribute('data-settings')
  if (!raw) return {}
  try {
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

function num(v, fallback) {
  const n = parseInt(String(v), 10)
  return Number.isFinite(n) ? n : fallback
}

function buildSwiperConfig(container, slidersRoot) {
  const settings = parseSettings(container)

  const nextEl = slidersRoot.querySelector('.pxl-swiper-arrow-next')
  const prevEl = slidersRoot.querySelector('.pxl-swiper-arrow-prev')
  const paginationEl = slidersRoot.querySelector('.pxl-swiper-dots')

  const navigation =
    truthy(settings.arrow) && nextEl && prevEl ? { nextEl, prevEl } : false

  let pagination = false
  if (truthy(settings.pagination) && paginationEl && settings.pagination_type) {
    pagination = {
      el: paginationEl,
      clickable: true,
      type: settings.pagination_type,
      modifierClass: 'pxl-swiper-pagination-',
      bulletClass: 'pxl-swiper-pagination-bullet',
    }
  }

  const slidesToScroll = num(settings.slides_to_scroll, 1)
  const baseBreakpoints = {
    0: {
      slidesPerView: num(settings.slides_to_show_xs, 1),
      slidesPerGroup: slidesToScroll,
    },
    576: {
      slidesPerView: num(settings.slides_to_show_sm, 2),
      slidesPerGroup: slidesToScroll,
    },
    768: {
      slidesPerView: num(settings.slides_to_show_md, 2),
      slidesPerGroup: slidesToScroll,
    },
    992: {
      slidesPerView: num(settings.slides_to_show_lg, 3),
      slidesPerGroup: slidesToScroll,
    },
    1200: {
      slidesPerView: num(settings.slides_to_show, 1),
      slidesPerGroup: slidesToScroll,
    },
    1600: {
      slidesPerView: num(settings.slides_to_show_xxl, num(settings.slides_to_show, 1)),
      slidesPerGroup: slidesToScroll,
    },
  }

  const cfg = {
    direction: settings.slide_direction === 'vertical' ? 'vertical' : 'horizontal',
    effect: settings.slide_mode === 'fade' ? 'fade' : 'slide',
    wrapperClass: 'pxl-swiper-wrapper',
    slideClass: 'pxl-swiper-slide',
    slidesPerView: num(settings.slides_to_show, 1),
    slidesPerGroup: slidesToScroll,
    slidesPerColumn: num(settings.slide_percolumn, 1),
    spaceBetween: num(settings.slides_gutter, 0),
    speed: num(settings.speed, 500),
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    breakpoints: baseBreakpoints,
  }

  if (navigation) cfg.navigation = navigation
  if (pagination) cfg.pagination = pagination

  if (settings.slide_mode === 'fade') {
    cfg.fadeEffect = { crossFade: true }
  }

  if (truthy(settings.center)) {
    cfg.centeredSlides = true
  }

  if (truthy(settings.loop)) {
    cfg.loop = true
  }

  if (wantsAutoplay(settings, slidersRoot)) {
    cfg.autoplay = {
      enabled: true,
      delay: Math.max(1500, num(settings.delay, 5000)),
      disableOnInteraction: truthy(settings.pause_on_interaction),
    }
  } else {
    cfg.autoplay = { enabled: false }
  }

  return { cfg, settings }
}

/**
 * @param {HTMLElement} root — element whose subtree contains `.pxl-swiper-container` nodes
 */
export function initLegacySwipers(root) {
  if (!root || typeof root.querySelectorAll !== 'function') return

  const containers = root.querySelectorAll('.pxl-swiper-container')
  containers.forEach((container) => {
    const slidersRoot = container.closest('.pxl-swiper-sliders')
    if (!slidersRoot) return

    const { cfg, settings } = buildSwiperConfig(container, slidersRoot)

    if (typeof container._jksSwiperTeardownHover === 'function') {
      container._jksSwiperTeardownHover()
    }
    if (container._jksSwiper) {
      try {
        container._jksSwiper.destroy(true, true)
      } catch {
        /* noop */
      }
      delete container._jksSwiper
    }

    let swiper
    try {
      swiper = new Swiper(container, cfg)
    } catch (e) {
      console.warn('[jks] Swiper init failed', e)
      return
    }

    container._jksSwiper = swiper

    if (wantsAutoplay(settings, slidersRoot) && truthy(settings.pause_on_hover)) {
      const pause = () => swiper.autoplay?.stop?.()
      const resume = () => swiper.autoplay?.start?.()
      container.addEventListener('mouseenter', pause)
      container.addEventListener('mouseleave', resume)
      container._jksSwiperTeardownHover = () => {
        container.removeEventListener('mouseenter', pause)
        container.removeEventListener('mouseleave', resume)
        delete container._jksSwiperTeardownHover
      }
    }
  })
}

export function destroyLegacySwipers(root) {
  if (!root || typeof root.querySelectorAll !== 'function') return
  root.querySelectorAll('.pxl-swiper-container').forEach((container) => {
    if (typeof container._jksSwiperTeardownHover === 'function') {
      container._jksSwiperTeardownHover()
    }
    if (container._jksSwiper) {
      try {
        container._jksSwiper.destroy(true, true)
      } catch {
        /* detached DOM */
      }
      delete container._jksSwiper
    }
  })
}
