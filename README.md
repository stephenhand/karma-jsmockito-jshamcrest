
karma-jsmockito-jshamcrest
==========================

  * [JsMockito](http://jsmockito.org)
  * [JsHamcrest](http://www.danielfm.me/jshamcrest/)

for [Karma](http://karma-runner.github.io)

Requirements
------------

This Karma plugin requires Karma `>=0.10`

Installation
------------

Install the module via npm

```sh
$ npm install karma-jsmockito-jshamcrest
```

or include it in your project's package.json alongside karma.

Add `jsmockito-jshamcrest` to the `frameworks` key in your Karma configuration:

```js
module.exports = function(config) {
  'use strict';
  config.set({
    frameworks: ['mocha', 'jsmockito-jshamcrest'],
    #...
  });
}
```



Usage
-----

Once installed, the JsHamcrest & JsMockito libraries will be available to use in your tests run under karma without having to load them into the browser as part of your test project.
All JsMockito and JsHamcrest functions will be available in the global scope (window) just as if they had been installed using the integration functions, so all the usage examples found on their homepages above apply.
Also, it adds an 'assertThat' function with the following signature:

```js
function assertThat(actualValue, matcherOrValue, message){...
```

This matches those installed in other frameworks using the JsHamcrest integration functions and means the 'assertThat' examples provided in the API docs work as expected.

CoffeeScript
------------

By default, JsMockito's 'when' function is put in the global (window) scope. This can cause issues when trying to use it in CoffeeScript where 'when' is a reserved keyword. 

Whilst you can always work around this by explicitly referencing 'JsMockito.when' where required, this can get a little verbose so this plugin also aliases 'JsMockito.when' to '_when' for convenience.


Note
----

this plugin is purely for mocking and assertions, it does not provide any libraries for defining tests and test suites, a plugin providing this needs to be included separately. [karma-mocha](https://www.npmjs.org/package/karma-mocha) for Mocha or [karma-jasmine](https://www.npmjs.org/package/karma-jasmine) for Jasmine are both excellent options.