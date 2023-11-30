/*creating a dictionary */
const userOptions={
    "stone":"/assets/Rock.png",
    "paper":"/assets/Paper.png",
    "scissor":"/assets/Scissors.png"
};

/*arrow function for user values*/

const pickUser=(hand)=>{
    console.log(hand);

    //after selecting the options we want the user to move to the next page but it should hide the current page as well
    
    let content=document.querySelector(".content");
    content.style.display="none";

    let contest=document.querySelector(".contest");
    contest.style.display="flex";

    let next=document.querySelector(".rules");
    next.style.display="flex";

    //set user pick using dictionary
    document.querySelector("#option_user").src=userOptions[hand];
}