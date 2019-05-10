//общая функция ready для всей страницы
$(document).ready(function() {
	
	//выпадающее меню категорий
	let catalogNavHover = function () {
		$('.catalog-nav__item').hover(
			function() {
				let parentList = $(this).closest('.catalog-nav__list');
				if ($(this).children('.catalog-nav__item').length) {
					let catNavHeight = $(this).children('.catalog-nav__list').outerHeight();
					if (parentList.outerHeight() < catNavHeight) {
						parentList.css('height', catNavHeight);
					}
					parentList.css('width', '720');
				}
			}, function() {
					let parentList = $(this).closest('.catalog-nav__list');
					parentList.css('height', 'auto');
					parentList.css('width', 'auto');
			}
		)
	};

	//открытие формы поиска 
	let openSearchForm = function () {
		$(document).on('click','.search__icon', function() {
			$(this).parent().addClass('search--open');
		});
	};
	//и очистка формы
	let clearSearchForm = function () {
		$(document).on('click','.search__clear', function() {
			$('.search__input').val('');
		});
	};

	//слайдер для баннера 
	let bannerSlider = function () {
		$('.js-banner').slick({
			autoplay: true,
			autoplaySpeed: 6000,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: ".banner__navigation--prev",
			nextArrow: ".banner__navigation--next",
			dots: true,
			customPaging: function(slider, i) {
				return '<a class="banner__dot"></a>'
			},
			appendDots: '.banner__dots',
			responsive: [
				{
					breakpoint: 767,
					settings: {
						arrows: false,
					}
				}
			]
		})
	};

	//табы для акций товаров
	let tabs = function () {
		$('.tabs-navigation__item').click(function() {
		    let tabName = $(this).attr('show-tab'),
		    	tabsBody = $(this).closest('.tabs').find('.tabs__body')[0],
		    	tab = $(tabsBody).find('.' + tabName);
		    $(this).addClass('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
		    $(tab).addClass('tab--active').siblings().removeClass('tab--active');
		    if ($(tabsBody).find('.js-products-line-slider').length) {
		    	$('.js-products-line-slider').each(function () {
		    		$(this).slick('refresh');
		    	});
		    	$('.js-product-prev__slider').each(function () {
		    		$(this).slick('refresh');
		    	});
		    }
		});
	};

	//слайдер для ввнутреннего слайдера по цвету товара
	let productPrevSlider = function () {
		$('.js-product-prev__slider').each(function (idx) {
			let productPrevSliderClass = "product-prev-slider-" + idx;
			this.closest('.product-prev').classList.add(productPrevSliderClass);
			$(this).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				appendDots: '.' + productPrevSliderClass + ' .product-prev__colors',
				swipe: false,
				infinite: false,
				customPaging: function (slider, i) {
					let color = $(slider.$slides[i]).data('color');
					return '<div class="product-prev__color" style="background-color:' + color + '"></div>'
				}
			});
		});	
	};

	//отображение количества карточек товаров по акциям в зависимости от расширения монитора
	let productLineSlider = function () {
		$('.js-products-line-slider').each(function (idx) {
			let productsLineSliderID = "products-line-slider-" + idx;
			this.closest('.products-line-slider').id = productsLineSliderID;
			$(this).slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: false,
				dots: true,
				appendDots: '#' + productsLineSliderID + ' .products-line-slider__dots',
				prevArrow: '#' + productsLineSliderID + ' .products-line-slider__btn--prev',
				nextArrow: '#' + productsLineSliderID + ' .products-line-slider__btn--next',
				customPaging: function (slider, i) {
								return '<div class="products-line-slider__dot"></div>';
							},
				responsive: [
					{
						breakpoint: 1139,
						settings: {
							slidesToShow: 3,
							
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 2,
						}
					},
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 1,
						}
					}
				]
			});
		});	
	};

	//слайдер товарорв на станице бренда (brand.html)
	let productBorderLineSlider = function () {
		$('.js-products-border-line-slider').each(function (idx) {
			let productsBorderLineSliderID = "products-border-line-slider-" + idx;
			this.closest('.products-border-line-slider').id = productsBorderLineSliderID;
			$(this).slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: false,
				prevArrow: '#' + productsBorderLineSliderID + ' .products-border-line-slider__btn--prev',
				nextArrow: '#' + productsBorderLineSliderID + ' .products-border-line-slider__btn--next',
				responsive: [
					{
						breakpoint: 1139,
						settings: {
							slidesToShow: 3,
							
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 2,
						}
					},
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 1,
						}
					}
				]
			});
		});	
	};


	//адаптивное меню
	let mobileMenu = function () {
		$(document).on('click','.mobile-menu__toggle',function () {
			$(this).parent().addClass('mobile-menu--open');
			if ($(window).width() < 768) {
				$('html').addClass('fixed');
				$('.wrapper').addClass('mobile-menu-open');
			}
		});
		$(document).on('click','.mobile-menu__close',function () {
			$(this).closest('.mobile-menu').removeClass('mobile-menu--open');
			if ($(window).width() < 768) {
				$('html').removeClass('fixed');
				$('.wrapper').removeClass('mobile-menu-open');
			}
		});
	};

	//перемещает сертификат из правой части страницы в левую при разрешении от 1140 до 767 (не знаю почему код два раза пишется)
	let brandInfo = function() {
		if ($(window).width() < 1140 && $(window).width() > 767) {
			$('.brand__certificates').appendTo('.brand-info__tablet');
		} else {
			$('.brand__certificates').appendTo('.brand-info');
		}
	};


	//слайдер преимуществ (category.html)
	let categorySlider = function() {
		$('.js-category-slider').slick({
			slidesToShow: 6,
			dots: true,
			arrows: false,
			appendDots: '.category-slider__dots',
			customPaging: function(slider, i) {
				return '<div class="category-slider__dot"></div>';
			},
			responsive: [
				{
					breakpoint: 1140,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				}
			]
		});
	};

