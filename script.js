let allbox = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")
let body = document.querySelector("body");
let newBtn = document.querySelector("#new-btn");
let winnername = document.querySelector(".winner");
let winnerMsg = document.querySelector("#winner-msg");
let turn0 = true;
let hovervalue = document.querySelectorAll(".value");
// let turnshow = document.createElement("p");
console.log(allbox);
console.log(hovervalue);

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

allbox.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "O"
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
        
    });
});



// hovervalue.forEach((hover) =>{
//     hovervalue.addEventListener("mouseover",()=>{
//         if(turn0){
//             hover.innerText = "O";
//         }
//         else{
//             hover.innerText = "X";
//         }
//     });
// });

// hovervalue.forEach((hover) =>{
//     hover.addEventListener("mouseout",()=>{
//             hover.innerText = "";
//     });
// });




const showWinner = (winner) =>{
    winnerMsg.innerText=`Winner is the Player ${winner}`;
    winnername.classList.remove("hide");
    for(box of allbox){
        box.disabled = true;
    }
}

const resetGame = () =>{
    turn0 = true;
    for(box of allbox){
        box.innerText = "";
        box.disabled = false;
    }
    winnername.classList.add("hide");

}


function mouseOver() {
    if(turn0){

    }
}
  
function mouseOut() {
    document.getElementById("demo").style.color = "black";
}


const checkWinner = () =>{
    let h1 = document.createElement("h1");
    for(pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(allbox[pattern[0]].innerText === "O", allbox[pattern[1]].innerText ==="O",allbox[pattern[2]].innerText === "O")
        // if(allbox[pattern[0]].innerText === "O" && allbox[pattern[1]].innerText ==="O" && allbox[pattern[2]].innerText === "O"){
        //     // h1.innerText="Winner is player 1";
        //     console.log("player 1 winner");
        // }
        // else if(allbox[pattern[0]].innerText === "X" && allbox[pattern[1]].innerText ==="X" && allbox[pattern[2]].innerText === "X"){
        //     // h1.innerText="Winner is player 2";
        //     console.log("player 2 winner");

        // }

        value1 = allbox[pattern[0]].innerText;
        value2 = allbox[pattern[1]].innerText;
        value3 = allbox[pattern[2]].innerText;

        if(value1 != "" && value2 != "" && value3 != ""){
            if (value1 === value2 && value2 === value3){
                
                console.log("Winner" , value1);
                showWinner(value1);
            } 
        }

        
    }
}

resetBtn.addEventListener("click" , resetGame);
newBtn.addEventListener("click", resetGame);