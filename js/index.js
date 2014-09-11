//This is the javascript file
$(document).ready(function(){
	setBackgroundImageRotation();
});

var counter = 0;
var fadeTimer = 1000;
var duration = 5000;
var images = ['img/DSC00229.jpg', 'img/11.jpg', 'img/18.jpg'];

function setBackgroundImageRotation(){
	changeBackgroundImage(images[counter]);
	if(counter == images.length - 1){
		counter = 0;
	};
	counter++;
	setTimeout(function(){
		console.log("This is the ticker");
		setBackgroundImageRotation();
	}, 5000);
};

function changeBackgroundImage(src){
	var image = new Image();
	image.src = src;
	//image.setAttribute('class', 'img-responsive');
	$(".background-image-index").html(image);
	//$(".main-container").css('background-image','url(' +  src + ')');
};