const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const pic = document.createElement("img");
pic.setAttribute("src", "https://picsum.photos/200");
pic.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(pic);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSec = document.createElement("section");
newSec.innerHTML = "<h2>DOM Basics</h2>";
newSec.innerHTML = "<p>This was added through Javascript</p>";
document.body.appendChild(newSec);