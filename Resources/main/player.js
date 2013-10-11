/*
 * Medellin Hip Hop Radio
 * Made by Maalto Systems
 * ericktorres87@gmail.com 
 */

	
	/*var player = Ti.Media.createAudioPlayer({
		url:'http://audio3.streamingfrankyessi.com:7720'
	});
	
	player.start();*/
		
	var playerControls = Ti.UI.createView({
		width:'90%',
		layout:'horizontal',
		top:'15dp'			
	});
		
	var buttonPLayPause = Ti.UI.createButton({
		backgroundImage:'../images/playButton70x70.png',
		width:'60dp',
		height:'60dp'
	});
	
	var volumeControl = Titanium.UI.createSlider({	    
	    min:0,
	    max:100,
	    width:'65%',
	    value:50,
	    left:'20dp'
    });
		
	playerControls.add(buttonPLayPause);
	playerControls.add(volumeControl);			
	
	
	
