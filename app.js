const redb = document.querySelector("#redbtn");
const blueb = document.querySelector("#bluebtn");
const resetb = document.querySelector("#resetbtn");
const score1 = document.querySelector("#teamRed");
const score2 = document.querySelector("#teamBlue");
const body =document.querySelector("body");
let i=0;
redb.addEventListener('click', function cd(){
    i+=1;
    score1.innerText =`${i}`;
    if(i>j)
     body.style.backgroundColor = "red";
    if(i==j)
     body.style.backgroundColor = "white";
     
})
let j=0;
blueb.addEventListener('click', function ced(){
    j+=1;
    score2.innerText =`${j}`;
    if(j>i)
     body.style.backgroundColor = "blue";
    if(i==j)
     body.style.backgroundColor = "white";
})
resetb.addEventListener('click', function crd(){
    score1.innerText ="0";
    score2.innerText ="0";
    i=j=0;
    body.style.backgroundColor = "white";
})