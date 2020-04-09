const button1 = document.getElementById('button1');
const text = document.getElementById('text');
const button2 = document.getElementById('button2');

button1.onclick = function () {
	text.style.display = 'block';
}

button2.onclick = function () {
	text.style.display = 'none';
}



const add_button = document.getElementById('add_button');
const input = document.getElementById('input');
const ul = document.getElementById('task-list');

add_button.onclick = function () {

	const li = document.createElement('li');
	const button = document.createElement("button");
	const checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");

	button.className = 'del_button';
	button.innerHTML = "remove element";
	li.innerHTML = input.value;
	checkbox.innerHTML = "Done";
	li.appendChild(button);
	li.appendChild(checkbox);
	

	button.onclick = function () {
		button.style.display = 'none';
		ul.removeChild(li);
	}

	checkbox.onchange = function (event) {
		if (event.target.checked) {
			li.style.textDecoration = "line-through";
		} else {
			li.style.textDecoration = "none";
		}
	}

	ul.appendChild(li);

	input.value = "";
}

