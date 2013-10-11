/*
 * Medellin Hip Hop Radio
 * Made by Maalto Systems
 * ericktorres87@gmail.com 
 */

	Ti.include('player.js');
	
	var win = Ti.UI.currentWindow;
	
	var mainView = Ti.UI.createView({
		width:'100%',
		height:'100%',
		backgroundColor:'#454B48',
		layout:'vertical'
	});
	
	var contentTitle = Ti.UI.createView({
		width:'100%',
		height:'60dp',
		backgroundColor:'#000000',
		layout:'vertical'
	});
	
	var nameApp = Ti.UI.createLabel({		
		color:'#61C300',
		font:{ fontWeight:'bold', fontSize:'16dp'},		
		text:'MEDELLIN HIP HOP',
		top:'5dp'
	});
	
	var nameSong = Ti.UI.createLabel({
		text:'Nombre de la rola',
		width:'100%',		
		color:'#FFFFFF',
		font:{ fontWeight:'bold', fontSize:'14dp'},
		left:'320dp'		
	});
	
	var animation = Ti.UI.createAnimation({
		left:'-430dp',
		duration:5000,
		curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
		repeat:30
	});
	
	animation.addEventListener('complete', function(){		
		nameSong.left = '320dp';
		nameSong.animate(animation);
	});
	
	nameSong.animate(animation);
	
	var coverTrack = Ti.UI.createImageView({
		image:'../images/coverTrackDefault.png',
		width:'280dp',
		height:'280dp',
		top:'20dp'
	});
	
	var socialContainer = Ti.UI.createView({
		width:'100%',
		height:'50dp',
		layout:'horizontal',
		top:'5%'
	});
	
	var containerShare = Ti.UI.createView({ width:'33.33%' });
	var share = Ti.UI.createButton({
		backgroundImage: '../images/share70x70.png',
		backgroundSelectedImage:'../images/shareOver70x70.png',
		width:'40dp',
		height:'40dp'		
	});
	containerShare.add(share);
	
	var containerInstagram = Ti.UI.createView({ width:'33.33%' });
	var instagram = Ti.UI.createButton({
		backgroundImage: '../images/instagram70x70.png',
		backgroundSelectedImage:'../images/instagramOver70x70.png',
		width:'40dp',
		height:'40dp'		
	});
	containerInstagram.add(instagram);
	
	var containerYotube = Ti.UI.createView({ width:'33.33%' });
	var youtube = Ti.UI.createButton({
		backgroundImage: '../images/youtube70x70.png',
		backgroundSelectedImage:'../images/youtubeOver70x70.png',
		width:'40dp',
		height:'40dp'		
	});
	containerYotube.add(youtube);
	
	socialContainer.add(containerShare);
	socialContainer.add(containerInstagram);
	socialContainer.add(containerYotube);
	
	contentTitle.add(nameApp);
	contentTitle.add(nameSong);
	
	mainView.add(contentTitle);
	mainView.add(coverTrack);
	mainView.add(socialContainer);
	mainView.add(playerControls);
	
	win.add(mainView);
