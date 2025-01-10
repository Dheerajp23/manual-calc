const display = document.getElementById("display");
const span= document.querySelector(".opert");
let fn = 0;
let sn = null;
let tn = 0;

function setNumber(e){
    console.log(e);
   
    display.value += e;
    fn = display.value;
}

function operator(e){
    tn = fn;
    sn = e;
    fn = "";
    display.value = "";
    span.innerText = e;
}
function Calculate(){
    let a = Number(fn)
    let b = Number(tn) 
    let operator = sn;
    let c = null;
    switch (operator) {
        case "+" : c =  a + b ;
                    
            break;
        case "-" : c = b - a;
        break;
        case "*" : c = b * a;
                        
                        
        break;
        case "/" : if(a === 0){
            c = "error";
        }
        else{
            c = b / a}
        break;

     
        default:
            break;
    }
   
    fn = c
    tn = null;
   
    display.value =  c;
}

function singleClear(){
    const a = display.value;
    const b = a.slice(0 ,-1)
    display.value = b;
}
function clearAll(){
    display.value = "";
    span.innerText = "";
    fn = 0;
    sn = null;
    tn = 0;
}