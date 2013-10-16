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
		top:'5%'			
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
	    left:'25dp'
    });
		
	playerControls.add(buttonPLayPause);
	playerControls.add(volumeControl);			
	
	//Se agrega el streaming
    var audioPlayer = Ti.Media.createAudioPlayer({ 
    	url: 'http://1071.live.streamtheworld.com/ADNCMP3',
    	//url: 'http://maalto-systems.com/eduardo/musica/LightningBolt.mp3',
    	allowBackground: true
	});
	
	//Evento Play - Stop
	buttonPLayPause.addEventListener('click',function(e) {
		
	    if (audioPlayer.playing)
	    {
	    	buttonPLayPause.setBackgroundImage('../images/playButton70x70.png');
	        audioPlayer.stop();
	        
	        if (Ti.Platform.name === 'android')
	        { 
	            audioPlayer.release();
	        }   
	    }
	    else
	    {
	        audioPlayer.start();
	        buttonPLayPause.setBackgroundImage('../images/pauseButton70x70.png');
	    }
	});
	
	//Detener el audio cuando se cierra la ventana
	playerControls.addEventListener('close',function() {
	    audioPlayer.stop();
	    if (Ti.Platform.osname === 'android')
	    { 
	        audioPlayer.release();
	    }
	});
