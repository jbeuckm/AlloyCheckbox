var args = arguments[0] || {};

var value = false;

function updateDisplay() {
	
	$.checkbox.value = value;

	if (value) {
	    $.checkbox.title = '\u2713';
	}
	else {
	    $.checkbox.title = '';
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
setValue(args.value);

exports.setValue = setValue;
exports.getValue = getValue;