//перемещает сертификат из правой части страницы в левую при разрешении от 1140 до 767
$(window).on('resize', function() {
	let brandInfo = function() {
		if ($(window).width() < 1140 && $(window).width() > 767) {
			$('.brand__certificates').appendTo('.brand-info__tablet');
		} else {
			$('.brand__certificates').appendTo('.brand-info');
		}
	};
	brandInfo();
});

//при расширении экрана <1139px && > 767px самое самое верхнее меню укорачивается и вставляются точки для раскрытия скрытых элементов меню
let tabletSubNavMenu = function() {
	$(document).on('click','.inform-nav__tablet-toggle', function() {
		$(this).toggleClass('inform-subnav--open');
	});
};


//фильтры слева на странице category.html показывают варианты и ставят выбранный вариант в поле по умолчанию
let categorySelectFilters = function() {
	$(document).on('click','.select__header', function() {
		$(this).parent().toggleClass('select--open')
	});
	$(document).on('click','.select-list__item', function() {
		let current = $(this).closest('.select').find('.select__current')[0];
		$(this).closest('.select').removeClass('select--open');
		$(current).text($(this).text());
	});
};

//адаптивное скрытое меню для фильтров категорий category.html 
let filterToggle = function() {
	$(document).on('click', '.filter-mobile__toggle', function() {
		$('.filter').addClass('filter--open');
	});
	$(document).on('click', '.filter-mobile__close', function() {
		$('.filter').removeClass('filter--open');
	});
};

//слайдер с превьюшками товара в product.html
let productSlider = function() {
	$('.js-product-slider-dots').slick({
		asNavFor: '.js-product-slider',
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		prevArrow: '.product-slider-dots__btn--prev',
		nextArrow: '.product-slider-dots__btn--next',
		focusOnSelect: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 768,
				settings: "unslick"
			}
		]
	});
	$('.js-product-slider').slick({
		asNavFor: '.js-product-slider-dots',
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: false
	});
};

//добавляет класс к активному выбранному элементу цвета в product.html и category.html
let colorClicked = function() {
	$(document).on('click', '.color-list__item', function() {
		$(this).addClass('color-list__item--active').siblings().removeClass('color-list__item--active');
	});
};


//гист с гитхаба Farcer для скролла к элементу страницы (в данном случае до похожих товаров)
let scrolllToElement = function() {
	$('.scroll-link')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 50
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        }
                        ;
                    });
                }
            }
	});
} 

//адаптив product.html
let productFooterTablet = function() {
	if(window.innerWidth < 1140) {
		$('.product-info__footer').appendTo('.product__header');
	}
};

let productDetailTablet = function() {
	if(window.innerWidth < 1140) {
		$('.product-info__footer').appendTo('.product__header');
		$('.product-info__footer').prependTo('.product__header');
	}
}


	//вызов всех написанных функций в одном месте (не знаю пока насколько это граммотно, может быть, размещать каждый вызов под каждой конкретной функцией, которую он вызывает?)
	catalogNavHover();
	openSearchForm();
	clearSearchForm();
	bannerSlider();
	tabs();
	productPrevSlider();
	productLineSlider();
	productBorderLineSlider();
	mobileMenu();
	brandInfo();
	categorySlider();
	tabletSubNavMenu();
	categorySelectFilters();
	filterToggle();
	productSlider();
	colorClicked();
	scrolllToElement()
	productFooterTablet();
});

//прелоадер крутится
$(window).on('load', function() {
	$('.sk-circle').fadeOut();
	$('.preloader').delay(400).fadeOut("slow");
	$("html").removeClass("fixed");
});


//полифилы для IE11
(function () {
	if (!Element.prototype.closest) {
		var node = this;
		while (node) {
			if (node.matches(css)) return node;
			else node = node.parentElement;
		}
		return null;
	};
})();
(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();