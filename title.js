var title = document.getElementById("title");
var inputName = document.getElementById("full-name");

function titleModifier(e) {
    title.innerText = `Hello => ${e.target.value}` 
}

inputName.addEventListener("keyup", titleModifier);