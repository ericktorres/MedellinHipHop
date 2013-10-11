/*
 * Medellin Hip Hop Radio
 * Made by Maalto Systems
 * ericktorres87@gmail.com 
 */

	var mainWindow = Ti.UI.createWindow({
		url: 'main/main.js',
		navBarHidden: true,
		exitOnClose: true,
		fullscreen:true	
	});
	
	var win = Ti.UI.currentWindow;
	
	var logoMHH = Ti.UI.createImageView({
		image: '../images/logoSplashScreen.png',
		width:'300dp',
		height:'236dp'
	});
	
	var progressBar = Ti.UI.createProgressBar({
		width:'250dp',
		height:'auto',
		color:'#FFFFFF',
		min:0,
		max:10,
		value:0,
		//message:'Loading',
		font:{fontSize:14, fontWeight:'bold'},
		bottom:'30dp'
	});		
	
	win.add(logoMHH);
	win.add(progressBar);	
	
	win.addEventListener('open', function(){
		progressBar.show();
		var value = 0;
		setInterval(function(){
			if(value > 10){				
				mainWindow.open();
			}
			progressBar.value = value;
			value++;
		}, 200);
		setTimeout(function(){
			progressBar.hide();
		}, 3000);
	});
	
