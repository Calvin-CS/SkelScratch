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
			['r', '%n ^ %n', 'power', 2, 3],
            ['b', '%m.k', 'k', 'heady']
        ],
        
        menus: {
	    k: ['headx', 'heady', 'righthandx', 'righthandy']
    }
    };

	ext.my_first_block = function() {
        console.log("hello, world.");
    };
	
    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };

    ext.k = function(m) {
        switch(m){
            case 'headx': return true;
            case 'heady': return true;
            case 'righthandx': return false;
            case 'righthandy': return false;
        }
    };

    // Register the extension
    ScratchExtensions.register('Kinect2Scratch', descriptor, ext);
})({});