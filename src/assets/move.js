// 封装运动函数
/**
 * move 运动函数
 * @param {ELEMENT} ele 要运动的元素
 * @param {OBJECT} target 运动的属性和值, 以对象形式传递
 * @param {FUNCTION} fn 运动结束以后要执行的函数
 */
function move(ele, target, fn) {
  let count = 0

  for (let key in target) {
    count++

    const timer = setInterval(() => {
      let current
      if (key === 'opacity') {
        current = window.getComputedStyle(ele)[key] * 100
      } else {
        current = parseInt(window.getComputedStyle(ele)[key])
      }

      let distance = (target[key] - current) / 10
      distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance)

      if (current === target[key]) {
        clearInterval(timer)
        count--
        if (count === 0) fn()
      } else {
        if (key === 'opacity') {
          ele.style[key] = (current + distance) / 100
        } else {
          ele.style[key] = current + distance + 'px'
        }
      }
    }, 20)
  }
}
