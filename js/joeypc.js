//	joeypc JS/jQuery framework http://joeypc.com version 0.0.6 //
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

function joeypc_change_background(color) {   		
	console.log('joeypc user-set background changer runnning');
	var randomNumber = color;
  	$( "body" ).css( "background-color", randomNumber );
    console.log("changing background to " + randomNumber);
										}

function joeypc_change_text_color(color) {   		
	console.log('joeypc user-set background changer runnning');
	var randomNumber = color;
  	$( "body" ).css( "color", randomNumber );
    console.log("changing text color to " + randomNumber);
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

function joeypc_random_reddish_text() 		{
	var randomNumber = "#FF";

	while (randomNumber.length != 7) {
		console.log('joeypc random reddish text runnning');
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
	    		
function joeypc_reload_page() {
	    	document.location.reload(true);			
	    						}

function joeypc_random_colors_yellow_red() {
	joeypc_random_yellow_text();
	joeypc_random_reddish_light_background();
	var randomNumber = "#FFFF";
		console.log('joeypc random yellow link color (subroutine) runnning');
		for (i = 0; i < 2; i++) {
			var digit = Math.floor((Math.random() * 9) + 1);
			randomNumber = randomNumber + digit;
								}
		$( "a" ).css( "color", randomNumber );
	    console.log("changing link text color to " + randomNumber);
											}

function joeypc_random_dark_text() {
	var randomNumber = "#2222";
		console.log('joeypc random dark text runnning');
		for (i = 0; i < 2; i++) {
			var digit = Math.floor((Math.random() * 9) + 1);
			randomNumber = randomNumber + digit;
								}
		$( "body" ).css( "color", randomNumber );
	    console.log("changing text color to " + randomNumber);
									}

function joeypc_random_light_background() {
	var randomNumber = "#FFF";
		console.log('joeypc random light background runnning');
		for (i = 0; i < 3; i++) {
			var digit = Math.floor((Math.random() * 9) + 1);
			randomNumber = randomNumber + digit;
								}
		$( "body" ).css( "background-color", randomNumber );
	    console.log("changing text color to " + randomNumber);
									}

function joeypc_random_dark_links() {
	var randomNumber = "#2222";
		console.log('joeypc random dark link runnning');
		for (i = 0; i < 2; i++) {
			var digit = Math.floor((Math.random() * 9) + 1);
			randomNumber = randomNumber + digit;
								}
		$( "a" ).css( "color", randomNumber );
	    console.log("changing link color to " + randomNumber);
									}

function joeypc_new_random_light_background() {
	var randomNumber = "#F";
		console.log('joeypc new random light background runnning');
		for (i = 0; i < 1; i++) {
			var digit = Math.floor((Math.random() * 9) + 1);
			randomNumber = randomNumber + digit;
								}
		randomNumber = randomNumber + "F";
		for (i = 0; i < 1; i++) {
			var digit = Math.floor((Math.random() * 9) + 1);
			randomNumber = randomNumber + digit;
								}
		randomNumber = randomNumber + "F";
		for (i = 0; i < 1; i++) {
			var digit = Math.floor((Math.random() * 9) + 1);
			randomNumber = randomNumber + digit;
								}
		$( "body" ).css( "background-color", randomNumber );
	    console.log("changing background color to " + randomNumber);
									}

function joeypc_random_pink_background() {
	var randomNumber = "#F";
		console.log('joeypc new random light background runnning');
		for (i = 0; i < 1; i++) {
			var digit = Math.floor((Math.random() * 9) + 1);
			randomNumber = randomNumber + digit;
								}
		randomNumber = randomNumber + "F";
		$( "body" ).css( "background-color", randomNumber );
	    console.log("changing text color to " + randomNumber);
									}

function joeypc_random_dark_text_on_light_background_with_dark_links() {
	joeypc_random_dark_text();
	joeypc_new_random_light_background();
	joeypc_random_dark_links();
																	}

function joeypc_get_longest_word_in_sentence(string) {
	var string1 = string;
	var leng = string1.length
	var wordbox = [];
	var wordboxcount = 0;
	for (i=0; i<leng; i++) {
		if (string1[i] == " ") {
			// mark this as space between the end of a word, beginning of another
			wordboxcount++;
		}
		if (string1[i] != " ") {
			// absorb this string into the current word
			if (wordbox[wordboxcount]) {
			wordbox[wordboxcount] = wordbox[wordboxcount] + string1[i];
										}
			else  {
			wordbox[wordboxcount] = string1[i];
										}
		}
	}
	var leng2 = wordbox.length;
	var currentMax = 0;
	var longest;
	var newlimit = 0;
	for (i=0; i<leng2; i++) {
			if (wordbox[i]) {
		leng3 = wordbox[i].length;
		if (leng3 > currentMax) {	
			longest = wordbox[i];
			currentMax = wordbox[i].length;
							}
								}
							}
	return longest;
													}

joeypc();
