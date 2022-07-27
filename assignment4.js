let back=document.querySelector("body");
back.style.backgroundColor="silver";

let text = document.querySelector("#title");
text.style.color="green";

let subTitle=document.querySelectorAll("h3")
.forEach(item=>item.innerHTML=item.textContent.toLocaleUpperCase());

let fruitChild=document.createElement("li");
fruitChild.appendChild(document.createTextNode("Avocado"));
let newFruit=document.getElementById("fruList").appendChild(fruitChild);

let vegChild=document.createElement("li");
vegChild.appendChild(document.createTextNode("Carrots"));
let newVeg=document.getElementById("vegList").appendChild(vegChild);

// let subTitleColor=document.querySelectorAll("h3")
// .subTitleColor.style.color="yellow";