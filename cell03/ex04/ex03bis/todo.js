$(document).ready(() => {

	$("#new").click(() => {
		new_task();
	});

	$("body").ready(() => {
		load_tasks();
	})
});

function create_node(str) {
	if (!str)
		return;

	const newNode = document.createElement("div");
	const textNode = document.createTextNode("► " + str);
	newNode.appendChild(textNode);
	newNode.classList.add("task");

	const parentDiv = document.getElementById("ft_list");
	parentDiv.insertBefore(newNode, parentDiv.children[0]);

	// launch listener for task deletion
	newNode.addEventListener('click', () => {
		delete_task(newNode);
	});

	return newNode;
}

function new_task() {
	let res = prompt("My new task:");

	if (res == "" || res === null)
		return;

	console.log(Cookies.get('ft_list'))
	// add the corresponding cookie
	if (Cookies.get('ft_list') === undefined)
		Cookies.set('ft_list', "");
	Cookies.set('ft_list', Cookies.get('ft_list') + res + '∅'); // ∅ is the list separator
	console.log(Cookies.get('ft_list'))
	create_node(res);
}

function remove_cookie(str) {
	let list = document.cookie;


	list = list.split("=");
	if (list[0] != "ft_list") {
		return;
	}

	list = list[1].split("∅");

	const index = list.indexOf(str);
	if (index > -1) { // only splice array when item is found
		list.splice(index, 1); // 2nd parameter means remove one item only
	}

	let new_cookie = "ft_list=";

	list.forEach(task => {
		if (task)
			new_cookie += task + "∅";
	})

	document.cookie = new_cookie;
}

function delete_task(elem) {
	if (window.confirm("Are you sure you want to delete this task?")) {
		remove_cookie(elem.lastChild.textContent.slice(2));
		elem.remove();
	}
}

function load_tasks() {
	let list = Cookies.get('ft_list');

	if (!list)
		return;

	list = list.split("∅");

	list.forEach(task => {
		create_node(task);
	})
}
