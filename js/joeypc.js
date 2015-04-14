//	joeypc JS/jQuery framework http://joeypc.com version 0.0.2 //
//  copyright April 2015 by Dan McKeown http://danmckeown.info Licensed under MIT license //

;function joeypc() {
	console.log('joeypc runnning');
					}

function joeypc_random() {
	console.log('joeypc random runnning ');
	var d = new Date();
	var n = d.getSeconds();
	var digit = Math.floor((Math.random() * 67) + 0) + n;
	console.log(digit + "  ");
	return digit;
						}

function joeypc_random_background() {
	console.log('joeypc random background runnning');
	var randomNumber = "#";
	for (i = 0; i < 6; i++) {
		var digit = Math.floor((Math.random() * 9) + 0);
		randomNumber = randomNumber + digit;
							}
 	$( "body" ).css( "background-color", randomNumber );
    console.log("changing background to " + randomNumber);
									}

function joeypc_change_background(color) {   		//	this one still needs testing
	console.log('joeypc user-set background changer runnning');
	var randomNumber = color;
  	$( "body" ).css( "background-color", randomNumber );
    console.log("changing background to " + randomNumber);
											}

function joeypc_random_reddish_light_background() {
	var randomNumber = "#FF";

	while (randomNumber.length != 7) {
		console.log('joeypc random reddish background runnning');
		var randomNumber = "#FF";
		for (i = 0; i < 3; i++) {
			var digit = Math.floor((Math.random() * 9) + 5);

			randomNumber = randomNumber + digit;
								}
	 	$( "body" ).css( "background-color", randomNumber );
	    console.log("changing background to " + randomNumber);
	    							}
									}

function joeypc_random_yellow_background() {
	var randomNumber = "#FFFF";
		console.log('joeypc random yellow background runnning');
		
		for (i = 0; i < 2; i++) {
			var digit = Math.floor((Math.random() * 9) + 1);

			randomNumber = randomNumber + digit;
								}
	 	$( "body" ).css( "background-color", randomNumber );
	    console.log("changing background to " + randomNumber);
	    							}

function joeypc_random_yellow_text() {
	var randomNumber = "#FFFF";
		console.log('joeypc random yellow text runnning');
		
		for (i = 0; i < 2; i++) {
			var digit = Math.floor((Math.random() * 9) + 1);

			randomNumber = randomNumber + digit;
								}
		$( "body" ).css( "color", randomNumber );
	    console.log("changing text color to " + randomNumber);

}

function joeypc_random_reddish_text() {
	var randomNumber = "#FF";

	while (randomNumber.length != 7) {
		console.log('joeypc random reddish background runnning');
		var randomNumber = "#FF";
		for (i = 0; i < 3; i++) {
			var digit = Math.floor((Math.random() * 9) + 5);

			randomNumber = randomNumber + digit;
								}
	 		$( "body" ).css( "color", randomNumber );
	    console.log("changing text color to " + randomNumber);
	    							}
	

}

function joeypc_random_text() {
	var randomNumber = "#";
	console.log('joeypc random text color runnning');
	for (i = 0; i < 6; i++) {
		var digit = Math.floor((Math.random() * 9) + 0);
		randomNumber = randomNumber + digit;
							}
		$( "body" ).css( "color", randomNumber );
	    console.log("changing text color to " + randomNumber);

}

function joeypc_random_link_color() {
	var randomNumber = "#";
	console.log('joeypc random link color runnning');
	for (i = 0; i < 6; i++) {
		var digit = Math.floor((Math.random() * 9) + 0);
		randomNumber = randomNumber + digit;
							}
		$( "a" ).css( "color", randomNumber );
	    console.log("changing text color to " + randomNumber);

}
	    					


joeypc();
