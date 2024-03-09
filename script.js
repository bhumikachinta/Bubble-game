var timer=60 ;
var score=0;
var hitrn;

// eventbubbling jo element pr click krte hai tb eventlistener milgya tho thik wrna vo uske parent me dhoondega vha bhi nhi mila tho parent ke parent me dhhondega

function increasscore(){
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}

function runhit(){
   hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function makeBubble(){
   
   
    var clutter = "";
    for(var i=1; i<=189; i++)
    {
        var rn= Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

// var timer=60;
function runtimer(){
   var timerint= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#time").textContent=timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML =`<h1>GAME OVER!<h1>`;
            // document.querySelector("#pbtm").innerHTML=increasscore;
            
        }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickdnumber = Number(details.target.textContent);
    if(clickdnumber === hitrn){
        increasscore();
        runhit();
        makeBubble();
        

    }
}); 
runtimer();
makeBubble();
runhit();



