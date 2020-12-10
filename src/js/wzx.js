
$(function () {
    const nickname = getCookie('nickname')
    if (nickname) {
      $('.off').addClass('hide')
      $('.on').removeClass('hide').text(`欢迎您: ${nickname}`)
    } else {
      $('.off').removeClass('hide')
      $('.on').addClass('hide')
    }
    })

      
  
  
  
  
 
 
