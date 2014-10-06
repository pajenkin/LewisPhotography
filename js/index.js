//This is the javascript file
$(document).ready(function(){
	initImages();
	setBackgroundImageRotation();
});

var imageArr = ['img/lewis_photo_1.JPG', 'img/lewis_photo_3.JPG', 'img/lewis_photo_4.JPG', 'img/lewis_photo_5.jpg']
var counter = 0;
var fadeTimer = 1000;
var duration = 10000;

function initImages(){
	if(imageArr.length != 0){
		returnHtml = '';
		for( var i = 0 ; i < imageArr.length ; i++ ){
			if( i == 0 ){
				returnHtml += returnImageHtml(imageArr[i], 'photo-background-visible first-photo');
			}else{
				returnHtml += returnImageHtml(imageArr[i], 'photo-background-hidden');
			}
		}
		$('.background-image-index').html(returnHtml);
	}
}

function setBackgroundImageRotation(){
	var visibleImage = $(".photo-background-visible");
	setTimeout(function(){
		if(visibleImage.is(":last-child")){
			visibleImage.fadeOut(function(){
				$(".first-photo").fadeIn('slow', function(){
					$(this).toggleClass('photo-background-visible photo-background-hidden');
					visibleImage.toggleClass('photo-background-visible photo-background-hidden');
				});
			});
		}else{
			visibleImage.fadeOut(function(){
				visibleImage.next().fadeIn('slow', function(){
					$(this).toggleClass('photo-background-visible photo-background-hidden');
					visibleImage.toggleClass('photo-background-visible photo-background-hidden');
				});
			});
		};
		//console.log("This is the ticker");
		setBackgroundImageRotation();
	}, duration);
};

function returnImageHtml(imageSrc, imageClass){
	return '<img class="img-responsive ' + imageClass + '" src="' + imageSrc +'" alt="pilot_img-responsive photography">';
}

// function changeBackgroundImage(src){
// 	var image = new Image();
// 	image.src = src;
// 	//image.setAttribute('class', 'img-responsive');
// 	$(".background-image-index").html(image);
// 	//$(".main-container").css('background-image','url(' +  src + ')');
// };