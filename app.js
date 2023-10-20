var result = document.getElementById("show");
var addBtn = document.getElementById("Add");
var subBtn = document.getElementById("Subtract");
var index = 0
result.textContent = index
console.log(result.textContent)

function addButton(){   
    ++index 
    if (index > 0 ){
        result.style.color = "green";
    }
    else{
        result.style.color = "black";
    }
    console.log(result.textContent)

    result.textContent = index
}
function subButton(){
    --index
    if (index < 0 ){
        result.style.color = "red";
    }
    else{
        result.style.color = "black";
    }
    console.log(result.textContent)
     
    result.textContent = index
}

addBtn.addEventListener("click",addButton);
subBtn.addEventListener("click",subButton);

