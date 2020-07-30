### Setting Up Locally

fork/clone this repo to your machine

run 'npm install'

run 'npm start'

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Technologies 

 - React, axios, ffmpeg, fluent-ffmeg, npm library ffmpeg-concat
 
### Discussion

I tried using the library ffmpeg-concat (https://www.npmjs.com/package/ffmpeg-concat). I should have been able to pass the videos through as an array, entered a desired output, and any transitions between the videos that I wanted. However, I kept getting the following error: 'Module not found: Can't resolve './lib-cov/fluent-ffmpeg' in '/Users/Bailey/Desktop/projects/air/node_modules/fluent-ffmpeg.' After searching online, I believe that the issue is stemming from utlizing webpack and trying to solve the path statically (https://github.com/fluent-ffmpeg/node-fluent-ffmpeg/issues/573). I could not get the error to go away for any installation requiring ffmpeg. 

In order to get the application to run, I commented out the code that I was trying to use to get the concatenation feature to work. Instead, I grab the mp4's and show a loading bar to simulate the concatenation process. At the end, I send an error in an alert to the browser.




