var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ponchik.png') {
      myImage.setAttribute ('src','images/ponchik2.png');
    } else {
      myImage.setAttribute ('src','images/ponchik.png');
    }
}
