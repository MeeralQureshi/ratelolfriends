/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getRandomHomepageSplash: function(request, response) {
		console.log("Reached Homepage Splash")
		// Generate random number between 1 and 131
		var RandomChampNumber = Math.floor((Math.random() * 131) + 1);
		// Request list of Champions
		var ChampionListUrl = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=a2287b3f-deb3-4338-9e33-24e6596db9e9";
		$.ajax(ChampionListUrl).done(function(Data){
			var RandomChampKey = Object.keys(Data)[RandomChampNumber];
			console.log(RandomChampKey);
			var RandomSplashUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
			RandomSplashUrl = RandomSplashUrl + RandomChampKey + "_0.jpg";
			console.log(RandomSplashUrl);
			response.send(RandomSplashUrl);
		});
	}
};

