/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// addUser: function(request, response){
	// 	console.log("Reached Add User function");
	// 	console.log(request.allParams());

	// 	// Find matching user names
	// 	User.find({username: request.param("username")}).exec(function (err, usersCheck){
	// 		console.log(usersCheck);

	// 		if (err){
	// 			return response.negotiate(err);
	// 		}
	// 		console.log("There are %d users with the same username: ", usersCheck.length, usersCheck);
			
	// 		if(usersCheck.length == 0){
	// 			console.log("This username doesn't exist: Adding");

	// 			// Need to encrypt password
	// 			User.create({username: request.param("username"), password: request.param("password"), 
	// 				summoner: request.param("summoner"), email: request.param("email")}).exec(function (error, newUser){
	// 					if(error){
	// 						console.log("NOT Succcessful");
	// 						return response.badRequest(error);
	// 					}
	// 					console.log("Successfull");
	// 				});
	// 			response.sendfile(sails.config.appPath + '/assets/index.html');
	// 			// return response.ok();
	// 		}
	// 		else{
	// 			console.log("This username exists: Don't add");
	// 			response.sendfile(sails.config.appPath + '/assets/userExists.html');
	// 			// return response.ok();
	// 		}
	// 	});
	// }
};

