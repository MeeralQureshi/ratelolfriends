$(document).ready(function(){


    console.log("Getting Signup Page");

    var ChampionList = "/info/champList.js";
    var RandomChampNumber = Math.floor((Math.random() * 133) + 1);
    $.getJSON(ChampionList, function(Data){
        console.log("Received champion list");
        console.log(Data);
		var RandomChampKey = Object.keys(Data.data)[RandomChampNumber];
		console.log(RandomChampKey);
		var RandomSplashUrl = "/images/ChampionSplashes/";
		RandomSplashUrl = RandomSplashUrl + RandomChampKey + "_Splash_0.jpg";
		console.log(RandomSplashUrl);
		$(".site-wrapper-inner").css('background-image', 'url('+ RandomSplashUrl +')');
		$(".site-wrapper-inner").css('background-repeat', 'no-repeat');
		//$(".site-wrapper-inner").css('background-attachment', 'fixed');
		$(".site-wrapper-inner").css('background-position', 'center');
		$(".site-wrapper-inner").css('opacity', '0.95');
		$(".site-wrapper-inner").css('background-size', '80% 100%');
	});

	function checkPasswordsMatch(){
		console.log("Checking Passwords");
		var Password1 = $("#password").val();
		var Password2 = $("#verifyPassword").val();
		if(Password1 != Password2){
			$("#passwordCheck").html("<p style=\"color: red\"> Passwords do not match! <i class=\"fa fa-exclamation\" aria-hidden=\"true\" style=\"color: red\"></i></p>");
			$('#registerButton').prop('disabled', true);
		}
		else{
			$("#passwordCheck").html("<p style=\"color: green\"> Passwords match!<i class=\"fa fa-check\" aria-hidden=\"true\" style=\"color: green\"></i></p>");
			$('#registerButton').prop('disabled', false);
		}
	}

	$("#inputPassword").keyup(checkPasswordsMatch);
	$("#verifyPassword").keyup(checkPasswordsMatch);

});
