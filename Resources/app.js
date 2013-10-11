/*
 * Medellin Hip Hop Radio
 * Made by Maalto Systems
 * ericktorres87@gmail.com 
 */

	var winLoading = Ti.UI.createWindow({
		url: 'loading/loading.js',
		navBarHidden: true,		
		fullscreen:true,
		orientationModes: [
			Ti.UI.PORTRAIT,
			Ti.UI.UPSIDE_PORTRAIT
		],	
	});
	
	winLoading.open();
