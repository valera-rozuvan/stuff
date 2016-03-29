define(
	['jquery', 'underscore', 'custombox', 'isotope', 'auto_image_resize', 'text!templates/index_page.html'],
	function($, _, Custombox, Isotope, autoImageResize, htmlSrc)
{
	var pageTemplate = _.template(htmlSrc),
		pageEl = $(pageTemplate()),

		bg_01_hash, logo_hash;

	$("#temp_div_preloader").fadeOut(1000, function() {
		var customModalShow = {
			'1': 'fadein',
			'2': 'slide',
			'3': 'fall',
			'4': 'door',
			'5': 'rotate'
		};
		$(this).remove();

		$('body').append(pageEl);

		$('#fullpage').fullpage({
			sectionsColor: ['#ffffff', '#ced0cf', '#7BAABE', 'whitesmoke', 'whitesmoke', 'darkgray', '#305050', '#FF8C00'],
			anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage', '8thPage'],
			menu: '#menu',
			resize: false,
			continuousVertical: false,
			verticalCentered: false,
			navigation: false,
			keyboardScrolling: false,
			afterResize: function () {
				autoImageResize.resizeImages();
			},
			afterRender: function () {
				window.setTimeout(function () {
					$.fn.fullpage.moveSectionDown();
				}, 1500);
			}
		});

		logo_hash = autoImageResize.addToResizeQueue($('#logo_img'), $('#section0'));
		autoImageResize.resizeImageByHash(logo_hash);

		bg_01_hash = autoImageResize.addToResizeQueue($('#bg_01_img'), $('#section1'));
		autoImageResize.resizeImageByHash(bg_01_hash);

		_.each(['1', '2', '3', '4', '5'], function (element, index, list) {
			var containerId = '#offer_' + element,
				imgId = '#offer_' + element + '_img',

				containerEl = $(containerId),
				imgEl = $(imgId),
				imgElImg = $(imgId).find('img');

			containerEl.hover(function () {
				imgElImg.fadeTo('fast', 1);
			}, function () {
				imgElImg.fadeTo('fast', 0.45);
			});

			$('#modal_' + element).find('button').click(function (event) {
				Custombox.close();
				event.preventDefault();
			});

			containerEl.click(function (event) {
	            Custombox.open({
	                target: '#modal_' + element,
	                effect: customModalShow[element]
	            });
	            event.preventDefault();
			});
		});

		// require jquery-bridget, it's included in isotope.pkgd.js
		require( [ 'jquery-bridget/jquery.bridget' ],
			function() {
				// make Isotope a jQuery plugin
				$.bridget( 'isotope', Isotope );
				// now you can use $().isotope()
				$('#grid1_id').isotope({
				  itemSelector: '.grid-item',
				  layoutMode: 'fitRows'
				});
			}
		);
	});
});
