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

	create_node(res);

	// add the corresponding cookie

	if (!document.cookie) {
		document.cookie = "ft_list=";
	}
	document.cookie += res + "∅"; // ∅ is the list separator
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
	let list = document.cookie;

	if (!list)
		return;

	list = list.split("=");
	if (list[0] != "ft_list") {
		return;
	}

	list = list[1].split("∅");

	list.forEach(task => {
		create_node(task);
	})
}
