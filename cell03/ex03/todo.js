function new_task () {
    let res = prompt("My new task:");

    if (res == "" || res === null)
        return ;

    const newNode = document.createElement("div");
    const textNode = document.createTextNode("► " + res);
    newNode.appendChild(textNode);
    newNode.classList.add("task");
	newNode.addEventListener('click', function delete_task(event) {
		window.confirm()
		newNode.remove();
	});


    const parentDiv = document.getElementById("ft_list");
    parentDiv.insertBefore(newNode, parentDiv.children[0]);
}
