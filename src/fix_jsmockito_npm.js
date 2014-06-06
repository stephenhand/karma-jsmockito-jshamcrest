(function(){
    var __require = window.require;
    window.require = function(){
        if (arguments[0]==="jshamcrest" && arguments.length === 1){
            window.require = __require;
            return window;
        }
        else if (typeof __require !== 'undefined'){
            __require.apply(this, arguments);
        };
    };
})();