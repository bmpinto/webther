requirejs.config({
	baseUrl: './js',
	paths: {
		jquery:		'libs/jquery'
	}
});

require(['app'], function(App){
	App.initialize();
});