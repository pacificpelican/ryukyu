//	joeypc JS/jQuery framework http://joeypc.com version 0.0.1 //
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

joeypc();
