      
    class Banner{
        constructor(ele){
            this.ele=document.querySelector(ele)
            this.ul=this.ele.querySelector('ul')
            this.ol=this.ele.querySelector('ol')
    
            this.list=this.ele.querySelector('.list')
            this.index=1
            this.time=0
            this.banner_width=this.ele.clientWidth
            this.fag=true
            this.init()
    
    
        }
        init(){
            this.setPoin()
            this.getClone()
            this.autoPlay()
            this.overOut()
            this.leftRight()
            this.poinEven()
            this.change()
        }
        setPoin(){
            const sum=this.ul.children.length
            const fly=document.createDocumentFragment()
            for(let i=0;i<sum;i++){
                const li=document.createElement('li')
                fly.appendChild(li)
                if(i==0)li.classList.add('cctv')
                li.setAttribute('ol_index',i)
            }
            this.ol.appendChild(fly)
            this.ol.style.width=sum*(30+20)+'px'
    
        }
        getClone(){
            const first=this.ul.firstElementChild.cloneNode(true)
            const last=this.ul.lastElementChild.cloneNode(true)
            this.ul.appendChild(first)
            this.ul.insertBefore(last,this.ul.firstElementChild)
            this.ul.style.width=this.ul.children.length*100+'%'
            this.ul.style.left=-this.banner_width+'px'
    
        }
        autoPlay(){
            this.time=setInterval(()=>{
                this.index++
                move(this.ul,{left:-this.index*this.banner_width},this.moveEnd.bind(this))
    
            },2000)
    
        }
        moveEnd(){
            if(this.index===this.ul.children.length-1){
                this.index=1
                this.ul.style.left=-this.banner_width*this.index+'px'
    
            }
            if(this.index===0){
                this.index=this.ul.children.length-2
                this.ul.style.left=-this.banner_width*this.index+'px'
    
            }
            for(let j=0;j<this.ol.children.length;j++){
                this.ol.children[j].classList.remove('cctv')
            }
            this.ol.children[this.index-1].classList.add('cctv')
    this.fag=true
        }
        overOut(){
            this.ele.addEventListener('mouseover',()=>{
                clearInterval(this.time)
            })
            this.ele.addEventListener('mouseout',()=>{
                this.autoPlay()
            })
    
        }
        leftRight(){
            this.list.addEventListener('click',(e)=>{
                e=e||window.event
                var target=e.target||e.srcElement
                if(target.className=='right'){
                if(this.fag===false)return

                    this.index++
                move(this.ul,{left:-this.index*this.banner_width},this.moveEnd.bind(this))
                   this.fag=false
                }
                if(target.className=='left'){
                if(this.fag===false)return

                    this.index--
                move(this.ul,{left:-this.index*this.banner_width},this.moveEnd.bind(this))
                   this.fag=false
                    
                }
            })
    
        }
        poinEven(){
            this.ol.addEventListener('click',(e)=>{
                e=e||window.event
                var target=e.target||e.srcElement
                if(target.nodeName=='LI'){
                if(this.fag===false)return

                   const ol_index=target.getAttribute('ol_index')-0
                   this.index=ol_index+1
                move(this.ul,{left:-this.index*this.banner_width},this.moveEnd.bind(this))
                   this.fag=false
                    
                }
              
            })
    
        }
        change() {
            // 9-1. 给 document 绑定一个 visibilitychange 事件
            document.addEventListener('visibilitychange', ()=>{
          
              // 9-2. 获取当前页面的可见状态
              const state = document.visibilityState
          
              // 9-3. 根据可见状态进行操作
              if (state === 'hidden') {
                // 关闭定时器
                clearInterval(this.time)
              }
          
              if (state === 'visible') {
                // 再次开启自动轮播
                this.autoPlay()
              }
          
            })
          }
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    } 

    const ul = document.querySelector('.k3')

    const inp = document.querySelector('.k1')
    document.addEventListener('click', function () {
        ul.style.display='none'
    })
    inp.addEventListener('input', function () {
        ul.style.display='flex'
        
      const value = this.value.trim()
      if (!value) return

      const script = document.createElement('script')
      const url = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1446,32857,33124,33061,32973,33099,33101,32962,22159&wd=${value}&req=2&csor=1&cb=bindHtml&_=1605768936993`
      script.src = url
      document.body.appendChild(script)
    
      script.remove()
    })

    function bindHtml(res) {
    
      if (!res.g) {
        ul.classList.remove('active')
        return
      }

      let str = ''

      for (let i = 0; i < res.g.length; i++) {
        str += `
          <li>${ res.g[i].q }</li>
        `
      }
      ul.innerHTML = str
      ul.classList.add('active')
    }
    const lis=document.querySelectorAll('.eve>ul>li')
   console.log(lis)
    const alive=document.querySelector('.alive')
    const ul0=document.querySelector('.alive>ul')
    
    // for(let i=0;i=10;i++){
    //     ajax({
    //         url:'/wen',
    //         data:'ids=3622,3094,3951,3952,2553,3492,3304,3517,3493,2710,35,2350,2364,2244,2569,2278,108,2497,2237,2306,2202,58,3811,3948,3812,2890,3569,3311,3941,3945,3785,2941,3667,3779&_=1607437525473',
    //         success(res){
    //             res=JSON.parse(res)
    //             // console.log(res)
    //             bind(res)
    //         }
    //     })
    // function bind(arr){
    //     let str=''
    //     for(let i=0;i<arr.length;i++){
    //         // console.log(arr[0])
    //         str+=`
    //         <li>
    //         <img src="${arr[i].listMainImage}" alt="">
    //         <span>${arr[i].saleQuantity}</span>
    //     </li>
       
    //         `
           
    //     }
    //     console.log(str)
    //     console.log(res)
    // }
    // }








$('.eve>ul>li').mouseover(function(){
    $('.alive').removeClass('hide')
  })
  console.log(1)
  $('.eve>ul>li').mouseout(function(){
    $('.alive').addClass('hide')
  })

//   $('.ment1 img').mouseover(function(){
//     $(this).stop().animate({
//         width:'110%',
//         height:'110%'
//     },1000)
//   })
//   $('.ment1 img').mouseout(function(){
//     $(this).stop().animate({
//         width:'100%',
//         height:'100%'
//     })
//   })
//   $('.jx img').mouseover(function(){
//     $(this).stop().animate({
//         width:'600px',
//         height:'500px'
//     },1000)
//   })
//   $('.jx img').mouseout(function(){
//     $(this).stop().animate({
//         width:'594px',
//         height:'394px'
//     })
//   })
//   $('.ds img').mouseover(function(){
//     $(this).stop().animate({
//         width:'110%',
//         height:'100%'
//     },1000)
//   })
//   $('.ds img').mouseout(function(){
//     $(this).stop().animate({
//         width:'100%',
//         height:'100%'
//     })
//   })
  setCartNum()
  function setCartNum() {
    const cart = JSON.parse(window.localStorage.getItem('cart')) || []
    if (!cart.length) {
      $('.cartNum').html('0')
      return
    }
    let count = 0
    cart.forEach(item => count += item.cart_number - 0)
    $('.cartNum').html(count)
  }
  const zhiding=document.querySelector('.zhiding')
  zhiding.onclick=function(){
      window.scrollTo({
          left:0,
          top:0,
          behavior:'smooth'
      })
  }
    
    
