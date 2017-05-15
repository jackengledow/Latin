var checkC = function(){
	var answer = document.getElementById("c").checked;
	if(answer === true){
		$('img').remove();
		$("div").append("<p>Correct!</p>")
	}
	else if (answer === false) {
		$('img').remove();
		$("div").append("<p>Definitely wrong.</p>")
	}
}
var checkD = function(){
	var answer = document.getElementById("d").checked;
	if(answer === true){
		$('img').remove();
		$("div").append("<p>Correct!</p>")
	}
	else if (answer === false) {
		$('img').remove();
		$("div").append("<p>Definitely wrong.</p>")
	}
}
var checkB = function(){
	var answer = document.getElementById("b").checked;
	if(answer === true){
		$('img').remove();
		$(".response").append("<p>Correct!</p>")
	}
	else if (answer === false) {
		$('img').remove();
		$("div").append("<p>Definitely wrong.</p>")
	}
}
var checkA = function(){
	var answer = document.getElementById("a").checked;
	if(answer === true){
		$('img').remove();
		$("div").append("<p>Correct!</p>")
	}
	else if (answer === false) {
		$('img').remove();
		$("div").append("<p>Definitely wrong.</p>")
	}
}