
// WHETHER OR NOT A LETTER APPEARS AS "" OR BY ITSELF ON_SCREEN\
//This is a constuctor file

// letter concstructor stores character provided

function Letter(value) {
	// store value in letter object
	this.value = value;
	this.visible = (value === '');
}

// returns stored character if visible or a blank if not

Letter.prototype.render = function() {
	
	//operator below
	return (this.visible) ? this.value : '_';
};

module.exports = Letter;