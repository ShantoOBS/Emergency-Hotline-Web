

let heartCount=document.querySelector("#heartCount");

function heartValueIncrease(){
    let currentNum=parseInt(heartCount.textContent)+1;
    heartCount.textContent=currentNum;
}


document.querySelector("#heart1").addEventListener("click",(e)=>{
    heartValueIncrease() ;
});
document.querySelector("#heart2").addEventListener("click",(e)=>{
    heartValueIncrease() ;
});
document.querySelector("#heart3").addEventListener("click",(e)=>{
    heartValueIncrease() ;
});
document.querySelector("#heart4").addEventListener("click",(e)=>{
    heartValueIncrease() ;
});
document.querySelector("#heart5").addEventListener("click",(e)=>{
    heartValueIncrease() ;
});
document.querySelector("#heart6").addEventListener("click",(e)=>{
    heartValueIncrease() ;
});
document.querySelector("#heart7").addEventListener("click",(e)=>{
    heartValueIncrease() ;
});
document.querySelector("#heart8").addEventListener("click",(e)=>{
    heartValueIncrease() ;
});
document.querySelector("#heart9").addEventListener("click",(e)=>{
    heartValueIncrease() ;
});

