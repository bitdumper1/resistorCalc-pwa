//the values of colors.
var values = {
	'black' : 0.0,
	'brown' : 1.0,
	'red' : 2.0,
	'orange' : 3.0,
	'yellow' : 4.0,
	'green' : 5.0,
	'blue' : 6.0,
	'violet' : 7.0,
	'grey' : 8.0,
	'white' : 9.0,
	'gold' : -1.0,
	'silver' : -2.0
}

//tolerance
var tolerance = {
	'brown' : 1,
	'red' : 2,
	'orange' : 3,
	'yellow' : 4,
	'green' : 0.5,
	'blue' : 0.25,
	'violet' : 0.1,
	'grey' : 0.05,
	'gold' : 5,
	'silver' :10
}

//tempco
var tempco = {
	'brown' : 100,
	'red' : 50,
	'orange' : 15,
	'yellow' : 25,
	'blue' : 10,
	'violet' : 5
}

//return element by id.
function $(a) {
	return document.getElementById(a);
}

//returns element by class name.
function c(a) {
	return document.getElementByClassName(a);
}

//convert the values in K Ohm or M ohm
function convert(val) {
	if (val >= 1000000) {
		val = val/1000000;
		return val.toString() + " M Ohm";
	} else if (val >= 1000) {
		val = val / 1000;
		return val.toString() + " K Ohm";
	} else {
		return val.toString() + " Ohm";
	}
}

//enable or disable options based on number of stirp.
function strips(value) {
	switch (value) {
		case "four":
			//disable unnecessary strip
			$("five").disabled = true;
			$("six").disabled = true;
			$("three").innerHTML = $("multiplier").innerHTML;
			$("four").innerHTML = $("tolerance").innerHTML;
			$("tempco").hidden = true;
			break;
		case "five":
			//disable/enable unnecessary strip
			$("five").disabled = false;
			$("six").disabled = true;
			$("three").innerHTML = $("two").innerHTML;
			$("four").innerHTML = $("multiplier").innerHTML;
			$("five").innerHTML = $("tolerance").innerHTML;
			$("tempco").hidden = true;
			break
		default:
			$("five").disabled = false;
			$("six").disabled = false;
			$("three").innerHTML = $("two").innerHTML;
			$("four").innerHTML = $("multiplier").innerHTML;
			$("five").innerHTML = $("tolerance").innerHTML;
			$("tempco").hidden = false;
			break
	}
}


//calculates the resistance value
function calculate() {
	//4 strip
	if ($('strip').value == "four") {
		//val = (1st digit*10 + 2nd didgit) * 10** 3rd digit
		var val = (values[$('one').value] * 10 + values[$('two').value]) * 10**(values[$('three').value]);
		//properly assign M and K prefix.
		$('value').innerHTML = convert(val) + ' &plusmn' + tolerance[$('four').value] + " %";
	} else if ($('strip').value == "five") {
		//5 strip
		//value calculation
		var val = (values[$('one').value] * 100 + values[$('two').value]*10 + values[$('three').value]) * 10**(values[$('four').value]);
		$('value').innerHTML = convert(val) + ' &plusmn' + tolerance[$('five').value] + " %";
	} else if ($('strip').value == "six") {
		//6 strip
		//value calculation
		var val = (values[$('one').value] * 100 + values[$('two').value]*10 + values[$('three').value]) * 10**(values[$('four').value]);
		$('value').innerHTML = convert(val) + ' &plusmn' + tolerance[$('five').value] + " %";
		$('tempco').innerHTML = tempco[$('six').value] + " ppm/&#8451";
	}
}