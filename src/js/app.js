
const swiper = new Swiper('.swiper', {
   direction: 'horizontal',
   loop: true,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   slidesPerView: 2,
 });

 const menu = document.querySelector('.header-navigation')
 const menuBtn = document.querySelector('.menu-bunger')

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})


}
