var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");







function inputLength() {
	return input.value.length;
}

function createListElement() {
	
	
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	
	var butt = document.createElement("button");
	butt.appendChild(document.createTextNode("Delete"));
	ul.appendChild(butt);
	
	
	butt.addEventListener("click",deleteList);
	var pi = document.querySelectorAll("li");
	
	for(var i =0; i<pi.length;i++){
	
	pi[i].addEventListener("click",addToggle);
}


function deleteList(){
	li.remove();butt.remove();	
}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addToggle(){
 this.classList.toggle("done");
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);







