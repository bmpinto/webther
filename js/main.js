requirejs.config({
	paths: {
		jquery: 'libs/jquery',
		underscore: 'libs/underscore'
	}
});

require(['app'], function(App){
	App.initialize();
});