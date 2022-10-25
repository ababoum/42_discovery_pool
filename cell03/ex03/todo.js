function new_task () {
    let res = prompt("My new task:");

    if (res == "")
        return ;

    const newNode = document.createElement("div");
    const textNode = document.createTextNode("► " + res);
    newNode.appendChild(textNode);
    newNode.classList.add("task");


    const parentDiv = document.getElementById("ft_list");
    parentDiv.insertBefore(newNode, parentDiv.children[0]);
}