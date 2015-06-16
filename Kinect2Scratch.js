(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};
    

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        // Check for the various File API support.
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            return {status: 2, msg: 'Ready'};
        } else {
            return {status: 0, msg: 'The File APIs are not fully supported by your browser.'};
        }
    };
    
        // Block and block menu descriptions
    var descriptor = {
        blocks: [
			['', 'My First Block', 'my_first_block'],
			['r', '%n ^ %n', 'power', 2, 3],
            ['r', '%m.k', 'k', 'heady']
        ],
        
        menus: {
	    k: ['headx', 'heady']
    }
    };

	ext.my_first_block = function() {
        console.log("hello, world.");
        alert("hello!");
    };
	
    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };

    ext.k = function(m) {
        switch(m){
            case 'headx': return 1;
            case 'heady': return 2;
        }
    };
    
     var start = function() {
        alert("hello!");
    };

    window.onload = start;

    
        

    // Register the extension
    ScratchExtensions.register('Kinect2Scratch', descriptor, ext);
})({});