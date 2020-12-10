// setCartNum()
// function setCartNum() {
//   // 拿到 localStorage 里面的那个数组
//   const cart = JSON.parse(window.localStorage.getItem('cart')) || []
//   // 3-2. 判断 cart 是一个 [], 那么就用 0 填充到指定位置
//   if (!cart.length) {
//     $('.cartNum').html('0')
//     return
//   }
//   // 3-3. 能来到这里, 表示购物车里面有数据
//   // 需要把每一条数据的 cartNum 叠加咋一起
//   let count = 0
//   cart.forEach(item => count += item.cart_number - 0)
//   $('.cartNum').html(count)
// }