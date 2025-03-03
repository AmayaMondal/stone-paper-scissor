let userscore=0;
let compscore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const uscore=document.querySelector('#user-score');
const cscore=document.querySelector('#comp-score');
const reloadbtn=document.querySelector('.button');

const getcompchoice = () => {
    const options = ["stone","paper","scissor"];
    const randId=Math.floor(Math.random()*3);
    return options[randId];
}



const drawgame=()=>{
    console.log("Game was draw");
    msg.innerText = "Game was draw.Play again";
    msg.style.backgroundColor="black";
}

const playgame=(userchoice)=>{
    console.log("user choice is ",userchoice);
    //user choice is taken as input
    const compchoice=getcompchoice();
    console.log("computer choice is ",compchoice);

    if (userchoice==compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="stone"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }else{
            userwin=compchoice==="stone"?false:true;
        }
        showwinner(userwin);
    }
    
}

const showwinner = (userwin) => {
    if(userwin){
        userscore++;
        uscore.innerText=userscore;
        console.log("you win");
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        cscore.innerText=compscore;
        console.log("you loose");
        msg.innerText="You loose";
        msg.style.backgroundColor="red";
        
        
    }
}

const update_uscore=()=>{


}
    


choices.forEach((choice) => {
    choice.addEventListener("click",(event)=>{
        event.stopPropagation;
        const userchoice=choice.getAttribute("id")
        playgame(userchoice);

    });
});


    reloadbtn.addEventListener(("click"),()=>
{
    location.reload();
});
