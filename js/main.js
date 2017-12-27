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

//create and add option to select object
function add(to, val, html) {
	var o = document.createElement('option');
	o.value = val;
	o.innerHTML = html;
	to.appendChild(o);
}

//enable or disable options based on number of stirp.
function strips(value) {
	switch (value) {
		case "four":
			//disable unnecessary strip
			$("five").disabled = true;
			$("six").disabled = true;
			//remove unnecessary options
			rm($('four'), 'gold');
			rm($('four'), 'silver');
			rm($('four'), 'white');
			rm($('four'), 'black');
			//add necessary options
			add($('three'), 'gold', 'Gold');
			add($('three'), 'silver', 'Silver');
			add($('four'), 'gold', 'Gold');
			add($('four'), 'silver', 'Silver');
			break;
		case "five":
			//disable/enable unnecessary strip
			$("five").disabled = false;
			$("six").disabled = true;
			//remove options
			rm($('three'), 'gold');
			rm($('three'), 'silver');
			rm($('five'), 'white');
			rm($('five'), 'black');
			//add options
			add($('four'), 'gold', 'Gold');
			add($('four'), 'silver', 'Silver');
			add($('five'), 'gold', 'Gold');
			add($('five'), 'silver', 'Silver');
			break
		default:
			$("five").disabled = false;
			$("six").disabled = false;
			//remove options
			rm($('three'), 'gold');
			rm($('three'), 'silver');
			rm($('five'), 'white');
			rm($('five'), 'black');
			//add options
			add($('four'), 'gold', 'Gold');
			add($('four'), 'silver', 'Silver');
			add($('five'), 'gold', 'Gold');
			add($('five'), 'silver', 'Silver');
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