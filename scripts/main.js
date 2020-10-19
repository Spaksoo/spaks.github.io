var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ponchik.png') {
      myImage.setAttribute ('src','images/ponchik2.png');
    } else {
      myImage.setAttribute ('src','images/ponchik.png');
    }

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')
function setUserName(){
    let myName = promt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Chrome is cool,' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Chrome is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
}
