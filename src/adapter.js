/**
 * Created by stephen.hand on 04/06/2014.
 */
(function(window) {
	JsHamcrest.Integration.copyMembers(window);
	JsMockito.Integration.importTo(window);
	window.assertThat = function(actualValue, matcherOrValue, message) {
		JsHamcrest.Operators.assert(actualValue, matcherOrValue, {
			message: message,
			fail: function (msg) {
				throw new Error(msg);
			}
		});
	}
})(window);