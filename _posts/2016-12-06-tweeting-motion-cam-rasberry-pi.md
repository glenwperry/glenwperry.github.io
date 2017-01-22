---
layout: post
title: Make a Tweeting, Motion-Sensing Wildlife Cam with Rasberry Pi
date: 2016-12-06
categories: "pi rasberrypi twitter"
tags: "pi rasberry pi twitter wildlife cam motion-sensor"
---

<hr>

I've called mine the [Ritter Cam](https://twitter.com/_ritter_cam)

Materials
---------

- [RasberryPi 3 with Raspian OS](https://www.amazon.com/gp/product/B01D92SSX6/ref=oh_aui_detailpage_o06_s00?ie=UTF8&psc=1)

- [RasberryPi Camera Module v1 or v2](https://www.amazon.com/gp/product/B01ER2SMHY/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1)

- A mouse, keyboard and monitor to program your Pi.

Step 1: Install and Power-Up Your Pi
--------------------------------------

<https://www.raspberrypi.org/documentation/installation/>

Step 2: Connect Your Camera Module
----------------------------------

<https://www.raspberrypi.org/documentation/usage/camera/README.md>

Step 3: Update your Pi
-----------------------

Open LXTerminal (the Pi answer to Command Prompt/Terminal) and update your software. The sudo command lets you execute commands as root owner.

`sudo apt-getupdate` will download package updates.

`sudo apt-getupgrade` will install the new packages.

Now make sure your camera is enabled.

`sudo raspi-config`

Select the “Enable Camera” option and restart your Pi.

Once you’re re-booted, open LXTerminal back up and enter `raspistill -o cam.jpg`. This will show a live feed of your camera and save a pic called "cam.jpg" to "/home/pi". To see all camera options just enter `raspistill` with no arguments.

Step 4: Install pycam.pi
----------------
While Motion is very popular option fo Pi motion capture, the RitterCam uses the light-weight motion detection Python script written by Raspberry Pi community members. It constantly takes small pictures (in memory), compares it with the previous one for changed pixels and when 'enough' changed pixels are found, it takes a high-res picture.

The script relies on the Python Imaging Library which can analyze and manipulate images, so make sure you have it installed:

`sudo apt-get install python-imaging-tk` 

Now grab the pycam script and make it executable:

`wget -c http://pastebin.com/raw.php?i=yH7JHz9w -O picam.py`

`chmod +x picam.py`

The script will use a folder called 'picam' for storing all of the images. Create it before starting the script

`mkdir ~/picam`

You’re all set. Now run the script:

`./picam.py`

If you get an error that goes something like this:

`bash: ./picam.py: /usr/bin/python^M: bad interpreter: No such file or directory`

You’ll  need to install a package that will convert dos to unix.

`sudo apt-get install dos2unix`

If that doesn’t work, try this:

`sudo apt-get install tofrodos`

`sudo ln -s /usr/bin/fromdos /usr/bin/dos2unix`

Then enter:

`dos2unix /home/pi/picam.py` to convert your `pycam.py` script to the proper Unix spacing.

You should see the picam script running and capturing photos incessantly.

The script will turn on the red LED on the camera and start taking low-resolution images. It’ll then compare them and look for movement by comparing the pixels in the images. If it detects changes, the script will capture a higher-resolution image.

The script is very efficient and will automatically remove the low-res images it captures for comparison and only store the high-res images that have captured the motion. These images are saved in the ~/picam folder.

You’ll need to adjust some aspects of the script to make sure it works for you. For example, as per the default configuration, the script will even detect minute changes caused by wind.

Also, you'll want to open pycam.py and adjust the amount of disk space to allocate to your photos folder so you don’t fill up your whole SD card.

Step 5: Get TweeterFeeder Script and FSMonitor
--------------------------------------

Go fork the [TweeterFeeder](https://bitbucket.org/cauld/feedertweeter/src) project. It's kind of old and I couldn't get this to work as intended, but the part that sends tweets upon changes to the file system works fine.

Place the Feeder Tweeter code on your Raspberry Pi at the following location: `/home/pi/feedertweeter`

Then open your command prompt. We'll need the following packages: 

    python-dev

    python-setuptools

    twython - allows tweets from python script

    fsmonitor - watches for changes in file system

Enter the following console commands:

`sudo apt-get install python-serial vim python-dev python-setuptools`

`sudo easy_install twython`

There are some issues with older versions on `fsmonitor` and it's easier to download the latest version manually and install it locally. The working version is included in TweeterFeeders `libs` folder already. To build it locally simply do the following:

`cd /home/pi/feedertweeter/libs/fsmonitor; sudo python setup.py install`

If you encounter problems you may need to update your pip package manager.

`sudo easy_install pip`
`sudo pip install --upgrade`

Step 6: Set up a Twitter App.
-----------------------------

Get an API key at <https://dev.twitter.com/>

Copy your API Key/Secret and your OAuth Token/Secret into tweeterfeeder.py. You’ll also need to provide these to Twython at `t = Twython(“YOURAPIKEY”,”YOURSECRETKEY”,”YOUROAUTHTOKEN”,”YOUROAUTHSECRETTOKEN”)`. Lastly, tell the feedertweeter.py script where your photos folder is. 

Save.

If you want to set this thing up to actually function independently in a self-contained unit you should install Supervisor and (and store your keys in there for security purposes). This will allow you to make a box for your cam and leave it outside without a monitor/keyboard/mouse.

Let’s test it out, command line execute our scripts:

`./picam.py`

`./tweeterfeeder.py`

You should see messages from picam that it is grabbing photos upon pixel changes and tweeter feeder should be posting them to Twitter and deleting the photos from the source folder.

I used the resources below in figuring this out. They also have info about setting things up to run automatically with Supervisor.

<https://www.codeproject.com/articles/762494/raspberry-pi-hd-surveillance-camera-with-motion-ni>

<https://www.maketecheasier.com/raspberry-pi-as-surveillance-camera/>

<https://bitbucket.org/cauld/feedertweeter>