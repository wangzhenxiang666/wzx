	// const tab1=document.querySelectorAll('ul>li')
	// const tab2=document.querySelectorAll('ol>li')
	// for(let i=0;i<tab1.length;i++){
	//     tab1[i].onclick=function(){
	//         for(let j=0;j<tab1.length;j++){
	//             tab1[j].classList.remove('cctv')
	//             tab2[j].classList.remove('cctv')

	//         }
	//         tab1[i].classList.add('cctv')
	//         tab2[i].classList.add('cctv')

	//     }
	// }
	$('ul>li').click(function() {
		$(this).addClass('cctv').siblings().removeClass('cctv')
		var index = $(this).index()
		$(this).parent().siblings().children().eq(index).addClass('cctv').siblings().removeClass('cctv')
	})
	$('form>input').click(function(e) {
		e.stopPropagation();
		$(this).prev().animate({
			top: -8,
			fontSize: 12,
			fontWeight: 500
		})
	})
	$('form>h2').click(function(e) {
		e.stopPropagation();
		$(this).animate({
			top: -8,
			fontSize: 12,
			fontWeight: 500

		}, 1000, null, console.log(1))
	})
	$('label>input').stop().click(function(e) {
		e.stopPropagation();
		$(this).prev().animate({
			top: 63,
			fontSize: 12,
			fontWeight: 500

		})
	})

	// $('.banner1').click(function(){
	//   $('flabel>input').animate({

	//     top:17,
	//     fontSize:16,
	//     fontWeight: 100

	// },1000,null,console.log(1))
	// $('label>input').prev().animate({

	//   top:84,
	//   fontSize:18,
	//   fontWeight: 100

	// },1000,null,console.log(1))
	// })
	$(function() {
		$('#login').validate({
			rules: {
				username: {
					required: true,
					minlength: 5,
					maxlength: 10
				},
				password: {
					required: true,
					minlength: 6,
					maxlength: 12
				}
			},
			messages: {
				username: {
					required: '账号不能为空',
					minlength: '最少 5 个字符',
					maxlength: '最多 10 个字符'
				},
				password: {
					required: '密码不能为空',
					minlength: '                   请输入6-20位字符',
					maxlength: '最多 20 个字符'
				}
			},
			submitHandler(form) {
				const info = $(form).serialize()
				$.post('../php/login.php', info, null, 'json').then(res => {
					console.log(res)
					if (res.code === 0) {
						$('span').removeClass('hide')
					} else if (res.code === 1) {
						setCookie('nickname', res.nickname)
						window.location.href = './index.html'
					}
				})
			}
		})
	})