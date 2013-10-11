/*
 * Medellin Hip Hop Radio
 * Made by Maalto Systems
 * ericktorres87@gmail.com 
 */

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
		curve: Titanium.UI.ANIMATION_CURVE_LINEAR
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
	
	contentTitle.add(nameApp);
	contentTitle.add(nameSong);
	
	mainView.add(contentTitle);
	mainView.add(coverTrack);
	
	win.add(mainView);
