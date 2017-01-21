---
layout: post
title: Make a Tweeting, Motion-Sensing Wildlife Cam with Rasberry Pi
date: 2016-12-06
categories: "pi rasberrypi twitter"
tags: "pi rasberry pi twitter wildlife cam motion-sensor"
---

Objective
------------
Create a motion-sensing RasberryPi powered camera that tweets out photos

Materials
-----------------

- RasberryPi 3 (https://www.amazon.com/gp/product/B01D92SSX6/ref=oh_aui_detailpage_o06_s00?ie=UTF8&psc=1)
- RasberryPi Camera Module (https://www.amazon.com/gp/product/B01ER2SMHY/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1)
- A mouse, keyboard and monitor to program your Pi.

Step 1: Set Up Your Pi
----------------------

Attach the camera ribbon cable to your Pi.
The dedicated camera bus is the ribbon connector closest to the Ethernet port. It's a zero insertion force (ZIF) design; pull up the two side clips to release the retaining bracket. Pull upward. the thing will lossen and come up about a milimeter.

You need to place the ribbon with the conducting edge-connection pointing away from the Ethernet port and towards the power-connector end of the Pi. Hold the ribbon square in place and push the clips down to fix the ribbon in position. It might feel like it's not in all the way, but don't worry, it is.

Start up the pi

Open the Raspberry Pi Configuration Tool from the main menu:
<insert pic>

Ensure the camera software is enabled:
<insert pic>

If it's not enabled, enable it and reboot your Pi to begin.

Now your camera is connected and the software is enabled, you can get started by trying out the camera preview.

Open Python 3 from the main menu:
<insert pic>

Open a new file

Enter the following code:

```from picamera import PiCamera
from time import sleep

camera = PiCamera()

camera.start_preview()
sleep(10)
camera.stop_preview()
```
Save it as camera.py. Then hit f5. It's important that you do not save it as picamera.py.

As you're trying to type this, if you keep on accidentally entering camera mode it's because your saving it and then it's running when you enter camera.start_preview().

Save with Ctrl + S and run with F5. The camera preview should be shown for 10 seconds, and then close. Move the camera around to preview what the camera sees.

The live camera preview should fill the screen like so:

Congratulations, you've set up your camera. Now let's set up our custom scripts for motion sensing/tweeting.

Install Required Packages
-------------------------

Go fork the TweeterFeeder script from Github. I couldn't get this to work as intended, but the part that sends tweets upon changes to the file system works fine.

Place the Feeder Tweeter code on your Raspberry Pi at the following location: /home/pi/feedertweeter

Then open your command prompt. We'll need the following packages: 
    python-dev
    python-setuptools
    twython - allows tweets from python script
    fsmonitor - watches for changes in file system

Enter the following console commands:
'''
sudo apt-get install python-serial vim python-dev python-setuptools

sudo easy_install twython

There are some issues with older versions on fsmonitor and it's easier to download the latest version manually and install it locally. The working version is included in TweeterFeeders "libs" folder already. To build it locally simply do the following:

cd /home/pi/feedertweeter/libs/fsmonitor; sudo python setup.py install

Make sure these 3 scripts are executable:
'''
cd /home/pi/feedertweeter; chmod +x *.py
'''
Rememer the space. Also, if it's not clear, replace the star with the name of each of the three scripts.

screenshot of testing executables

Then you'll want to change permissions to allow all users to execute this file. In the command below, 'a' means all users and 'x' means execute.
'''
chmod a+x info.exe
'''

Normally used to change the permissions for a file. The chmod command can use symbols u (user that owns the file), g (the files group) , o (other users) and the permissions r (read), w (write) and x (execute). Using chmod u+x *filename* will add execute permission for the owner of the file.

At this point, you've added all user permissions to each of the scripts and when you check to see if they're running after manually executing it seems they are. However, FeederTweeter doesn't work. I don't know why, but here's what I did next...

after you get the ^M error, you have to install dos to unix.

To install dos2unix on Ubuntu or Debian:

$ sudo apt-get install tofrodos
$ sudo ln -s /usr/bin/fromdos /usr/bin/dos2unix


http://www.convertunits.com/from/MB/to/GB



trying to modify the feeder tweeter.py tweet thing to work for me.
change photo directory.
directly past in API keys (security risk, fix this later).

getting error with twython though.


Now, install the Twython libraries, which will let you use Twitter from Python using these three commands:

sudo apt-get install python-setuptools
sudo easy_install pip
sudo pip install twython