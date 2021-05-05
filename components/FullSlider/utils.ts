/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

export function getAverage(elements, num) {
  let sum = 0
  const lastElements = elements.slice(Math.max(elements.length - num, 1))
  for (let i = 0; i < lastElements.length; i++) {
    sum = sum + lastElements[i]
  }

  return Math.ceil(sum / num)
}

export function scrollTo(to, options?: { duration: number }) {
  options = { duration: 1000, ...options }

  function ease(n) {
    n *= 2
    if (n < 1) return 0.5 * n * n * n
    return 0.5 * ((n -= 2) * n * n + 2)
  }

  return new Promise(resolve => {
    let start = 0
    function step(timestamp) {
      if (!start) {
        start = timestamp
      }
      const progress = timestamp - start
      const distance = to - window.scrollY

      const top = window.scrollY + distance * ease(progress / options.duration)
      window.scrollTo(0, top)
      if (progress < options.duration) {
        window.requestAnimationFrame(step)
      } else {
        window.scrollTo(0, to)
        resolve()
      }
    }

    window.requestAnimationFrame(step)
  })
}
