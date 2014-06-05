
karma-jsmockito-jshamcrest
================

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