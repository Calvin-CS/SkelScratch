/*
 * Authors: Isaac Zylstra and Victor Norman @ Calvin College, Grand Rapids, MI.
 * Contact: vtn2@calvin.edu
 */

(function(ext) {
    
    //The variable that will hold the JSON to be read from
    var jsonObject = null;
    
    //The scale applied to the Kinect data to make it map to the canvas better.
    var xScale = 240;
    var yScale = 180;
    var zScale = 200;
    
    //The status of the Kinect
    var status = 0;
    
    //alert letting the user know what needs to be done before loading the extension.
    alert("BEFORE CLICKING OK: Make sure the Kinect is connected and your JSON websocket server has started");
     
    console.log("connecting to server ..");

    // create a new websocket and connect
    window.ws = new WebSocket('ws://localhost:8181/');
    
    // when data is comming from the server,
    // this method parses the data into JSON,
    // and sets the status of the extension
    ws.onmessage = function (evt) {
        jsonObject = JSON.parse(evt.data);
            if(jsonObject.bodies == '')
            {
                status = 1;
            } else
            {
                status = 2;
            }
    };

    // when the connection is established,
    // this method writes that information to the console
    ws.onopen = function () {
        console.log('.. connection open');
    };

    // when the connection is closed,
    // this method writes that information to the console
    ws.onclose = function () {
        console.log('.. connection closed');
        status = 0;
    };

    // Cleanup function when the extension is unloaded
    ext._shutdown = function()
    {
    window.ws.close();
    };
    

    // Reports the status of the Kinect
    ext._getStatus = function() {
        if(status == 0)
        {
        return {status: 0, msg: 'Kinect is not connected to Scratch'};
        }
        if(status == 1)
        {
            return {status: 1, msg: 'Kinect is connected, but is not detecting any bodies'};
        }
        if(status == 2)
        {
            return {status: 2, msg: 'Kinect is sending body data'};
        }
    };
    
        // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', '%m.b %m.j %m.c', 'joints', 'Body 1', 'Head', 'x'],
            ['r', 'Body ID %n %m.j %m.c', 'jointsID', '0', 'Head', 'x'],
            ['b', '%m.b %m.d Handstate is %m.h', 'handstate', 'Body 1', 'Left', 'Closed'],
            ['b', 'Body ID %n %m.d Handstate is %m.h', 'handstateID', '0', 'Left', 'Closed'],
            ['r', '%m.b %m.d Handstate', 'handdebug', 'Body 1', 'Left'], //Comment out of final version.
            ['r', '%m.b ID', 'bodyid', 'Body 1'],
            ['b', '%m.b tracked', 'tracked', 'Body 1'],
            ['b', 'connected', 'connected'],
            ['', 'Basic body check', 'basic_body_check'], //Comment out of final version.
            ['', 'Test Block', 'test'], //Comment out of final
            ['', 'Start new local connection', 'local'],
            ['', 'connect to %s', 'ipconnect', '0.0.0.0'],
            ['', 'Close connection', 'closeconn'], //Comment out of final version.
            ['', 'console.log %n', 'write'], //Comment out of final version.
            ['', 'bad only %n', 'writeB'] //Comment out of final version.
        ],
        
        menus: {
            //All of the joints
	    j: ['Left Ankle', 'Right Ankle', 'Left Elbow', 'Right Elbow', 'Left Foot', 'Right Foot', 'Left Hand', 'Right Hand', 'Left Hand Tip', 'Right Hand Tip', 'Head', 'Left Hip', 'Right Hip', 'Left Knee', 'Right Knee', 'Neck', 'Left Shoulder', 'Right Shoulder', 'Spine Base', 'Spine Middle', 'Spine Shoulder', 'Left Thumb', 'Right Thumb', 'Left Wrist', 'Right Wrist'],
            //The six bodies
        b: ['Body 1', 'Body 2', 'Body 3', 'Body 4', 'Body 5', 'Body 6'],
            //The five handstate states
        h: ['Unknown', 'Not Tracked', 'Open', 'Closed', 'Lasso'],
            //The three coordinates
        c: ['x', 'y', 'z'],
            //Direction
        d: ['Left', 'Right']
    }
    };
    
    //Starts a new local connection
    ext.local = function()
    {
        window.ws.close();
        console.log("connecting to local server ..");
        window.ws = new WebSocket('ws://localhost:8181/');
        
        // when data is comming from the server,
        // this method parses the data into JSON,
        // and sets the status of the extension
        ws.onmessage = function (evt) {
            jsonObject = JSON.parse(evt.data);
            if(jsonObject.bodies == '')
            {
                status = 1;
            } else
            {
                status = 2;
            }
        };

        // when the connection is established,
        // this method writes that information to the console
        ws.onopen = function () {
            console.log('.. connection open');
        };

        // when the connection is closed,
        // this method writes that information to the console
        ws.onclose = function () {
            console.log('.. connection closed');
            status = 0;
        };
    };
    
    //string: a string containing the ip the user wishes to connect to.
    //Creates a remote connection to s.
    ext.ipconnect = function(string) {
        window.ws.close();
        console.log("connecting to "+string+' ..');
        window.ws = new WebSocket('ws://'+string+':8181/');
        
        // when data is comming from the server,
        // this method parses the data into JSON,
        // and sets the status of the extension
        ws.onmessage = function (evt) {
            jsonObject = JSON.parse(evt.data);
            if(jsonObject.bodies == '')
            {
                status = 1;
            } else
            {
                status = 2;
            }
        };
        
        // when the connection is established,
        // this method writes that information to the console
        ws.onopen = function () {
            console.log('.. connection open');
        };
        
        // when the connection is closed,
        // this method writes that information to the console
        ws.onclose = function () {
            console.log('.. connection closed');
            status = 0;
        };
    }
    
    //Closes the current connection
    ext.closeconn = function()
    {
        window.ws.close();
    }
    
    //number: the number to be written to the console
    //Outputs numeric content to console
    ext.write = function(number){
        console.log(number);
    };
    
    //number: input to be compared to 0
    //Writes "bad" in console if the input is 0
    ext.writeB = function(number){
        if(number == 0)
        {
            console.log("bad");
        }
    };
    
    //Checks the body 1 head x coordinate
    //Good for check if any data is getting in from the Kinect
    ext.basic_body_check = function() {
        console.log(jsonObject.bodies[0].joints[3].x*xScale);
    };
    
    //number: the body chosen (Body 1-6)
    //Gives the id of the selected body
    ext.bodyid = function(body)
    {
        switch(body){
            case 'Body 1': return jsonObject.bodies[0].id;
            case 'Body 2': return jsonObject.bodies[1].id;
            case 'Body 3': return jsonObject.bodies[2].id;
            case 'Body 4': return jsonObject.bodies[3].id;
            case 'Body 5': return jsonObject.bodies[4].id;
            case 'Body 6': return jsonObject.bodies[5].id;
        }
    }
    
    //Checks to see if getting the ID of a body, finding the body with that ID,
    //and getting that ID returns the original ID (it should).
    ext.test = function()
    {
        var b = -1;
        var bodyID = jsonObject.bodies[0].id;
        for(i = 0; i < 6; i++)
        {
            if(bodyID != 0)
            {
                if(bodyID == jsonObject.bodies[i].id)
                {
                    b = i;
                    //b = jsonObject.bodies[5].id;
                }
            }

        }
        console.log(jsonObject.bodies[b].id);
        //console.log(b);
    }
    
    
    //True if scratch is receiving the Kinect (but not necessarily data)
    ext.connected = function()
    {
        if(status == 0){
            return false;
        }
        
        if(status == 1 || 2){
            return true;
        }
    };
    
    //body: the body chosen (Body 1-6)
    //True if scratch is receiving the chosen body data
    ext.tracked = function(body)
    {
        var b = -1;
        switch(body){
            case 'Body 1': b = 0;
                break;
            case 'Body 2': b = 1;
                break;
            case 'Body 3': b = 2;
                break;
            case 'Body 4': b = 3;
                break;
            case 'Body 5': b = 4;
                break;
            case 'Body 6': b = 5;
                break;
        }
        
        return jsonObject.bodies[b].id != 0;
    };
    
    //body: the body chosen (Body 1-6)
    //direction: which handstate (left or right)
    //Outputs the left handstate of the selected body
    ext.handdebug = function(body,direction)
    {
        var i;
        switch(body){
            case 'Body 1': i=0;
                break;
            case 'Body 2': i=1;
                break;
            case 'Body 3': i=2;
                break;
            case 'Body 4': i=3;
                break;
            case 'Body 5': i=4;
                break;
            case 'Body 6': i=5;
                break;
        }
        
        switch(direction)
        {
            case 'Left': return jsonObject.bodies[i].lhandstate;
            case 'Right': return jsonObject.bodies[i].rhandstate;
        }
    }
    
    //body: The selected body (Body 1-6)
    //direction: Which handstate (left or right)
    //handstate: The selected handstate (Unknown, Not Tracked, Open, Closed, Lasso)
    //Returns true if the selected bodies left handstate is the same as block selected one.
    ext.handstate = function(body,direction,handstate)
    {
        var a;
        var b;
        
        switch(handstate)
        {
            case 'Unknown': a = 0;
                break;
            case 'Not Tracked': a = 1;
                break;
            case 'Open': a = 2;
                break;
            case 'Closed': a = 3;
                break;
            case 'Lasso': a = 4;
                break;
        }
        
        switch(body){
            case 'Body 1': b=0;
                break;
            case 'Body 2': b=1;
                break;
            case 'Body 3': b=2;
                break;
            case 'Body 4': b=3;
                break;
            case 'Body 5': b=4;
                break;
            case 'Body 6': b=5;
                break;
        }
        
        switch(direction)
        {
            case 'Left': return jsonObject.bodies[b].lhandstate == a;
            case 'Right': return jsonObject.bodies[b].rhandstate == a;
        }
    }
    
        
    //bodyID: The ID of the body information is wanted from.
    //direction: Which handstate (left or right)
    //handstate: The selected handstate (Unknown, Not Tracked, Open, Closed, Lasso)
    //Returns true if the selected bodies left handstate is the same as block selected one.
    ext.handstateID = function(bodyID,direction,handstate)
    {
        var a;
        var b;
        
        switch(handstate)
        {
            case 'Unknown': a = 0;
                break;
            case 'Not Tracked': a = 1;
                break;
            case 'Open': a = 2;
                break;
            case 'Closed': a = 3;
                break;
            case 'Lasso': a = 4;
                break;
        }
        
        for(i = 0; i < jsonObject.bodies.length; i++)
        {
            if(bodyID != 0)
            {
                if(bodyID == jsonObject.bodies[i].id)
                {
                    b = i;
                }
            }
        }
        
        switch(direction)
        {
            case 'Left': return jsonObject.bodies[b].lhandstate == a;
            case 'Right': return jsonObject.bodies[b].rhandstate == a;
        }
    }
    
        
    //body: The body chosen (Body 1-6).
    //joint: The joint chosen (All joint the Kinect v2 tracks).
    //coordinate: The chosen coordinate (x, y, or z).
    //Gets the coordinate chosen from the joint chosen from the body chosen
    ext.joints = function(body,joint,coordinate)
    {
        var a = -1;
        var b = -1;
        
        switch(joint){
            case 'Left Ankle': a=14;
                break;
            case 'Right Ankle': a=18;
                break;
            case 'Left Elbow': a=5;
                break;
            case 'Right Elbow': a=9;
                break;
            case 'Left Foot': a=15;
                break;
            case 'Right Foot': a=19;
                break;
            case 'Left Hand': a=7;
                break;
            case 'Right Hand': a=11;
                break;
            case 'Left Hand Tip': a=21;
                break;
            case 'Right Hand Tip': a=23;
                break;
            case 'Head': a=3;
                break;
            case 'Left Hip': a=12;
                break;
            case 'Right Hip': a=16;
                break;
            case 'Left Knee': a=13;
                break;
            case 'Right Knee': a=17;
                break;
            case 'Neck': a=2;
                break;
            case 'Left Shoulder': a=4;
                break;
            case 'Right Shoulder': a=8;
                break;
            case 'Spine Base': a=0;
                break;
            case 'Spine Middle': a=1;
                break;
            case 'Spine Shoulder': a=20;
                break;
            case 'Left Thumb': a=22;
                break;
            case 'Right Thumb': a=24;
                break;
            case 'Left Wrist': a=6;
                break;
            case 'Right Wrist': a=10;
                break;
        }
        
        switch(body){
            case 'Body 1': b=0;
                break;
            case 'Body 2': b=1;
                break;
            case 'Body 3': b=2;
                break;
            case 'Body 4': b=3;
                break;
            case 'Body 5': b=4;
                break;
            case 'Body 6': b=5;
                break;
        }
        
        switch(coordinate){
            case 'x': return jsonObject.bodies[b].joints[a].x*xScale;
            case 'y': return jsonObject.bodies[b].joints[a].y*yScale;
            case 'z': return jsonObject.bodies[b].joints[a].z*zScale;
        }
    }
    
    //bodyID: The ID of the body information is wanted from.
    //joint: The joint chosen (All joints the Kinect v2 tracks).
    //coordinate: The chosen coordinate (x, y, or z).
    //Gets the coordinate chosen from the joint chosen from the body chosen.
    ext.jointsID = function(bodyID,joint,coordinate)
    {
        var a = -1;
        var b = -1;
        
        switch(joint){
            case 'Left Ankle': a=14;
                break;
            case 'Right Ankle': a=18;
                break;
            case 'Left Elbow': a=5;
                break;
            case 'Right Elbow': a=9;
                break;
            case 'Left Foot': a=15;
                break;
            case 'Right Foot': a=19;
                break;
            case 'Left Hand': a=7;
                break;
            case 'Right Hand': a=11;
                break;
            case 'Left Hand Tip': a=21;
                break;
            case 'Right Hand Tip': a=23;
                break;
            case 'Head': a=3;
                break;
            case 'Left Hip': a=12;
                break;
            case 'Right Hip': a=16;
                break;
            case 'Left Knee': a=13;
                break;
            case 'Right Knee': a=17;
                break;
            case 'Neck': a=2;
                break;
            case 'Left Shoulder': a=4;
                break;
            case 'Right Shoulder': a=8;
                break;
            case 'Spine Base': a=0;
                break;
            case 'Spine Middle': a=1;
                break;
            case 'Spine Shoulder': a=20;
                break;
            case 'Left Thumb': a=22;
                break;
            case 'Right Thumb': a=24;
                break;
            case 'Left Wrist': a=6;
                break;
            case 'Right Wrist': a=10;
                break;
        }
        
        for(i = 0; i < jsonObject.bodies.length; i++)
        {
            if(bodyID != 0)
            {
                if(bodyID == jsonObject.bodies[i].id)
                {
                    b = i;
                }
            }
        }
        
        switch(coordinate){
            case 'x': return jsonObject.bodies[b].joints[a].x*xScale;
            case 'y': return jsonObject.bodies[b].joints[a].y*yScale;
            case 'z': return jsonObject.bodies[b].joints[a].z*zScale;
        }
    }
        
    // Register the extension
    ScratchExtensions.register('SkelScratch', descriptor, ext);
})({});