let boxes = document.querySelectorAll(".single-box");
let inputBox = document.querySelector("#input-text");

for(let box of boxes){
    box.addEventListener("click", ()=>{
        console.log("btn clicked");
        console.dir(box)
        // inputBox.value += box.innerText;

        if(box.innerText === "="){
            let ans = calculate(inputBox.value);
            inputBox.value = ans;
        }
        else if(box.innerText === "AC"){
            reset();
        }
        else if(box.innerText === "X"){
            deleteLast(inputBox.value);
        }
        else{

            inputBox.value += box.innerText;
        }

    })
}

function calculate(value){
    return eval(value);
}

function reset(){
    inputBox.value = "";
}

function deleteLast(str){
    let newStr = str.substring(0, str.length-1);
    inputBox.value = newStr;
}