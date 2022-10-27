$(document).ready(() => {
	
	$("body").ready(() => {
		load_tasks();
	})

	$("#new").click(() => {
		new_task();
	});

});

function create_node(str) {
	if (!str)
		return;

	let newNode = $("<div></div>").addClass("task").text("► " + str);

	$("#ft_list").prepend(newNode);

	// launch listener for task deletion
	newNode.click(() => {
		delete_task(newNode);
	});

	return newNode;
}

function new_task() {
	let res = prompt("My new task:");

	if (res == "" || res === null)
		return;

	// add the corresponding cookie
	if (Cookies.get('ft_list') === undefined)
		Cookies.set('ft_list', "");
	Cookies.set('ft_list', Cookies.get('ft_list') + res + '∅'); // ∅ is the list separator

	create_node(res);
}

function remove_cookie(str) {
	let list = Cookies.get('ft_list');

	if (list === undefined)
		return;

	list = list.split("∅");

	const index = list.indexOf(str);
	if (index > -1) { // only splice array when item is found
		list.splice(index, 1); // 2nd parameter means remove one item only
	}

	let new_cookie = "";

	list.forEach(task => {
		if (task != undefined && task != "")
			new_cookie += task + "∅";
	})

	Cookies.set('ft_list', new_cookie);
}

function delete_task(elem) {
	if (window.confirm("Are you sure you want to delete this task?")) {
		remove_cookie(elem.text().slice(2));
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
