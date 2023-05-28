console.log("welcome to tic tac toe ");
let turn="X";
let isgameover= false;
let finishaudio=new Audio("music.mp3");
let clickmusic=new Audio("gameover.mp3");
//function to change the turn 
const changeturn=() =>{
return turn === "X"?"0":"X";
}
// function to check for a win 
const checkWin=() =>{
    let boxtext = document.getElementsByClassName("text");
    let win = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    win.forEach(e=> {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
                finishaudio.play();
                isgameover=true;
        document.querySelector('.info').innerText = (boxtext[e[0]].innerText + "won");
        document.querySelector(".dance").getElementsByTagName("img")[0].style.visibility="visible";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        document.querySelector(".line").style.width = "20vw";
    }
               
                
        })  }        
    


//main logic 

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext= element.querySelector(".text");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===""){
            boxtext.innerText= turn;
            turn = changeturn(); 
            clickmusic.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText=`"Turn for" ${turn}`}
         console.log("123456");

        }
    } )
})
let reset = document.querySelector("#reset");
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll(".text");
    Array.from(boxtext).forEach(element=>{
        element.innerText= "";
    });
    turn="X";
    finishaudio.pause();
    document.getElementsByClassName("info")[0].innerText=`"Turn for"  ${turn}`;
    document.querySelector(".dance").getElementsByTagName('img')[0].style.visibility="hidden";
    isgameover = false;
    document.querySelector('.line').style.width="0vw";

})