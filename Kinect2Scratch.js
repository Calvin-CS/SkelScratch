(function(ext) {
    
    var firstTime = true;
    var boolean = true;
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};
    

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        //// Check for the various File API support.
        //if (window.File && window.FileReader && window.FileList && window.Blob) {
        //    return {status: 2, msg: 'Ready'};
        //} else {
        //    return {status: 0, msg: 'The File APIs are not fully supported by your browser.'};
        //}
        if(firstTime = false)
        {
        console.log("It's working, it's working!");
        firstTime = false;
        }
        if(boolean = false)
        {
            return {status: 1, msg: 'Not ready yet."};
        }
        return {status: 2, msg: 'Ready'};
        
    };
    
        // Block and block menu descriptions
    var descriptor = {
        blocks: [
			['', 'My First Block', 'my_first_block'],
			['r', '%n ^ %n', 'power', 2, 3],
            ['r', '%m.k', 'k', 'heady'],
            ['', 'Get Ready', 'get_ready']
        ],
        
        menus: {
	    k: ['headx', 'heady']
    }
    };

	ext.my_first_block = function() {
        console.log("hello, world.");
    };
        
    ext.get_ready = function() {
        boolean = false;
    }
	
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
        console.log("It's working, it's working!");
    };

    window.onload = start;

    
        

    // Register the extension
    ScratchExtensions.register('Kinect2Scratch', descriptor, ext);
})({});