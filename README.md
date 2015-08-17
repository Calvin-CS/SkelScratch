# SkelScratch Installation Instructions

***Preinstallation notes***

SkelScratch requires Windows 8 or newer. Windows 10 has not been tested.  
SkelScratch supports Chrome and Firefox, and does not support Internet Explorer. Other browsers are untested.

***Installation Instructions***

Plug your Kinect into your PC.  
Make sure your Kinect is plugged in to a USB 3.0 port.
Wait for Kinect driver to install. This may take a few minutes.

SkelScratch exists in two parts: A server that reads from the Kinect, and a client that connects to the server in ScratchX.

Part 1: Downloading and installing the server.

Go to <a href="https://github.com/Calvin-CS/Kinect2JSON/releases" target="_blank">Kinect2JSON</a>.  
Go to the downloads section next to "Latest release".  
Click on the "Kinect2JSON.zip" link. Save the file.  
Go to your downloads folder and right-click on "Kinect2JSON.zip", and click "Extract All...", and then click "Extract" in the bottom right.  
Double-click on setup.
  
A box will come up saying "Application Install - Security Warning". Click "Install".  
A window will come up saying "Windows protected your PC". Just click "OK" this time.

Go to the start screen, and type in "Kinect2JSON", and hit enter.

A window will come up saying "Windows protected your PC". ***Don't click on "OK".*** Click "More info", then click "Run anyway".

A window will popup about "Windows Security Alert". Check the box next to "Public networks", then click "allow access".

The server will now launch.  It might take a minute. Be patient.

Part 2: Launch

Go to <a href="http://www.scratchx.org/?url=http://Calvin-CS.github.io/SkelScratch/SkelScratch.js#scratch" target="_blank">scratchx</a>.   
Click "Ok", "I understand, continue", and "Ok".  
If you see a bunch of blocks show up, congratulations, SkelScratch is now loaded!

Optional: Samples

Go to <a href="https://github.com/Calvin-CS/SkelScratch/releases" target="_blank">SkelScratch</a>.  
Click on "Source code (zip)". Save the file.  
Go to your downloads folder and right-click on the folder starting with "SkelScratch" (which you just downloaded), and click "Extract All...", and then click "Extract" in the bottom right.  
Go back to ScratchX.  
Click "File" in the top left, then "Load Project".  
Navigate to the extracted folder, open it, open the folder inside, and then you should see a folder named "SkelScratch Samples". Open it, and you should see folders with samples, "Examples" and "Games". Open one and double-click on the sample you want to open.

If you want more help, go to the <a href="https://github.com/Calvin-CS/SkelScratch/wiki" target="_blank">wiki</a>!

***Troubleshooting***

The client connects to port 8181.