#Youtube Video Suggested Content Remover
-
This web app is designed as a google chrome extension to remove the suggested content feature shown at the bottom of the video when paused.

The target users are students who need to pause videos to review what is on screen, or take notes of what is on screen without having to exit out of the suggested content each time.

-

###Adding to chrome extensions
>Go to _chrome://extensions_ in your google chrome URL address bar.

>Select _Load unpacked_ and select the file containing the _manifest.json_ file and _app.js_ file.

-

As of 07/28/2020, the app does not have a wigit to enable or disable and only works if "youtube.com" is contained within the url.  This is useful, but needs some more additions.

###Suggested improvements:

* Add way for video to be removed when on Springboard.com domain
	* Manifest.json file is already set up to identify springboard domain
	* Change needs to be done with app.js file
		* If possible, maybe we can use a MutationObserver to identify when _"active-item"_ class is created on video divs found at _document.querySelectorAll('div.faded-item')_ to remove to content again using document.querySelector('div.ytp-pause-overlay').remove()