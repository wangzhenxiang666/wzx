

// function Tab(ele){
//     this.ele=document.querySelector(ele)
//     this.show=this.ele.querySelector('.show')
//     this.mask=this.ele.querySelector('.mask')
//     this.enlang=this.ele.querySelector('.enlang')
//     this.list=this.ele.querySelector('.list')
//     this.show_width=this.show.clientWidth
    
//     this.show_height=this.show.clientHeight
//     this.enlang_width=parseInt(window.getComputedStyle(this.enlang).width)
    
//     this.enlang_height=parseInt(window.getComputedStyle(this.enlang).height)
//     this.bj_width=parseInt(window.getComputedStyle(this.enlang).backgroundSize.split(' ')[0])
//     this.bj_height=parseInt(window.getComputedStyle(this.enlang).backgroundSize.split(' ')[1])
    
//     this.init()
// }


// Tab.prototype.init=function(){
//     this.setScale()
//     this.overOut()
//     this.move()
//     this.change()
// }


// Tab.prototype.setScale=function(){
//     this.mask_width = this.show_width * this.enlang_width / this.bj_width
    
//     this.mask_height=this.enlang_height*this.show_height/this.bj_height
//     this.mask.style.width=this.mask_width+'px'
//     this.mask.style.height=this.mask_height+'px'

// }
// Tab.prototype.overOut=function(){
//     this.show.addEventListener('mouseover',()=>{
//         this.enlang.style.display='flex'
//         this.mask.style.display='flex'
//     })
//     this.show.addEventListener('mouseout',()=>{
//         this.enlang.style.display='none'
//         this.mask.style.display='none'
//     })
// }
// Tab.prototype.move=function(){
//     this.show.addEventListener('mousemove',e=>{
//         e=e||window.event
//         let show_x=e.offsetX-this.mask_width/2
//         let show_y=e.offsetY-this.mask_height/2
//         if(show_x<0)show_x=0
//         if(show_y<0)show_y=0
//         if(show_x>this.show_width-this.mask_width)show_x=this.show_width-this.mask_width
//         if(show_y>this.show_height-this.mask_height)show_y=this.show_height-this.mask_height
//         this.mask.style.left=show_x+'px'
//         this.mask.style.top=show_y+'px'
//         const bj_x = this.enlang_width * show_x / this.mask_width
//         console.log(bj_x)
//         const bj_y = this.enlang_height * show_y / this.mask_height
//         this.enlang.style.backgroundPosition = `-${ bj_x }px -${ bj_y }px`
//     })
// }
// Tab.prototype.change=function(){
//     this.list.addEventListener('click',e=>{
//         e = e || window.event
        
