(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

	    // Block and block menu descriptions
    var descriptor = {
        blocks: [
			['', 'My First Block', 'my_first_block'],
        ]
    };
	
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
			['r', 'A block that has a parameter', 'param_block', 2, 3],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Kinect2Scratch', descriptor, ext);
})({});