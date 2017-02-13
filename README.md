# gifsee
A modern, vanilla JavaScript Facebook style gif previewer and loader is. Inspired by [this jQuery plugin](https://github.com/SodhanaLibrary/jqGifPreview), just 2,8kb minified.

### Demo
[Here](https://klombomb.github.io/gifsee.js/)

### For Modern Browsers 
Gifsee unapologetically uses modern JavaScript techniques, without transpiling them back to ES5. Gifsee uses Fetch, Arrow Functions, Calc and Promises. For old browsers using a [Fetch Polyfill](https://github.com/github/fetch) is recommended.

### Install
For now gifsee only supports old fashioned scripts, but module support will be added very soon. Grab a copy of the latest version from the ```dist``` folder and add it to your page, or clone the entire repo. 
```html
<link rel="stylesheet" href="../gifsee.min.css">
<script src="../gifsee.js"></script>
```
### Usage 
```html 
<img src="frame.png" data-gifsee="gif.png" id="super-cool-gif">
```
```javascript
var myImage = new gifsee(document.getElementById('super-cool-gif'));
```
### Docs
**gifsee** ```new gifsee(HTMLImageElement)```  
*gifsee has one parameter which must be an Image element*  

**HTMLImageElement**  
*src*  
URL for an image preview of your Gif. (can be any image, but width should be the same a gif)

*data-gifsee*  
URL for gif.


### To-do
- Add tests
- Webpack/CommonJS/UMD support
- Cleaner code
