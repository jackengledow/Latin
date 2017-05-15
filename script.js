var checkAnswer = function(correctAnswer){
  var answer = document.getElementById(correctAnswer).checked;
  if (answer === true){
    $(".response").html("Correct!");
    if(window.location.hash.indexOf("#tab1") > -1 || window.location.hash.indexOf("#tab2") > -1 || window.location.hash.indexOf("#tab3") > -1 || window.location.hash.indexOf("#tab4") > -1){
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
