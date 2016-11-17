// noprotect
var shown = true
setInterval(function() {
  if (shown) {
    $(".blinking").css({"visibility": "hidden"});
    shown = false;
  } else {		
    $(".blinking").css({"visibility": "visible"});
    shown = true;
  }
}, 100)


var lettersToFade = $(".by-letter-fade").children();
var index = 0
setInterval(function() {
  if (index >= lettersToFade.length) {
    index = 0
  }

  var letterToFade = $(lettersToFade[index]);

  letterToFade.animate({"opacity": "0"}, {
    complete: function() {
      letterToFade.animate({opacity: "1"})
    }
  }) 	

  index++
}, 500)







var random255 = function () {
  return Math.floor(Math.random()*255);
}
var randomColor = function () {
  return "rgb(" + random255() + "," + random255() + "," + random255() + ")";
}

var doWork = function () {
    $(".seizure").css("color",randomColor);
    $("#thing").css("backgroundColor",randomColor);
}

 //UI-blocking version, page will stop responding
// for(var i=0; i<=10000; i++) {
//     doWork();
// }

//Non-UI-blocking version
var i=0;
var intervalId = setInterval(function () {
  if (i > 10000) {
    clearInterval(intervalId);
  }
  doWork();
  i++;
},1);