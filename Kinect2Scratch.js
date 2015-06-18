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
            ['', 'Restart connection', 'restart'],
            ['', 'test block', 'test_block']
        ],
        
        menus: {
	    k: ['ankleLeftX', 'ankleLeftY', 'ankleRightX', 'ankleRightY', 'elbowLeftX', 'elbowLeftY', 'elbowRightX', 'elbowRightY', 'footLeftX', 'footLeftY', 'footRightX', 'footRightY', 'handLeftX', 'handLeftY', 'handRightX', 'handRightY', 'handTipLeftX', 'handTipLeftY', 'handTipRightX', 'handTipRightY', 'headX', 'headY', 'hipLeftX', 'hipLeftY', 'hipRightX', 'hipRightY', 'kneeLeftX', 'kneeLeftY', 'kneeRightX', 'kneeRightY', 'neckX', 'neckY', 'shoulderLeftX', 'shoulderLeftY', 'shoulderRightX', 'shoulderRightY', 'spineBaseX', 'spineBaseY', 'spineMidX', 'spineMidY', 'spineShoulderX', 'spineShoulderY', 'thumbLeftX', 'thumbLeftY', 'thumbRightX', 'thumbRightY', 'wristLeftX', 'wristLeftY', 'wristRightX', 'wristRightY']
    }
    };

	ext.my_first_block = function() {
        console.log("My first block");
    };
        
    ext.restart = function() {
        window.ws = new wsImpl('ws://localhost:8181/');
    }
	
    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };
    
    ext.test_block = function() {
        console.log(jsonObject.bodies.joints[10].X;);
    }

    ext.k = function(m) {
        switch(m){
            case 'ankleLeftX': return jsonObject.bodies.joints[0].X;
            case 'ankleLeftY': return jsonObject.bodies.joints[0].Y;
//            case 'ankleRightX': return jsonObject.bodies.joints.ankleRight.X;
//            case 'ankleRightY': return jsonObject.bodies.Joints.AnkleRight.Y;
//            case 'elbowLeftX': return jsonObject.bodies.Joints.ElbowLeft.X;
//            case 'elbowLeftY': return jsonObject.bodies.Joints.ElbowLeft.Y;
//            case 'elbowRightX': return jsonObject.bodies.Joints.ElbowRight.X;
//            case 'elbowRightY': return jsonObject.bodies.Joints.ElbowRight.Y;
//            case 'footLeftX': return jsonObject.bodies.Joints.FootLeft.X;
//            case 'footLeftY': return jsonObject.bodies.Joints.FootLeft.Y;
//            case 'footRightX': return jsonObject.bodies.Joints.FootRight.X;
//            case 'footRightY': return jsonObject.bodies.Joints.FootRight.Y;
//            case 'handLeftX': return jsonObject.bodies.Joints.HandLeft.X;
//            case 'handLeftY': return jsonObject.bodies.Joints.HandLeft.Y;
//            case 'handRightX': return jsonObject.Bodies.Joints.HandRight.X;
//            case 'handRightY': return jsonObject.Bodies.Joints.HandRight.Y;
//            case 'handTipLeftX': return jsonObject.Bodies.Joints.HandTipLeft.X;
//            case 'handTipLeftY': return jsonObject.Bodies.Joints.HandTipLeft.Y;
//            case 'handTipRightX': return jsonObject.Bodies.Joints.HandTipRight.X;
//            case 'handTipRightY': return jsonObject.Bodies.Joints.HandTipRight.Y;
            case 'headX': return jsonObject.bodies.joints[10].X;
            case 'headY': return jsonObject.bodies.joints[10].Y;
//            case 'hipLeftX': return jsonObject.Bodies.Joints.HipLeft.X;
//            case 'hipLeftY': return jsonObject.Bodies.Joints.HipLeft.Y;
//            case 'hipRightX': return jsonObject.Bodies.Joints.HipRight.X;
//            case 'hipRightY': return jsonObject.Bodies.Joints.HipRight.Y;
//            case 'kneeLeftX': return jsonObject.Bodies.Joints.KneeLeft.X;
//            case 'kneeLeftY': return jsonObject.Bodies.Joints.KneeLeft.Y;
//            case 'kneeRightX': return jsonObject.Bodies.Joints.KneeRight.X;
//            case 'kneeRightY': return jsonObject.Bodies.Joints.KneeRight.Y;
//            case 'neckX': return jsonObject.Bodies.Joints.Neck.X;
//            case 'neckY': return jsonObject.Bodies.Joints.Neck.Y;
//            case 'shoulderLeftX': return jsonObject.Bodies.Joints.ShoulderLeft.X;
//            case 'shoulderLeftY': return jsonObject.Bodies.Joints.ShoulderLeft.Y;
//            case 'shoulderRightX': return jsonObject.Bodies.Joints.ShoulderRight.X;
//            case 'shoulderRightY': return jsonObject.Bodies.Joints.ShoulderRight.Y;
//            case 'spineBaseX': return jsonObject.Bodies.Joints.SpineBase.X;
//            case 'spineBaseY': return jsonObject.Bodies.Joints.SpineBase.Y;
//            case 'spineMidX': return jsonObject.Bodies.Joints.SpineMid.X;
//            case 'spineMidY': return jsonObject.Bodies.Joints.SpineMid.Y;
//            case 'spineShoulderX': return jsonObject.Bodies.Joints.SpineShoulder.X;
//            case 'spineShoulderY': return jsonObject.Bodies.Joints.SpineShoulder.Y;
//            case 'thumbLeftX': return jsonObject.Bodies.Joints.ThumbLeft.X;
//            case 'thumbLeftY': return jsonObject.Bodies.Joints.ThumbLeft.Y;
//            case 'thumbRightX': return jsonObject.Bodies.Joints.ThumbRight.X;
//            case 'thumbRightY': return jsonObject.Bodies.Joints.ThumbRight.Y;
//            case 'wristLeftX': return jsonObject.Bodies.Joints.WristLeft.X;
//            case 'wristLeftY': return jsonObject.Bodies.Joints.WristLeft.Y;
//            case 'wristRightX': return jsonObject.Bodies.Joints.WristRight.X;
//            case 'wristRightY': return jsonObject.Bodies.Joints.WristRight.Y;
        }
    };

    
        
    // Register the extension
    ScratchExtensions.register('KinectinScratch', descriptor, ext);
})({});