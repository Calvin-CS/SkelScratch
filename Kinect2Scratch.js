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
            ['r', '%m.k', 'k', 'heady'],
            ['', 'Get Ready', 'get_ready']
        ],
        
        menus: {
	    k: ['headx', 'heady']
    }
    };

	ext.my_first_block = function() {
        console.log("Text 2");
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
    
    function myOnLoadFunction()
    {
        console.log("It's working, it's working!");
    }
    
    window.addEventListener("load",myOnLoadFunction);
    

    /*window.addEventListener("load", start);
    
    var start = function () {
        var wsImpl = window.WebSocket || window.MozWebSocket;
        //var form = document.getElementById('sendForm');
        //var input = document.getElementById('sendText');
        
        console.log("connecting to server ..");

        // create a new websocket and connect
        window.ws = new wsImpl('ws://localhost:8181/');

        // when data is comming from the server, this metod is called
        //ws.onmessage = function (evt) {
        //    inc.innerHTML += evt.data + '<br/>';
        //};
        
        // when the connection is established, this method is called
        ws.onopen = function () {
            console.log(".. connection open");
        };

        // when the connection is closed, this method is called
        ws.onclose = function () {
            console.log(".. connection closed");
        }
            
     };*/
            
			//form.addEventListener('submit', function(e){
			//	e.preventDefault();
			//	var val = input.value;
			//	ws.send(val);
			//	input.value = "";
			//});


    // Register the extension
    ScratchExtensions.register('Kinect2Scratch', descriptor, ext);
})({});