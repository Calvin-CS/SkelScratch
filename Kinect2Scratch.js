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
    };
    
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
            ['r', '%m.k sensor value', 'k', 'headX'],
            ['', 'restart connection', 'restart'],
            ['', 'test block', 'test_block']
        ],
        
        menus: {
	    k: ['Left Ankle X', 'Left Ankle Y', 'Right Ankle X', 'Right Ankle Y', 'Left Elbow X', 'Left Elbow Y', 'Right Elbow X', 'Right Elbow Y', 'Left Foot X', 'Left Foot Y', 'Right Foot X', 'Right Foot Y', 'Left Hand X', 'Left Hand Y', 'Right Hand X', 'Right Hand Y', 'Left Hand Tip X', 'Left Hand Tip Y', 'Right Hand Tip X', 'Right Hand Tip Y', 'Head X', 'Head Y', 'Left Hip X', 'Left Hip Y', 'Right Hip X', 'Right Hip Y', 'Left Knee X', 'Left Knee Y', 'Right Knee X', 'Right Knee Y', 'Neck X', 'Neck Y', 'Left Shoulder X', 'Left Shoulder Y', 'Right Shoulder X', 'Right Shoulder Y', 'Spine Base X', 'Spine Base Y', 'Spine Middle X', 'Spine Middle Y', 'Spine Shoulder X', 'Spine Shoulder Y', 'Left Thumb X', 'Left Thumb Y', 'Right Thumb X', 'Right Thumb Y', 'Left Wrist X', 'Left Wrist Y', 'Right Wrist X', 'Right Wrist Y']
    }
    };

	ext.my_first_block = function() {
        console.log("My first block");
    };
        
    ext.restart = function() {
        window.ws = new wsImpl('ws://localhost:8181/');
    };
	
    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };
    
    ext.test_block = function() {
        console.log(jsonObject.bodies[0].joints[3].x);
    };

    ext.k = function(m) {
        switch(m){
            case 'Left Ankle X': return jsonObject.bodies[0].joints[14].x;
            case 'Left Ankle Y': return jsonObject.bodies[0].joints[14].x;
            case 'Right Ankle X': return jsonObject.bodies[0].joints[18].x;
            case 'Right Ankle Y': return jsonObject.bodies[0].joints[18].x;
            case 'Left Elbow X': return jsonObject.bodies[0].joints[5].x;
            case 'Left Elbow Y': return jsonObject.bodies[0].joints[5].x;
            case 'Right Elbow X': return jsonObject.bodies[0].joints[9].x;
            case 'Right Elbow Y': return jsonObject.bodies[0].joints[9].x;
            case 'Left Foot X': return jsonObject.bodies[0].joints[15].x;
            case 'Left Foot Y': return jsonObject.bodies[0].joints[15].x;
            case 'Right Foot X': return jsonObject.bodies[0].joints[19].x;
            case 'Right Foot Y': return jsonObject.bodies[0].joints[19].x;
            case 'Left Hand X': return jsonObject.bodies[0].joints[7].x;
            case 'Left Hand Y': return jsonObject.bodies[0].joints[7].x;
            case 'Right Hand X': return jsonObject.bodies[0].joints[11].x;
            case 'Right Hand Y': return jsonObject.bodies[0].joints[11].x;
            case 'Left Hand Tip X': return jsonObject.bodies[0].joints[21].x;
            case 'Left Hand Tip Y': return jsonObject.bodies[0].joints[21].x;
            case 'Right Hand Tip X': return jsonObject.bodies[0].joints[23].x;
            case 'Right Hand Tip Y': return jsonObject.bodies[0].joints[23].x;
            case 'Head X': return jsonObject.bodies[0].joints[3].x;
            case 'Head Y': return jsonObject.bodies[0].joints[3].x;
            case 'Left Hip X': return jsonObject.bodies[0].joints[12].x;
            case 'Left Hip Y': return jsonObject.bodies[0].joints[12].x;
            case 'Right Hip X': return jsonObject.bodies[0].joints[16].x;
            case 'Right Hip Y': return jsonObject.bodies[0].joints[16].x;
            case 'Left Knee X': return jsonObject.bodies[0].joints[13].x;
            case 'Left Knee Y': return jsonObject.bodies[0].joints[13].x;
            case 'Right Knee X': return jsonObject.bodies[0].joints[17].x;
            case 'Right Knee Y': return jsonObject.bodies[0].joints[17].x;
            case 'Neck X': return jsonObject.bodies[0].joints[2].x;
            case 'Neck Y': return jsonObject.bodies[0].joints[2].x;
            case 'Left Shoulder X': return jsonObject.bodies[0].joints[4].x;
            case 'Left Shoulder Y': return jsonObject.bodies[0].joints[4].x;
            case 'Right Shoulder X': return jsonObject.bodies[0].joints[8].x;
            case 'Right Shoulder Y': return jsonObject.bodies[0].joints[8].x;
            case 'Spine Base X': return jsonObject.bodies[0].joints[0].x;
            case 'Spine Base Y': return jsonObject.bodies[0].joints[0].x;
            case 'Spine Middle X': return jsonObject.bodies[0].joints[1].x;
            case 'Spine Middle Y': return jsonObject.bodies[0].joints[1].x;
            case 'Spine Shoulder X': return jsonObject.bodies[0].joints[20].x;
            case 'Spine Shoulder Y': return jsonObject.bodies[0].joints[20].x;
            case 'Left Thumb X': return jsonObject.bodies[0].joints[22].x;
            case 'Left Thumb Y': return jsonObject.bodies[0].joints[22].x;
            case 'Right Thumb X': return jsonObject.bodies[0].joints[24].x;
            case 'Right Thumb Y': return jsonObject.bodies[0].joints[24].x;
            case 'Left Wrist X': return jsonObject.bodies[0].joints[6].x;
            case 'Left Wrist Y': return jsonObject.bodies[0].joints[6].x;
            case 'Right Wrist X': return jsonObject.bodies[0].joints[10].x;
            case 'Right Wrist Y': return jsonObject.bodies[0].joints[10].x;
//            case 'ankleLeftX': return jsonObject.bodies[0].joints[14].x;
//            case 'ankleLeftY': return jsonObject.bodies[0].joints[14].y;
//            case 'ankleRightX': return jsonObject.bodies[0].joints[18].x;
//            case 'ankleRightY': return jsonObject.bodies[0].joints[18].y;
//            case 'elbowLeftX': return jsonObject.bodies[0].joints[5].x;
//            case 'elbowLeftY': return jsonObject.bodies[0].joints[5].y;
//            case 'elbowRightX': return jsonObject.bodies[0].joints[9].x;
//            case 'elbowRightY': return jsonObject.bodies[0].joints[9].y;
//            case 'footLeftX': return jsonObject.bodies[0].joints[15].x;
//            case 'footLeftY': return jsonObject.bodies[0].joints[15].y;
//            case 'footRightX': return jsonObject.bodies[0].joints[19].x;
//            case 'footRightY': return jsonObject.bodies[0].joints[19].y;
//            case 'handLeftX': return jsonObject.bodies[0].joints[7].x;
//            case 'handLeftY': return jsonObject.bodies[0].joints[7].y;
//            case 'handRightX': return jsonObject.bodies[0].joints[11].x;
//            case 'handRightY': return jsonObject.bodies[0].joints[11].y;
//            case 'handTipLeftX': return jsonObject.bodies[0].joints[21].x;
//            case 'handTipLeftY': return jsonObject.bodies[0].joints[21].y;
//            case 'handTipRightX': return jsonObject.bodies[0].joints[23].x;
//            case 'handTipRightY': return jsonObject.bodies[0].joints[23].y;
//            case 'headX': return jsonObject.bodies[0].joints[3].x;
//            case 'headY': return jsonObject.bodies[0].joints[3].y;
//            case 'hipLeftX': return jsonObject.bodies[0].joints[12].x;
//            case 'hipLeftY': return jsonObject.bodies[0].joints[12].y;
//            case 'hipRightX': return jsonObject.bodies[0].joints[16].x;
//            case 'hipRightY': return jsonObject.bodies[0].joints[16].y;
//            case 'kneeLeftX': return jsonObject.bodies[0].joints[13].x;
//            case 'kneeLeftY': return jsonObject.bodies[0].joints[13].y;
//            case 'kneeRightX': return jsonObject.bodies[0].joints[17].x;
//            case 'kneeRightY': return jsonObject.bodies[0].joints[17].y;
//            case 'neckX': return jsonObject.bodies[0].joints[2].x;
//            case 'neckY': return jsonObject.bodies[0].joints[2].y;
//            case 'shoulderLeftX': return jsonObject.bodies[0].joints[4].x;
//            case 'shoulderLeftY': return jsonObject.bodies[0].joints[4].y;
//            case 'shoulderRightX': return jsonObject.bodies[0].joints[8].x;
//            case 'shoulderRightY': return jsonObject.bodies[0].joints[8].y;
//            case 'spineBaseX': return jsonObject.bodies[0].joints[0].x;
//            case 'spineBaseY': return jsonObject.bodies[0].joints[0].y;
//            case 'spineMidX': return jsonObject.bodies[0].joints[1].x;
//            case 'spineMidY': return jsonObject.bodies[0].joints[1].y;
//            case 'spineShoulderX': return jsonObject.bodies[0].joints[20].x;
//            case 'spineShoulderY': return jsonObject.bodies[0].joints[20].y;
//            case 'thumbLeftX': return jsonObject.bodies[0].joints[22].x;
//            case 'thumbLeftY': return jsonObject.bodies[0].joints[22].y;
//            case 'thumbRightX': return jsonObject.bodies[0].joints[24].x;
//            case 'thumbRightY': return jsonObject.bodies[0].joints[24].y;
//            case 'wristLeftX': return jsonObject.bodies[0].joints[6].x;
//            case 'wristLeftY': return jsonObject.bodies[0].joints[6].y;
//            case 'wristRightX': return jsonObject.bodies[0].joints[10].x
//            case 'wristRightY': return jsonObject.bodies[0].joints[10].y;
        }
    };

    
        
    // Register the extension
    ScratchExtensions.register('KinectinScratch', descriptor, ext);
})({});