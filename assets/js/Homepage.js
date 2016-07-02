$(document).ready(function(){

    console.log("Getting Homepage");

    var ChampionList = "../info/champList.json";
    var RandomChampNumber = Math.floor((Math.random() * 133) + 1);
    $.getJSON(ChampionList, function(Data){
        console.log("Received champion list");
        console.log(Data);
		var RandomChampKey = Object.keys(Data.data)[RandomChampNumber];
		console.log(RandomChampKey);
		var RandomSplashUrl = "../images/ChampionSplashes/";
		RandomSplashUrl = RandomSplashUrl + RandomChampKey + "_Splash_0.jpg";
		console.log(RandomSplashUrl);
		$(".site-wrapper-inner").css('background-image', 'url('+ RandomSplashUrl +')');
		$(".site-wrapper-inner").css('background-repeat', 'no-repeat');
		//$(".site-wrapper-inner").css('background-attachment', 'fixed');
		$(".site-wrapper-inner").css('background-position', 'center');
		$(".site-wrapper-inner").css('opacity', '0.95');
		$(".site-wrapper-inner").css('background-size', '80% 100%');
	});
});