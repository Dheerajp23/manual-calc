function appendToDisplay(value){
    document.querySelector("#display").value += value;
}
function clearAll(){
    document.querySelector("#display").value = "";
}

function Calculate(){
   let value = document.querySelector("#display").value;
    if (value === "") {
        document.querySelector("#display").value = "";
   } else {
    try {
        let result = eval(document.querySelector("#display").value);
        document.querySelector("#display").value= result;
    } catch (error) {
        document.querySelector("#display").value="Error"
    }
   }
}

function clearOne(){
    let string = document.querySelector("#display").value.slice(0 , -1);
    document.querySelector("#display").value = string;
}
