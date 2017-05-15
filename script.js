var checkAnswer = function(correctAnswer){
   var id = correctAnswer + window.location.hash.substring(4, 6);
   var response = "response" + window.location.hash.substring(4, 6);
  var answer = document.getElementById(id).checked;
  $(".response01").html("correct");
  if (answer === true){
    $("." + response).html("Correct!");
    if(document.URL.indexOf("#tab01") > -1 || window.location.hash.indexOf("#tab02") > -1 || window.location.hash.indexOf("#tab03") > -1 || window.location.hash.indexOf("#tab04") > -1){
      console.log("200");
    }
   if(document.URL.indexOf("#tab05") > -1 || window.location.hash.indexOf("#tab06") > -1 || window.location.hash.indexOf("#tab07") > -1 || window.location.hash.indexOf("#tab08") > -1){
      console.log("400");
    }
   if(document.URL.indexOf("#tab11") > -1 || window.location.hash.indexOf("#tab10") > -1 || window.location.hash.indexOf("#tab11") > -1 || window.location.hash.indexOf("#tab12") > -1){
      console.log("600");
    }
   if(document.URL.indexOf("#tab13") > -1 || window.location.hash.indexOf("#tab14") > -1 || window.location.hash.indexOf("#tab015") > -1 || window.location.hash.indexOf("#tab016") > -1){
      console.log("800");
    }
   if(document.URL.indexOf("#tab17") > -1 || window.location.hash.indexOf("#tab18") > -1 || window.location.hash.indexOf("#tab19") > -1 || window.location.hash.indexOf("#tab20") > -1){
      console.log("1000");
    }
  }
  else{
     console.log(response);
     $("." + response).html("Wrong.");
  }
};
