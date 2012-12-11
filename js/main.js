requirejs.config({
	baseUrl: './js',
	paths: {
		jquery:		'libs/jquery',
		underscore: 'libs/underscore',
		debounce:	'libs/debounce'
	},

	shim: {
		'debounce': {
			deps: ['jquery']
		}
	}
});

require(['app'], function(App){
	App.initialize();
});