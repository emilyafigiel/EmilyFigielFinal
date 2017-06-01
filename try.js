var randomAnswer= ["West End Johnnies<hr>You are the life of the party. If you feel yourself staring at the clock waiting to get out of work and out on that dance floor, this bar is for you. If you can get yourself out of bed on Sunday, their Reggae Brunch will blow you away.", "By Chloe<hr>Trendy, healthy and adventurous. Carnivores and Vegans can both rejoice!  You have probably been seen instagramming the food here and you're not ashamed. Their Seaport location is brand new and will be sure to impress; whether you get a burger or juice, By Chloe might just make a vegan out of the pickiest eaters.", "Lincoln<hr>Located on West Broadway, in Southie, this restaurant has a heavy social media presence, promoting their Brunch Test Kitchen starting every Friday. Lincoln is a hot spot for any young professional living in the South Boston area, whether you decide on one of their brick oven pizzas or just a cocktail, you are sure to be back for more.  If you are more of a night owl, you might want to bring a snack, the line to get in on weekends is crazy"];
var randomNumber= Math.random ();
var results;

if (randomNumber<0.2) {
	results= randomAnswer[0];
	console.log (randomNumber);
}

else if (randomNumber<0.46) {
	results= randomAnswer[1];
	console.log (randomNumber);
}

else {
	results= randomAnswer[2];
	console.log (randomNumber);
}

$("#resultpage").html(results);
