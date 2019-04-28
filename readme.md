# Comp 2 Assignment
## Name: Patrick Barter
## Student Number: N01045277

Purpose of website: The purpose of this website is to allow users to have a way to know when a Youtuber or a Twitch Streamer is streaming or uploading a video. 

To access from login: 

Username: pb12
Password: 1234 (very secure password)

##Notes on Difficulties with the JS I had:

- The array would always overwrite when I add a follower and save it to local. Not sure how to have it where it would just add a follower if a list exist and saves the changes. 

- The unfollow button function is still a bit tricky since I am not sure how to specifically aim for the item in the array that is being displayed (if I want to unfollow Jerma985, it should remove his item from channelsAr and streamsAr)

- While I did find a way to have a login feature, I am not sure how to have an array of account information and have my function search through each item for matching the array items to what a user inputs in the username and password texboxes. 

##JS Code Cited:

### General

Rocco helped with the output code for the schedule as well as the schedule layout (HTML and CSS). The JS code was also used in the explore channels and account following list since the output is similar for them just different innerHTML output. 

### Header JS

Dropdown for Bulma dropdown button:
https://stackoverflow.com/questions/46785393/bulma-dropdown-not-working

## Dashboard code

Some of the eventlistener code for the "modelbox" (when you press on the schedule boxes and it displays a div with a black background and the stream/upload info) was inspired from this https://www.w3schools.com/howto/howto_css_modals.asp (to toggle on was more polished to work with more than one rectangle with the help from Rocco).


## Account Following List 
Janelle showed me another way to output the html contents in the JS code written (which I reviewed to further understand). I left it there so I can refer to it in the future should I need to use this method again 

