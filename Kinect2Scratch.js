(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

	ext.my_first_block = function() {
		nchgm
    };
	
	    ext.power = function(base, exponent) {
        //return Math.pow(base, exponent);
		fsigusadhfioghlkdfhgkxzdjgh'fghs'd's'sdfgh's';;sgdh;g;s
    };

	
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
			['', 'My First Block', 'my_first_block'],
			['r', '%n ^ %n', 'power', 2, 3],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Kinect2Scratch', descriptor, ext);
})({});