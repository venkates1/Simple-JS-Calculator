function dis(val){
    document.getElementById("output-value").value+=val;
}
function solve(){
    let x= document.getElementById("output-value").value;
    let y=eval(x);
    document.getElementById("output-value").value = y;
}
function clr(){
    document.getElementById("output-value").value="";
}

function backspace(){
    var val=document.getElementById("output-value").value;
    document.getElementById("output-value").value=val.slice(0,-1);

}