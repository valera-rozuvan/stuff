define(['jquery', 'underscore', 'gen_uniq_id'], function ($, _, genUniqId) {
	var imgQ = {};

	function resizeImages() {
		_.each(imgQ, function (value, key, list) {
			var img = value.img,
				el = value.el;

			img.css('height', el.height());
		});
	}

	$(window).resize(function() {
		resizeImages();
	});

	return {
		addToResizeQueue: function (img, el) {
			var imgHash = genUniqId.getUId();

			imgQ[imgHash] = {
				img: img,
				el: el
			};

			return imgHash;
		},
		removeFromResizeQueue: function (imgHash) {
			delete imgQ[imgHash];
		},
		resizeImageByHash: function (imgHash) {
			var value = imgQ[imgHash],
				img = value.img,
				el = value.el;

			img.css('height', el.height());
		},
		resizeImages: resizeImages
	};
});
