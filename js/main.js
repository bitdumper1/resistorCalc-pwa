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
	'white' : 9.0
}


//return element by id.
function $(a) {
	return document.getElementById(a);
}

//returns element by class name.
function c(a) {
	return document.getElementByClassName(a);
}

//removes an option from a select object.
function rm(from, obj) {
	for (var i=0; i < from.length; i++) {
		if (from.options[i].value == obj) {
			from.remove(i);
		}
	}
}

//enable or disable options based on number of stirp.
function stripes(value) {
	switch (value) {
		case "four":
			$("five").disabled = true;
			$("six").disabled = true;
			break;
		case "five":
			$("five").disabled = false;
			$("six").disabled = true;
			break
		default:
			$("five").disabled = false;
			$("six").disabled = false;
	}
}


//calculates the resistance value
function calculate() {
	//4 strip
	if ($('strip').value == "four") {
		//val = (1st digit*10 + 2nd didgit) * 10** 3rd digit
		var val = (values[$('one').value] * 10 + values[$('two').value]) * 10**(values[$('three').value]);
		//properly assign M and K prefix.
		if (val >= 1000000) {
			val = val/1000000;
			$('value').innerHTML = val.toString() + " M Ohm";
		} else if (val >= 1000) {
			val = val / 1000;
			$('value').innerHTML = val.toString() + " K Ohm";
		} else {
			$('value').innerHTML = val.toString() + " Ohm";
		}
	} else if ($('strip').value == "five") {
		//5 strip
		//value calculation
		var val = (values[$('one').value] * 100 + values[$('two').value]*10 + values[$('three').value]) * 10**(values[$('four').value]);
		if (val >= 1000000) {
			val = val/1000000;
			$('value').innerHTML = val.toString() + " M Ohm";
		} else if (val >= 1000) {
			val = val / 1000;
			$('value').innerHTML = val.toString() + " K Ohm";
		} else {
			$('value').innerHTML = val.toString() + " Ohm";
		}
	} else if ($('strip').value == "six") {
		//6 strip
		//value calculation
		var val = (values[$('one').value] * 100 + values[$('two').value]*10 + values[$('three').value]) * 10**(values[$('four').value]);
		if (val >= 1000000) {
			val = val/1000000;
			$('value').innerHTML = val.toString() + " M Ohm";
		} else if (val >= 1000) {
			val = val / 1000;
			$('value').innerHTML = val.toString() + " K Ohm";
		} else {
			$('value').innerHTML = val.toString() + " Ohm";
		}
	}
}