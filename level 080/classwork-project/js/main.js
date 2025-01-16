let todo = document.getElementById("ToDo");
let addbut = document.getElementById("addElement");
let dolist = document.getElementById("listelements");

addbut.addEventListener("click", function(){
    
    let paragraph = document.createElement('paragraph');
    let button = document.createElement('button');
    let br = document.createElement('br');
    let br1 = document.createElement('br');

    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = todo.value;
    paragraph.style.fontSize = "30px";
    paragraph.style.color = "white"

    button.classList.add('button-styling');
    button.innerText = "delet comment";
    button.style.borderRadius = "10px";
    button.style.boxShadow = "2px 2px 0px red";
    button.style.width = "120px";
    button.style.height = "30px";
    button.style.backgroundColor = "white";

    dolist.appendChild(paragraph);
    dolist.appendChild(button);
    dolist.appendChild(br);
    dolist.appendChild(br1);

    todo.value = "";

    button.addEventListener('click', function(){

        dolist.removeChild(paragraph);
        dolist.removeChild(button);
        dolist.removeChild(br);
        dolist.removeChild(br1);

    })
})



