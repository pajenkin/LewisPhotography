//This is the javascript file
$(document).ready(function(){
	setBackgroundImageRotation();
});

var counter = 0;
var fadeTimer = 1000;
var duration = 10000;

function setBackgroundImageRotation(){
	var visibleImage = $(".photo-background-visible");
	setTimeout(function(){
		visibleImage.toggleClass('photo-background-visible photo-background-hidden')
		if(visibleImage.is(":last-child")){
			$('.first-photo').toggleClass('photo-background-visible photo-background-hidden');
		}else{
			visibleImage.next().toggleClass('photo-background-visible photo-background-hidden')
		};
		console.log("This is the ticker");
		setBackgroundImageRotation();
	}, duration);
};

// function changeBackgroundImage(src){
// 	var image = new Image();
// 	image.src = src;
// 	//image.setAttribute('class', 'img-responsive');
// 	$(".background-image-index").html(image);
// 	//$(".main-container").css('background-image','url(' +  src + ')');
// };