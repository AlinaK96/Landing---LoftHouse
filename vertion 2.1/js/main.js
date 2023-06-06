// scroll из header

let links = document.querySelectorAll('.menu-item > a')
for (let i = 0; i < links.length; i++){
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: 'smooth'})
    }
}


//ссылки из footer

let footerLinks = document.querySelectorAll('.footer-item > a')
for (let i = 0; i < footerLinks.length; i++){
    footerLinks[i].onclick = function () {
        document.getElementById(footerLinks[i].getAttribute("data-link")).scrollIntoView({behavior: 'smooth'})
    }
}

// валидация input почты

const SubscribeButton = document.querySelector('#sub-action')
const Username = document.querySelector('#name')
const phone= document.querySelector('#phone')
const success = document.querySelector('#successfulSubscribtion')
const secret = document.querySelector('#secret')

SubscribeButton.addEventListener('click', function () {

    let hasError = false
    const info = [Username, phone]

    info.forEach(item => {
        if (!item.value){
            item.style.background = 'red'
            hasError = true
            
        } else {
            item.style.background = ''
        }
    })

    if (!hasError){
        info.forEach(item => {
            item.value = ''
        })
        SubscribeButton.classList.add('none')
        Username.classList.add('none')
        phone.classList.add('none')
        secret.classList.add('none')
        success.innerText = 'Мы скоро свяжемся с вами!'
    }
})

const check = document.querySelector('#check')
const User = document.querySelector('#Username')
const Userphone= document.querySelector('#Userphone')
const successFul = document.querySelector('#Subscribtion')

check.addEventListener('click', function () {

    let hasError = false
    const information = [User, Userphone]

    information.forEach(item => {
        if (!item.value){
            item.style.background = 'red'
            hasError = true
            
        } else {
            item.style.background = ''
        }
    })

    if (!hasError){
        information.forEach(item => {
            item.value = ''
        })
        check.classList.add('none')
        User.classList.add('none')
        Userphone.classList.add('none')
        successFul.innerText = 'Мы скоро свяжемся с вами!'
    }
})


//возврат наверх страницы

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("none")
    } else {
        backToTopButton.classList.add("none")
    }
})

//возвращение наверх
const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
};

backToTopButton.addEventListener("click", goToTop)


// burger menu

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}


/* Yandex Map */
ymaps.ready(init);
function init(){
	var map = new ymaps.Map('map', {
		center: [59.943543, 30.338928],
		zoom: 16,
	});

	var myPlacemark = new ymaps.Placemark(
		[59.943543, 30.338928],
		{
			balloonContent: `
				<div class="balloon">
					<div class="balloon__address">Наб. реки Фонтанки 10-15</div>
					<div class="balloon__contacts">
						<a href="tel:+78121234567">+8 (812) 123-45-67</a>
					</div>
				</div>
			`,
		},
		{
			iconLayout: 'default#image',
			iconImageHref: './img/map/location-pin.svg',
			iconImageSize: [40, 40],
			iconImageOffset: [-20, -40],
		}
	);

	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип

	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	map.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();

}