//         const target = e.target || e.srcElement
//         if(target.nodeName=='IMG'){
//             const show_url=target.getAttribute('show')
//             const enlang_url=target.getAttribute('enlang')
//             this.show.firstElementChild.src = show_url
//             this.enlang.style.backgroundImage = `url(${ enlang_url })`
//         }
//     })
// }
$(function(){
    let info = null
      const id = getCookie('goods_id')
      getGoodsInfo()
      async function getGoodsInfo() {
        const goodsInfo = await $.get('../php/getGoodsInfo.php', { goods_id: id }, null, 'json')
        bindHtml(goodsInfo.info)
        function Tab(ele){
          this.ele=document.querySelector(ele)
          this.show=this.ele.querySelector('.show')
          this.mask=this.ele.querySelector('.mask')
          this.enlang=this.ele.querySelector('.enlang')
          this.list=this.ele.querySelector('.list')
          this.show_width=this.show.clientWidth
          this.show_height=this.show.clientHeight
          this.enlang_width=parseInt(window.getComputedStyle(this.enlang).width)
          this.enlang_height=parseInt(window.getComputedStyle(this.enlang).height)
          this.bj_width=parseInt(window.getComputedStyle(this.enlang).backgroundSize.split(' ')[0])
          this.bj_height=parseInt(window.getComputedStyle(this.enlang).backgroundSize.split(' ')[1])
          this.init()
      }
      Tab.prototype.init=function(){
          this.setScale()
          this.overOut()
          this.move()
          this.change()
      }
      Tab.prototype.setScale=function(){
          this.mask_width = this.show_width * this.enlang_width / this.bj_width
          
          this.mask_height=this.enlang_height*this.show_height/this.bj_height
          this.mask.style.width=this.mask_width+'px'
          this.mask.style.height=this.mask_height+'px'
      }
      Tab.prototype.overOut=function(){
          this.show.addEventListener('mouseover',()=>{
              this.enlang.style.display='flex'
              this.mask.style.display='flex'
          })
          this.show.addEventListener('mouseout',()=>{
              this.enlang.style.display='none'
              this.mask.style.display='none'
          })
      }
      Tab.prototype.move=function(){
          this.show.addEventListener('mousemove',e=>{
              e=e||window.event
              let show_x=e.offsetX-this.mask_width/2
              let show_y=e.offsetY-this.mask_height/2
              if(show_x<0)show_x=0
              if(show_y<0)show_y=0
              if(show_x>this.show_width-this.mask_width)show_x=this.show_width-this.mask_width
              if(show_y>this.show_height-this.mask_height)show_y=this.show_height-this.mask_height
              this.mask.style.left=show_x+'px'
              this.mask.style.top=show_y+'px'
              const bj_x = this.enlang_width * show_x / this.mask_width
              console.log(bj_x)
              const bj_y = this.enlang_height * show_y / this.mask_height
              this.enlang.style.backgroundPosition = `-${ bj_x }px -${ bj_y }px`
          })
      }
      Tab.prototype.change=function(){
          this.list.addEventListener('click',e=>{
              e = e || window.event
              const target = e.target || e.srcElement
              if(target.nodeName=='IMG'){
                  const show_url=target.getAttribute('show')
                  const enlang_url=target.getAttribute('enlang')
                  this.show.firstElementChild.src = show_url
                  this.enlang.style.backgroundImage = `url(${ enlang_url })`
              }
          })
      }
      new Tab('#box')
        info = goodsInfo.info
        console.log(info)
      }
      function bindHtml(info) {
          console.log(info)
          $('.box6').html(`
          <div class="box6" id="box">
          <div class="show">
              <img src="${ info.goods_big_logo }" alt="">
              <div class="mask"></div>
          </div>
          <div class="list">
              <p>
              <img src="${ info.goods_big_logo }" show="${ info.goods_big_logo }" enlang="${ info.goods_big_logo }" alt="">
        </p>
        </div>
          <div class="enlang" style="background-image: url('${ info.goods_big_logo }');">
          </div>
          `)

          $('.item-right').html(`
      
          <h1>${ info.goods_name }</h1>
          <b>活动价18999元！</b>  
          <p>30天保价/送货入户保障/官方正品</p>
          <div class="md">
              <ul>
                  <li>
                      <span>
                          <span>${ info.goods_price }</span>
                          <span>￥29999</span>
                          <span>已售345台</span>
                      </span>
                      </p>
                  </li>
              </ul>
          </div>
          <div class="chengnuo">
              <ul>
                  <p>承诺</p>
                  <li>30天保价</li>
                  <li>七天无理由</li>
                  <li>全场包邮</li>
                  <li>全国联保</li>
              </ul>
          </div>                
      <div class="nam"><p>选择数量</p></div>
      <div class="num">
        <button class="subNum">-</button>
        <input type="text" value="1" class="cartNum">
        <button class="addNum">+</button>
      </div>
      <div>
        <button class="btn addCart">加入购物车</button>
        <button class="btn continue"><a href="./list.html">继续去购物</a></button>
      </div>
      </div>
      `)
      }
      $('.item-right').on('click', '.addCart', function () {
        const cart = JSON.parse(window.localStorage.getItem('cart')) || []
        const flag = cart.some(item => item.goods_id === id)
        if (flag) {
          const cart_goods = cart.filter(item => item.goods_id === id)[0]
          cart_goods.cart_number = cart_goods.cart_number - 0 + ($('.cartNum').val() - 0)
        } else {
          info.cart_number = 1
          cart.push(info)
        }
        window.localStorage.setItem('cart', JSON.stringify(cart))
      })
      $('.item-right')
        .on('click', '.subNum', function () {
          let num = $('.cartNum').val() - 0
          if (num === 1) return
          $('.cartNum').val(num - 1)
        })
        .on('click', '.addNum', function () {
          let num = $('.cartNum').val() - 0
          $('.cartNum').val(num + 1)
        })
})
