let btnJerry = document.querySelector('#btnJerry');
let backgrpict = document.querySelector("div.first-screen__backgroundShow");
	// let backgrpict = document.querySelector('js-background');
let hideMenu = document.querySelector('header nav');
let h1Text = document.querySelector('div.js-h1text h1');
let btnMenu = document.querySelector('#btnmenu')

document.querySelector('#btnmenu').onclick = function() {
	let btnText = document.querySelector('#btnmenu');
	let hideMenu = document.querySelector('header nav');
	
	if (btnText.innerText == "Скрыть меню") {
		btnText.innerText = "Показать меню";
	} else if (btnText.innerText == 'Показать меню'){
		btnText.innerText = "Скрыть меню";
	}
// console.log('nav.first-screen_navmenu = ', hideMenu.classList.contains('first-screen_navmenu__hide'));
	hideMenu.classList.toggle('first-screen_navmenu__show');
	hideMenu.classList.toggle('first-screen_navmenu__hide');
}

document.querySelector('#btnJerry').onclick = function(){
	backgrpict.classList.toggle('first-screen__backgroundShow');
	backgrpict.classList.toggle('first-screen__backgroundHide');
	// backgrpict.classList.toggle('first-screen__background__hide2');
	hideMenu.classList.toggle('first-screen_navmenu__show');
	hideMenu.classList.toggle('first-screen_navmenu__hide');
	h1Text.classList.toggle('show');
	h1Text.classList.toggle('hide');
	btnMenu.classList.toggle('first-screen__btnshow');
	btnMenu.classList.toggle('first-screen__btnhide');
}
