var args = arguments[0] || {};

var value = false;

function updateDisplay() {
	
	$.checkbox.value = value;

	if (value) {
	    $.checkbox.title = '\u2713';
//	    $.checkbox.backgroundColor = '#aaa';
	}
	else {
	    $.checkbox.title = '';
//	    $.checkbox.backgroundColor = '#000';
	}
}
 
function setValue(val) {
	value = val;
	updateDisplay();
}


function getValue() {
	return value;
}


function clickCheckbox(e) {
    setValue(!value);
    sendChangeEvent();
}


function sendChangeEvent() {
	$.checkbox.fireEvent('change', { value: value });
}


// init from text attribute value
setValue(args.value == 'true');

exports = {
	setValue: setValue,
	getValue: getValue
};

