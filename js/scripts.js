// оформление полей юзера: приветствие и аватар
document.addEventListener('DOMContentLoaded', function () {
	var userName = 'Вадим'; // получаем имя пользователя
	var avatarId = 1; // получаем id пользователя
	var hello = document.querySelector('.user-hello');
	hello.innerText = 'Здравствуйте, ' + userName; // вставляем имя пользователя в приветствие
	var avatar = document.querySelector('.avatar');
	avatar.src = 'img/' + avatarId + '.jpg'; // заменяем имя файла фото на соответствующее пользователю

	// фиксация выбранной даты сеанса activeDateItem
	const dateItems = document.querySelectorAll('.session-date-item');
	document.addEventListener('click', e => {
		if (e.target.closest('.session-date-item')) {
			const activeDateItem = e.target.closest('.session-date-item');
			dateItems.forEach(item => item.classList.remove('date-item-active'));
			activeDateItem.classList.add('date-item-active');
		}
	});

	// выбор мест и подсчет выбранных
	const schemeSvg = document.querySelector('.scheme-svg');
	const totalPriceTag = document.querySelector('.price-total');
	let cost = 800;
	let totalPrice = 0;
	schemeSvg.addEventListener('click', e => {
		if (
			!e.target.classList.contains('booked') &&
			!e.target.classList.contains('light')
		) {
			e.target.classList.toggle('active');
			totalPrice = cost * schemeSvg.querySelectorAll('.active').length;
			totalPriceTag.textContent = totalPrice;
		}
	});
});

// вызываем/закрываем меню при нажатии на бургер
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
menuButton.addEventListener('click', () => {
	menu.classList.toggle('is-open');
});
