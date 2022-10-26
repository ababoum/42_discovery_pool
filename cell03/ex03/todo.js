function new_task() {
	let res = prompt("My new task:");

	if (res == "" || res === null)
		return;

	const newNode = document.createElement("div");
	const textNode = document.createTextNode("► " + res);
	newNode.appendChild(textNode);
	newNode.classList.add("task");

	const parentDiv = document.getElementById("ft_list");
	parentDiv.insertBefore(newNode, parentDiv.children[0]);


	if (document.cookie) {
		setCookie("ft_list", [textNode.textContent]);
	}
	else {
		console.log(getCookie());
	}

	newNode.addEventListener('click', () => {
		delete_task(newNode)
	});
}

function delete_task(elem) {
	if (window.confirm("Are you sure you want to delete this task?")) {
		elem.remove();
	}
}

const setCookie = (name, json) => {

	let cookieValue = '';
	let expire = '';
	let period = '';

	// Specify the cookie name and value
	cookieValue = name + '=' + JSON.stringify(json) + ';';

	// Specify the path to set the cookie
	cookieValue += 'path=/ ;';

	// Specify how long you want to keep cookie
	period = 30; // days to store
	expire = new Date();
	expire.setTime(expire.getTime() + 1000 * 3600 * 24 * period);
	expire.toUTCString();
	cookieValue += 'expires=' + expire + ';';

	//Set cookie
	document.cookie = cookieValue;
};

const getCookie = () => {

	let cookieValue = '';
	let cookieArray = new Array();
	let result = new Array();

	//Get cookie
	cookieValue = document.cookie;

	//Divide the cookie into an array and convert them to JSON
	if (cookieValue) {
		cookieArray = cookieValue.split(';');

		cookieArray.forEach(data => {
			data = data.split('=');

			//data[0]: Cookie name
			//data[1]: Cookie value

			result[data[0]] = JSON.parse(data[1]);
		});
	}
	return result;
}