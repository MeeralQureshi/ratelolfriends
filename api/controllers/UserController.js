/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addUser: function(request, response, next){
		console.log("Reached Add User function");
		console.log(request.allParams());

		// Find matching user names
		User.find({username: request.param("username")}).exec(function (err, usersCheck){
			console.log(usersCheck);
			console.log(request.allParams());
			if (err){
				return response.negotiate(err);
			}
			console.log("There are %d users with the same username: ", usersCheck.length, usersCheck);
			
			if(usersCheck.length == 0){
				console.log("This username doesn't exist: Adding");

				// TODO: Need to encrypt password
				User.create({username: request.param("username"), password: request.param("password"), 
					summonerName: request.param("summonerName"), email: request.param("email")}).exec(function (error, newUser){
						if(error){
							console.log("NOT Succcessful");
							console.log(error);
							return response.redirect("/userAddFail");
						}
						console.log("Successful");
					});
				return response.redirect("/userAddSuccess");

				// return response.ok();
			}
			else{
				console.log("This username exists: Don't add");
				return response.redirect("/userAddFail");
				// return response.ok();
			}
		});
	}
};

