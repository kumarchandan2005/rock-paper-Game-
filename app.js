let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx= Math.floor(Math.random()*3);
    return options[randidx];
}
const drawGame =() =>{
    // console.log("game was draw.");
    msg.innerText=" Game was draw. play again";
    // msg.style.backgroundcolor="blue";
    msg.style="background:blue";
}
const showWinner =(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win!");
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style="background:green";
    } else {
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText=`you lose  ${compchoice} beats ${userchoice}`;
        // msg.style.backgroundcolor="red";
        msg.style="background:red";
    }
};

const playGame=(userchoice) =>{
    console.log("user choice =",userchoice);
    let compchoice=gencompchoice();
    console.log("comp choice =",compchoice);

    if(userchoice==compchoice){
        drawGame();
    } else {
        let userwin=true;
        if(userchoice==="rock"){
          userwin =  compchoice==="paper" ? false : true;
        } else if(userchoice==="paper"){
          userwin= compchoice==="rock" ? true : false;
        } else {
           userwin= compchoice==="rock" ? false : true;    
        }
        showWinner(userwin,userchoice,compchoice);
    }
};


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id")
        //  console.log("choice was  clicked", choiceid);
        playGame(userchoice);
    });
});