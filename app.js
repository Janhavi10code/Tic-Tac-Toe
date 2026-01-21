let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelectorAll(".reset-btn");

let turno=true; //player x, player o

const winPatterns=[
    [0,1,2],
    [0,3,6], 
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=> {
    box.addEventListener("click", () =>{
        console.log("box was clicked");

    if(turno){ //player o
        box.innerText ="O";
        turno = false;
    }else { //player x
         box.innerText ="X";
         turno=true;
    }
    box.disabled= true;
    checkwinner();
    });
});


const checkwinner = () => {
    for(let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    }
};