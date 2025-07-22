let gameSeq=[];

let userSeq=[];
let start="false";



let level=0;
let btns=["red","skyblue","blue","green"]
let h3=document.querySelector("h3")
let h2=document.querySelector("h2")
document.addEventListener("keypress" ,function(){
    if(start==="false"){
        console.log("game is started");
        start=true;
        levelUp();
       
    }
    
});
function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");

    },300);
}
function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash");

    },300);
}
function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`level is ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor)
    console.log(gameSeq)

    console.log(randBtn);
    btnFlash(randBtn);

}
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000);
        }
        }
        else{
            h3.innerHTML=`Game Over!your score was <b> ${level}</b><br> Press any key to start`;
            
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";
            },150)
           reset();

    }
}
function btnPress(){

    let btn=this;
    userFlash(btn);
    
    userColor=btn.getAttribute("id");
    userSeq.push(userColor)

    checkAns(userSeq.length-1)

}
let allBtns=document.querySelectorAll(".btn");
for( btn of allBtns){
    btn.addEventListener("click",btnPress)
}
function reset(){
    

}