define([], function () {
	var counter = 0;

	return {
		getUId: function () {
			counter += 1;

			return '' + counter + '__' + Math.random().toString(36).slice(2);
		}
	};
});
