# talk-timer-p5js

A timer I wrote in an afternoon to facilitate online Lightning Talks. Works great with Zoom!

* Large, easy-to-read display
* Counts down from a specified start time
* Sounds a warning alert at a specified time
* Changes the display color at the alert time
* Sounds another alarm when the time has expired. 
* Designed to work with OBS and other streaming software by means of a window capture of the browser.

Try it here: <http://marksherman.dev/talk-timer-p5js/> but be advised of the copyright below.

# Technology

Uses [p5.js](https://p5js.org/), but does not utilize the canvas. This was a learning experience in the DOM manipulations provided by p5.js. Everything you see is regular HTML, done as completely through the p5.js interfaces as possible. As a result, the html file itself is bare, and is populated at load time by the javascript. 

For those unfamiliar with p5.js, the interesting file to look at is `sketch.js`

# Copyright & License

Everything in this repository except for the media files listed below are made available under the MIT license. 

Copyright 2020 Mark A. Sherman, Ph.D.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

This repository includes copyrighted media material made available with the following terms:

`AirHorn.mp3`

"Air Horn" by Mike Koenig. Creative Commons 3.0 Attribution License. From <http://soundbible.com/1542-Air-Horn.html>

`alert-short.m4a`

For personal use only. No permissive license is included. 
