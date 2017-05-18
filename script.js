var totalScore = 0;
var checkAnswer = function(correctAnswer){
   var id = correctAnswer + window.location.hash.substring(4, 6);
   var response = "response" + window.location.hash.substring(4, 6);
  var answer = document.getElementById(id).checked;
  if (answer === true){
    $("." + response).html("Correct!").addClass("font-size");
    if(document.URL.indexOf("#tab01") > -1 || window.location.hash.indexOf("#tab02") > -1 || window.location.hash.indexOf("#tab03") > -1 || window.location.hash.indexOf("#tab04") > -1){
      totalScore = totalScore + 200;
      console.log("200");
      $("#score").html("Score: " + totalScore);
    }
   if(document.URL.indexOf("#tab05") > -1 || window.location.hash.indexOf("#tab06") > -1 || window.location.hash.indexOf("#tab07") > -1 || window.location.hash.indexOf("#tab08") > -1){
      totalScore = totalScore + 400;
      console.log("400");
      $("#score").html("Score: " + totalScore);
    }
   if(document.URL.indexOf("#tab09") > -1 || window.location.hash.indexOf("#tab10") > -1 || window.location.hash.indexOf("#tab11") > -1 || window.location.hash.indexOf("#tab12") > -1){
      totalScore = totalScore + 600;
      console.log("600");
      $("#score").html("Score: " + totalScore);
    }
   if(document.URL.indexOf("#tab13") > -1 || window.location.hash.indexOf("#tab14") > -1 || window.location.hash.indexOf("#tab15") > -1 || window.location.hash.indexOf("#tab16") > -1){
      totalScore = totalScore + 800;
      console.log("800");
      $("#score").html("Score: " + totalScore);
    }
   if(document.URL.indexOf("#tab17") > -1 || window.location.hash.indexOf("#tab18") > -1 || window.location.hash.indexOf("#tab19") > -1 || window.location.hash.indexOf("#tab20") > -1){
      totalScore = totalScore + 1000;
      console.log("1000");
      $("#score").html("Score: " + totalScore);
    }
  }
  else{
     $("." + response).html("Wrong.").addClass("font-size");
    if(document.URL.indexOf("#tab01") > -1 || window.location.hash.indexOf("#tab02") > -1 || window.location.hash.indexOf("#tab03") > -1 || window.location.hash.indexOf("#tab04") > -1){
      totalScore = totalScore - 200;
      console.log("200");
      $("#score").html("Score: " + totalScore);
    }
   if(document.URL.indexOf("#tab05") > -1 || window.location.hash.indexOf("#tab06") > -1 || window.location.hash.indexOf("#tab07") > -1 || window.location.hash.indexOf("#tab08") > -1){
      totalScore = totalScore - 400;
      console.log("400");
      $("#score").html("Score: " + totalScore);
    }
   if(document.URL.indexOf("#tab11") > -1 || window.location.hash.indexOf("#tab10") > -1 || window.location.hash.indexOf("#tab11") > -1 || window.location.hash.indexOf("#tab12") > -1){
      totalScore = totalScore - 600;
      console.log("600");
      $("#score").html("Score:" + totalScore);
    }
   if(document.URL.indexOf("#tab13") > -1 || window.location.hash.indexOf("#tab14") > -1 || window.location.hash.indexOf("#tab15") > -1 || window.location.hash.indexOf("#tab16") > -1){
      totalScore = totalScore - 800;
      console.log("800");
      $("#score").html("Score: " + totalScore);
    }
   if(document.URL.indexOf("#tab17") > -1 || window.location.hash.indexOf("#tab18") > -1 || window.location.hash.indexOf("#tab19") > -1 || window.location.hash.indexOf("#tab20") > -1){
      totalScore = totalScore - 1000;
      console.log("1000");
      $("#score").html("Score: " + totalScore);
    }
  }
};
