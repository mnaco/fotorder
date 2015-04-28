jQuery(function() {

	/* ****************************
	 // classSetter - basic class manipulation (addClass, removeClass, toggleClass) with data attribute
	 //
	 // <div data-class-setter-on-click = '{"classname":"light900", "method":"toggle"}'>test</div>
	 // <div data-class-setter-on-hover = '{"classname":"light900", "method":"remove", "target":".test3"}'>test</div>
	 */



	function classSetter(dataSelector, event) {

		// click or hover
		if (event === 'click') {
			var thisDataAttr = dataSelector.data('class-setter-on-click');
		} else if (event === 'hover') {
			var thisDataAttr = dataSelector.data('class-setter-on-hover');
		} else {
			return;
		}

		var jmClass = thisDataAttr.classname;          // class name
		var jmMethod = thisDataAttr.method;            // methods: add|remove|toggle class name
		// do nothing if class or method not set in data attribute
		if (typeof jmClass === 'undefined' || typeof jmMethod === 'undefined') {
			return;
		}

		// target selector. if not defined then self
		var jmSelector = jQuery(thisDataAttr.target);
		if (typeof thisDataAttr.target === 'undefined') {
			var jmSelector = dataSelector;
		}

		// call methid add|remove|toggle
		switch (jmMethod) {
			case 'add'    :
				jmSelector.addClass(jmClass);
				break;
			case 'remove' :
				jmSelector.removeClass(jmClass);
				break;
			case 'toggle' :
				jmSelector.toggleClass(jmClass);
				break;
		}
	}

	// on click
	jQuery('[data-class-setter-on-click]').click(function(event) {
		var thisDataAttr = jQuery(this);
		classSetter(thisDataAttr, 'click');
	});

	// on hover
	jQuery('[data-class-setter-on-hover]').hover(function(event) {
		var thisDataAttr = jQuery(this);
		classSetter(thisDataAttr, 'hover');
	});

	/*
	 * ****************************  */


});