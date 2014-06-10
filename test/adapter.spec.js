/**
 * Created by stephen.hand on 04/06/2014.
 */
describe("adapter.js", function(){
	it("adds JsMockito function mocking to the root window object", function(){
		var mf = mockFunction();
		when(mf)().then(function(){return "RESULT";});
		mf();
		verify(mf)();
	});
	it("adds JsMockito object mocking to the root window object", function(){
		var objClass = function(){};
		objClass.prototype.method1 = function(){};
		objClass.prototype.method2 = function(){};
		var mockInstance = mock(objClass);
		when(mockInstance).method1().then(function(){return "RESULT";});
		mockInstance.method1();
		verify(mockInstance).method1();
	});
    it("adds _when alias of JsMockito.when for CoffeeScript (where 'when' is a reserved keyword)", function(){
        var objClass = function(){};
        objClass.prototype.method1 = function(){};
        var mockInstance = mock(objClass);
        _when(mockInstance).method1().then(function(){return "RESULT";});
        mockInstance.method1();
        verify(mockInstance).method1();
    });
	it("adds JsHamcrest matchers to root window object", function(){
		if (!equalTo(4).matches(4)){throw new Error("equalTo matcher failed")};
		if (!nil().matches()){throw new Error("nil matcher failed")};
		if (!anything().matches()){throw new Error("anything matcher failed")};
		if (!raisesAnything().matches(function(){throw new Error()})){throw new Error("raisesAnything matcher failed")};
		if (!hasMember("six", 6).matches({six:6})){throw new Error("hasMember matcher failed")};
		if (!func().matches(function(){})){throw new Error("nil matcher failed")};
	});

	it("adds assertThat function to root window object", function(){
		if (!func().matches(assertThat)){throw new Error("assertThat function not created")};
	});
	describe("assertThat", function(){
		it("should throw if passed no parameters", function(){

			if (!raisesAnything().matches(function(){assertThat();})){ throw new Error("paramaterless call did not assert"); }
		});
		it("should do nothing if passed one 'truthy' parameter", function(){
			assertThat({});
			assertThat(13);
			assertThat("thirteen");
			assertThat(true);
		});
		it("should throw an exception if passed a 'falsey' single parameter", function(){
			if (!raisesAnything().matches(function(){assertThat(void(0));})){ throw new Error("single undefined parameter did not assert"); }
			if (!raisesAnything().matches(function(){assertThat("");})){ throw new Error("single empty string parameter did not assert"); }
			if (!raisesAnything().matches(function(){assertThat(0);})){ throw new Error("single zero parameter did not assert"); }
			if (!raisesAnything().matches(function(){assertThat(null);})){ throw new Error("single null parameter did not assert"); }
			if (!raisesAnything().matches(function(){assertThat(false);})){ throw new Error("single false parameter did not assert"); }
		});
		it("should do nothing if passed a value and a JsHamcrest matcher that matches the first value", function(){
			assertThat(void(0), nil());
			assertThat(function(){}, func());
		});
		it("should throw an exception if passed a value and a JsHamcrest matcher that doesn't match the first value", function(){
			if (!raisesAnything().matches(function(){assertThat({}, hasMember("anything"));})){ throw new Error("hasMember mismatch did not throw"); }
			if (!raisesAnything().matches(function(){assertThat(1337, func());})){ throw new Error("func mismatch did not assert"); }
		});
		it("should treat non matchers in second parameter as 'equalTo' matchers taking value supplied", function(){
			assertThat("A STRING", "A STRING");
			if (!raisesAnything().matches(function(){assertThat(1337, 666);})){ throw new Error("implicit equalTo mismatch did not assert"); }
		});
	});
});