function printmessage(){
	var name = document.getElementById("name").value;
	document.getElementById("message").innerHTML = "Good evening " + name + ", my name is Prakrati Mamtani, I'm currently completing my undergraduate studies from New York University Abu Dhabi. To view the full profile click on the arrow bellow.";
	var line = document.createElement("br");
	document.getElementById("message").appendChild(line);
	var line = document.createElement("br");
	document.getElementById("message").appendChild(line);
	a = document.createElement("a");
	a.href = "resume.html"
	nextPage = document.createElement("button");
	nextPage.id = "page_id"
	nextPage.innerHTML = "-->";
	a.appendChild(nextPage);
	document.getElementById("message").appendChild(a);
}

const greeting = Array('Bonjour!!', 'Hola!!', 'Ciao!!', 'Welcome!!', 'Marhaba!!', "Hello!!");
const greet = document.getElementById("greet");
greet.innerHTML = "Hello!!";
idx = 0;

setInterval(function() {
	greet.innerHTML = greeting[idx];
	idx += 1;
	idx = idx % greeting.length;

}, 1000);
