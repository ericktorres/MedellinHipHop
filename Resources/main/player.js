/*
* Medellin Hip Hop Radio
* Made by Maalto Systems
* ericktorres87@gmail.com
*/                
                
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
        	max:1,
	        width:'65%',
	        value:.5,
	        left:'25dp'
    	});
                
        playerControls.add(buttonPLayPause);
        playerControls.add(volumeControl);                        
        
        /**
         *Funcionalidad buttonPLayPause
         *Iniciar/Detener el streaming de audio
         */
    	var audioPlayer = Ti.Media.createAudioPlayer({            
            url: 'rtsp://178.33.114.181:1935/sferamedia/medellinhiphop',            
            volume: .5,
            allowBackground: true
        });
        
        //Evento Play - Stop
        buttonPLayPause.addEventListener('click', function(e){
	        if (audioPlayer.playing){
	        	buttonPLayPause.setBackgroundImage('../images/playButton70x70.png');
	         	audioPlayer.stop();        
	         	if (Ti.Platform.name === 'android'){
	         		audioPlayer.release();
	         	}
	        }
	        else{
	        	audioPlayer.start();
	        	buttonPLayPause.setBackgroundImage('../images/pauseButton70x70.png');
	        }
        });
        
        //Detener el audio cuando se cierra la ventana
        playerControls.addEventListener('close',function() {
        	audioPlayer.stop();
         	if (Ti.Platform.osname === 'android'){
         		audioPlayer.release();
         	}
        });
        
        /**
         *Funcionalidad volumeControl
         *Aumentar/Disminuir el volumen del streaming
         */
        
        volumeControl.addEventListener('change',function(e) {
        	var volume = this.value;
            //Ti.API.info('Valor del slider: ' + volume.toFixed(2));
            audioPlayer.setVolume(volume.toFixed(2));
        });
        