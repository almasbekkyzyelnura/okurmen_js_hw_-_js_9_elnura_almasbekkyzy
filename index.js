/*const paragraph = document.getElementById('paragraph');
paragraph.innerHTML = 'Салам дуйно!';
paragraph.style.color = 'black';
paragraph.style.fontSize = '38px'; */





let newElement = document.createElement("p");
newElement.innerHTML = "Бул код динамикалык турдо тузулду";
document.body.appendChild(newElement);






/*const List = document.getElementsByTagName('Li');

for(let i = 0; i < List.length; i ++) {
    List[i].classList.add ("List-item");
} */







let nums = document.getElementsByTagName("a");


for (let i = 0; i < nums.length; i++) {
  elements[i].setAttribute("target", "_blank");
}