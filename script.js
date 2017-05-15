var checkAnswer = function(correctAnswer){
   var id = correctAnswer + window.location.hash.substring(4, 6);
   console.log(id);
  var answer = document.getElementById(id).checked;
  console.log(answer);
  if (answer === true){
    $(".response").html("Correct!");
    if(document.URL.indexOf("#tab01") > -1 || window.location.hash.indexOf("#tab02") > -1 || window.location.hash.indexOf("#tab03") > -1 || window.location.hash.indexOf("#tab04") > -1){
      console.log("200");
    }
    else{
      console.log("not 200");
    }
  }
  else{
    $(".response").html("Wrong.");
  }
};
