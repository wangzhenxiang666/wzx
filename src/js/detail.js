$(function () {
    const nickname = getCookie('nickname')
    if (!nickname) return window.location.href = './login.html'
    const cart = JSON.parse(window.localStorage.getItem('cart')) || []
    if (!cart.length) {
      $('.on').addClass('hide')
      $('.off').removeClass('hide')
      return
    }
    $('.off').addClass('hide')
    $('.on').removeClass('hide')
    bindHtml()
    function bindHtml() {
      console.log(cart)
      const selectAll = cart.every(item => item.is_select == 1)
      let total = 0
      let totalMoney = 0
      cart.forEach(item => {
        if (item.is_select == 1) {
          total += item.cart_number - 0
          totalMoney += item.cart_number * item.goods_price
        }
      })
  
      let str = `
        <div class="panel hh">
          <div>
            <p class="selectAll">
              <span>全选:</span>
              <input type="checkbox" ${ selectAll ? 'checked' : '' } class="all">
              <span class="text0">商品详情</span>
              <span class="text1">单价</span>
              <span class="text2">数量</span>
              <span class="text3">合计</span>
              <span class="text4">操作</span>
            </p>
          </div>
          <div class="panel-body">
            <ul class="goodsList">
      `
  
      cart.forEach(item => {
        str += `
          <li>
            <div class="select">
              <input data-id="${ item.goods_id }" type="checkbox" ${ item.is_select == 0 ? '' : 'checked' }>
            </div>
            <div class="goodsImg">
              <img src="${ item.goods_small_logo }" alt="">
            </div>
            <div class="goodsDesc">
              <p>${ item.goods_name }</p>
            </div>
            <div class="price">
              ￥ <span class="text-danger">${ item.goods_price }</span>
            </div>
            <div class="count">
              <button class="subNum" data-id="${ item.goods_id }">-</button>
              <input type="text" value="${ item.cart_number }">
              <button class="addNum" data-id="${ item.goods_id }">+</button>
            </div>
            <div class="xiaoji">
              ￥ <span class="text-danger">${ (item.goods_price * item.cart_number).toFixed(2) }</span>
            </div>
            <div class="operate">
              <button class="btn btn-danger del" data-id="${ item.goods_id }">删除</button>
            </div>
          </li>
        `
      })
  
      str += `
            </ul>
          </div>
          <div class="panel-footer">
            <div class="buyInfo">
              <p class="buyNum">
               已选中: <span class="text-danger cartNum">${ total }</span> 件商品 
              </p>
              <p class="buyMoney">
                购买总价格: <span class="text-danger total">${ totalMoney.toFixed(2) }</span> 元 (不含运费)
              </p>
              <p class="operate">
                <button class="np" ${ totalMoney == 0 ? 'disabled' : '' }>去结算</button>
                
              </p>
            </div>
          </div>
        </div>
      `
      $('.on').html(str)
    }
    $('.on').on('click', '.select > input', function () {
      const type = this.checked
      const id = $(this).data('id')
      const info = cart.filter(item => item.goods_id == id)[0]
      info.is_select = type ? '1' : '0'
      bindHtml()
      window.localStorage.setItem('cart', JSON.stringify(cart))
    })
  
    $('.on').on('click', '.addNum', function () {
      const id = $(this).data('id')
      const info = cart.filter(item => item.goods_id == id)[0]
      info.cart_number = info.cart_number - 0 + 1
      bindHtml()
      window.localStorage.setItem('cart', JSON.stringify(cart))
    })
  
    $('.on').on('click', '.subNum', function () {
      const id = $(this).data('id')
      const info = cart.filter(item => item.goods_id == id)[0]
      if (info.cart_number == 1) return
      info.cart_number = info.cart_number - 0 - 1
      bindHtml()
      window.localStorage.setItem('cart', JSON.stringify(cart))
    })

    $(".selectAll").on('click','.all',function(){
      console.log('efdsf')
     if(!this.checked) {
       cart.forEach(item =>{
         item.is_select=0
       })
     }else{
       cart.forEach(item =>{
           item.is_select=1
       })
     }
       bindHtml()
       window.location.reload()
       window.localStorage.setItem('cart',JSON.stringify(cart)) 
    })
    
    $('.on').on('click', '.del', function () {
      const id = $(this).data('id')
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].goods_id == id) {
          cart.splice(i, 1)
          break
        }
      }
  
      bindHtml()
      window.localStorage.setItem('cart', JSON.stringify(cart))
  
      if (!cart.length) return window.location.reload()
    })
  })
  
  
  /*
  
  <li>
                <div class="select">
                  <input type="checkbox">
                </div>
                <div class="goodsImg">
                  <img src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2200724510033/O1CN01d3hhJK1C79hCUAXBp_!!2200724510033.jpg_250x250.jpg_.webp" alt="">
                </div>
                <div class="goodsDesc">
                  <p>我是一段秒数信息我是一段秒数信息我是一段秒数信息我是一段秒数信息我是一段秒数信息我是一段秒数信息我是一段秒数信息我是一段秒数信息</p>
                </div>
                <div class="price">
                  ￥ <span class="text-danger">100.00</span>
                </div>
                <div class="count">
                  <button>-</button>
                  <input type="text" value="1">
                  <button>+</button>
                </div>
                <div class="xiaoji">
                  ￥ <span class="text-danger">100.00</span>
                </div>
                <div class="operate">
                  <button class="btn btn-danger">删除</button>
                </div>
              </li>
  */
  