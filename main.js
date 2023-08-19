var timer=15;
var hitNumber=0;
var score=0;

function makeBubble(){
    var bubble="";
//const bubbleBox=document.querySelector('.bubble-box');
for(let i=0; i<118; i++){
    var randomNumber=Math.floor (Math.random()*10);
  bubble+=`<div id="bubble">${randomNumber}</div>`
}
document.querySelector(".bubble-box").innerHTML = bubble;
}



function runTimer(){
   var timeInterval = setInterval(function(){
       if(timer>0){
        timer--;
        document.querySelector(".time").textContent=timer;
       }
       else{
        clearInterval(timeInterval)
        var bBox=document.querySelector(".bubble-box")
        bBox.innerHTML="<h1><u>GAME OVER</u></h1>";
        bBox.classList.add("active");
        var h1=document.querySelector(".score-active")
        h1.classList.add("current-score")
        h1.innerHTML=`Your score is- ${score}`
        // var yourScore=document.createTextNode(`score ${score}`);
        bBox.appendChild(h1);

       }
    },1000)
}

function getNewHit(){
    hitNumber=Math.floor(Math.random()*10)
    document.querySelector(".hit").textContent=hitNumber;
}
 
function increaseScore(){
    score+=10;
    document.querySelector(".score").textContent=score;
}

document.querySelector(".bubble-box").addEventListener("click",function(detail){
    var clickNum=Number(detail.target.innerHTML);
    if(clickNum===hitNumber){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

const refresh=document.querySelector(".btn")
refresh.addEventListener("click", ()=>{
    console.log("refresh");
    location.reload()
})

runTimer()
makeBubble();
getNewHit();
