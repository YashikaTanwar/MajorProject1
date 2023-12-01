/*creating a dictionary */
const userOptions={
    "stone":"/assets/Rock.png",
    "paper":"/assets/Paper.png",
    "scissor":"/assets/Scissors.png"
};
let UserScore=0;
let PcScore=0;
/*arrow function for user values*/

const pickUser=(hand)=>{

    //after selecting the options we want the user to move to the next page but it should hide the current page as well
    
    let content=document.querySelector(".content");
    content.style.display="none";

    let contest=document.querySelector(".contest");
    contest.style.display="flex";

    let next=document.querySelector(".rules");
    next.style.display="flex";

    //set user pick using dictionary
    document.querySelector("#option_user").src=userOptions[hand];
    pickComputer(hand); // we have saved the value of pc option here
    
}

const pickComputer=(hand)=>{
    let hands=["stone","paper","scissor"];
    let pcHands=hands[Math.floor(Math.random()*3)];
    console.log(pcHands);
    document.querySelector("#option_pc").src=userOptions[pcHands];
    // return pcHands;
    referee(hand,pcHands); 
}

// to calculate score
const referee=(userHand,pcHands)=>{
    if(userHand=="paper" && pcHands=="scissor")
    {
        Decision("YOU LOSE");
        SetPCScore(PcScore + 1);
    }
    if(userHand=="paper" && pcHands=="rock")
    {
        Decision("YOU WIN");
        SetUSERScore(UserScore + 1);
    }
    if(userHand=="paper" && pcHands=="paper")
    {
        Decision("IT's A TIE");
    }
    if(userHand=="rock" && pcHands=="scissor")
    {
        Decision("YOU WIN");
        SetUSERScore(UserScore + 1);
    }
    if(userHand=="rock" && pcHands=="paper")
    {
        Decision("YOU LOSE");
        SetPCScore(PcScore + 1);
    }
    if(userHand=="rock" && pcHands=="rock")
    {
        Decision("IT's A TIE");
    }
    if(userHand=="scissor" && pcHands=="paper")
    {
        Decision("YOU WIN");
        SetUSERScore(UserScore + 1);
    }
    if(userHand=="scissor" && pcHands=="rock")
    {
        Decision("YOU LOSE");
        SetPCScore(PcScore + 1);
    }
    if(userHand=="scissor" && pcHands=="scissor")
    {
        Decision("IT's A TIE");
    }
}

const Decision=(decision)=>{
    console.log(decision);
    document.querySelector("#rank").innerHTML=decision;
}

const SetUSERScore=(userscore)=>{
    UserScore=userscore;
    document.querySelector("#your_score").innerHTML=userscore;
}

const SetPCScore=(pcscore)=>{
    PcScore=pcscore;
    document.querySelector("#computer_score").innerHTML=pcscore;
}

const restartGame=()=>{
    let content=document.querySelector(".content");
    content.style.display="flex";

    let contest=document.querySelector(".contest");
    contest.style.display="none";
}