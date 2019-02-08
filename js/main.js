$(document).ready(function () {

	// Модальные окна

	// Открываем модальное окно

	function modalOpen() {
		$('body').css('overflow', 'hidden');
		modal.fadeIn(300);
		container.addClass('active');
	}

	function modalClose() {
		container.removeClass('active');
		modal.fadeOut(300);
		$('body').css('overflow', 'auto');
	}

	var modal = $('.modal'),
		container = $('.modal__container');

	$('.btn_open').on('click', function () {
		modalOpen();
	});

	// Закрываем модальное окно при клике вне контейнера

	modal.on('click', function (e) {
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			modalClose();
		}
	});

	// ... и по крестику

	$('.modal__close').on('click', function () {
		modalClose();
	});


	var dropdownField = $('.dropdown__field'),
		dropdownItem = $('.dropdown__text');

	// Показываем/скрываем поля с выпадающим списком

	$('.dropdown').on('click', function (e) {
		var $this = $(this);

		if ($this.find(dropdownField).is(':visible')) {
			$this.find(dropdownField).slideUp(300);
		} else {
			$('.dropdown').find(dropdownField).slideUp(300);
			$this.find(dropdownField).slideDown(300);
		};
		$('.dropdown').not($this).removeClass('open');
		$this.toggleClass('open');
	});

	// Выбираем сортировку и подставляем ее наверх

	$('.dropdown__item').on('click', function () {
		var text = $(this).text();
		$(this).parents('.dropdown').find(dropdownItem).html(text);
	});

	// Если кликаем мышкой вне области выпадающего списка - закрываем их

	$(document).on('click', function (e) {
		var dropdown = $('.dropdown');

		if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
			dropdown.removeClass('open');
			dropdownField.slideUp(300);
		};
	});

	// Выбираем адрес и подставляем в верхнее поле
	$('.address__item').on('click', function () {
		var address = $(this).attr('data-address'),
			city = $(this).html();

		$('.address__place').html('<span class="address__text_city">' + city + ', ' + '</span><span class="address__text_street">' + address + '</span>');
	});


	// отсчет дней
	var dataEnd = $('.packet__descr').attr('data-end');
	$(".eTimer").eTimer({
		etType: 0,
		etDate: dataEnd,
		etTitleText: "",
		etTitleSize: 10,
		etShowSign: 1,
		etSep: " ",
		etFontFamily: "Trebuchet MS",
		etTextColor: "#a3a3a3",
		etPaddingTB: 0,
		etPaddingLR: 0,
		etBackground: "transparent",
		etBorderSize: 0,
		etBorderRadius: 0,
		etBorderColor: "white",
		etShadow: " 0px 0px 0px 0px transparent",
		etLastUnit: 1,
		etNumberFontFamily: "Impact",
		etNumberSize: 25,
		etNumberColor: "black",
		etNumberPaddingTB: 0,
		etNumberPaddingLR: 5,
		etNumberBackground: "transparent",
		etNumberBorderSize: 0,
		etNumberBorderRadius: 0,
		etNumberBorderColor: "white",
		etNumberShadow: "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.5)"
	});


	// Скролл до нужной секции
	$('.toggle__link, .main__btn, .programm__btn').on('click', function (e) {
		e.preventDefault();
		$('.toggle__check').prop('checked', false);
		var target = $(this).attr('href') || $('#address');
		$('html,body').animate({
			scrollTop: $(target).offset().top - 50
		}, 700)
	});


});

$(window).on('load', function () {

	$(".loader").delay(400).fadeOut("slow");

});