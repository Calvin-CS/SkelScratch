(function(ext) {
    
    var firstTime = true;
    var boolean = true;
    var jsonObject = null;
    //var headX = 0;
    
    alert("BEFORE CLICKING OK<br/>Make sure you have have followed the instructions in Kinect2Scratch");
    console.log("Right after the alert");
    
    var wsImpl = window.WebSocket || window.MozWebSocket;
           
    console.log("connecting to server ..<br/>");

    // create a new websocket and connect
    window.ws = new wsImpl('ws://localhost:8181/');

    // when data is comming from the server, this metod is called
    ws.onmessage = function (evt) {
        //console.log(evt.data + '<br/>');
        if(evt != "0")
        {
        jsonObject = JSON.parse(evt.data);
        }
        //headX = parseInt(evt.data);
    };

    // when the connection is established, this method is called
    ws.onopen = function () {
        console.log('.. connection open<br/>');
    };

    // when the connection is closed, this method is called
    ws.onclose = function () {
        console.log('.. connection closed<br/>');
    }
    
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
        //if(firstTime)
        //{
        //console.log("text 3");
        //firstTime = false;
        //}
        //if(boolean)
        //{
        //    return {status: 1, msg: 'Not ready yet.'};
        //}
        return {status: 2, msg: 'Ready'};
        
    };
    
        // Block and block menu descriptions
    var descriptor = {
        blocks: [
			['', 'My First Block', 'my_first_block'],
			['r', '%n ^ %n', 'power', 2, 3],
            ['r', '%m.k', 'k', 'headX'],
            ['', 'Get Ready', 'get_ready'],
        ],
        
        menus: {
	    k: ['ankleLeftX', 'ankleLeftY', 'ankleRightX', 'ankleRightY', 'elbowLeftX', 'elbowLeftY', 'elbowRightX', 'elbowRightY', 'footLeftX', 'footLeftY', 'footRightX', 'footRightY', 'handLeftX', 'handLeftY', 'handRightX', 'handRightY', 'handTipLeftX', 'handTipLeftY', 'handTipRightX', 'handTipRightY', 'headX', 'headY', 'hipLeftX', 'hipLeftY', 'hipRightX', 'hipRightY', 'kneeLeftX', 'kneeLeftY', 'kneeRightX', 'kneeRightY', 'neckX', 'neckY', 'shoulderLeftX', 'shoulderLeftY', 'shoulderRightX', 'shoulderRightY', 'spineBaseX', 'spineBaseY', 'spineMidX', 'spineMidY', 'spineShoulderX', 'spineShoulderY', 'thumbLeftX', 'thumbLeftY', 'thumbRightX', 'thumbRightY', 'wristLeftX', 'wristLeftY', 'wristRightX',  'wristRightY']
    }
    };

	ext.my_first_block = function() {
        console.log("My first block");
    };
        
    ext.get_ready = function() {
        boolean = false;
    }
	
    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };

    ext.k = function(m) {
        switch(m){
            case 'headx': return headX;
            case 'heady': return 2;
        }
    };

    
        
    // Register the extension
    ScratchExtensions.register('KinectinScratch', descriptor, ext);
})({});