// --------------------
// Falling hearts animation (only on index page if you add class)
// --------------------

if(document.body.classList.contains("home-page")){

setInterval(()=>{

let heart=document.createElement("div")

heart.innerHTML="❤️"
heart.style.position="fixed"
heart.style.left=Math.random()*100+"%"
heart.style.top="-10px"
heart.style.fontSize="20px"
heart.style.pointerEvents="none"

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},4000)

},500)

}


// --------------------
// Game logic
// --------------------

let score=0
let winningScore=10

let gameArea=document.getElementById("gameArea")

function createHeart(){

let heart=document.createElement("div")

heart.classList.add("heart")

heart.innerHTML="❤️"

let x=Math.random()*460
let y=Math.random()*300

heart.style.left=x+"px"
heart.style.top=y+"px"

heart.onclick=function(){

score++
document.getElementById("score").innerText=score
heart.remove()

if(score>=winningScore){
document.getElementById("winPopup").style.display="flex"
}

}

gameArea.appendChild(heart)

setTimeout(()=>heart.remove(),2000)

}

if(gameArea){
setInterval(createHeart,1000)
}

function closePopup(){
document.getElementById("winPopup").style.display="none"
}


// --------------------
// Typewriter letter
// --------------------


let message = `Dear Bubba,❤️<br><br>
i don't know how to express my feelings in words.
but You are the most special person in my life.being with you makes every day better.
you are hope my safe place the person I can always count on. you make everything lil less hard. <br><br>
had to public this so, can't write that long letter over here. bt want to let you know that u matter to me alot<br>
I hope this birthday brings you peace, love, money and success.
Thank you for being in my life my love <br>
I love you so much ❤️<br><br>
yours olny <br>
Booba`;

let i = 0;

function typeLetter(){

let text = document.getElementById("typewriter-text");

if(!text) return;

let typing = setInterval(function(){

text.innerHTML = message.substring(0, i);

i++;

if(i > message.length){
clearInterval(typing);
}

},40);

}

typeLetter();

// --------------------
// Password system
// --------------------

function checkPassword(){

let entered=document.getElementById("sitePassword").value

let gate=document.getElementById("passwordGate")

let correct=gate.getAttribute("data-password")

if(entered===correct){

gate.style.display="none"
document.getElementById("protectedContent").style.display="block"

}else{

alert("Wrong password ❤️")

}

}

function flipCard(card){

if(!card.classList.contains("flipped")){
card.classList.add("flipped");
}

}

function lastCard(card){

if(!card.classList.contains("flipped")){

card.classList.add("flipped");

confetti();

}

}

function confetti(){

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-20px";
heart.style.fontSize="24px";

document.body.appendChild(heart);

let fall=setInterval(()=>{

heart.style.top=parseInt(heart.style.top)+5+"px";

if(parseInt(heart.style.top)>window.innerHeight){

heart.remove();
clearInterval(fall);

}

},20);

}

}

// Falling hearts animation //

setInterval(function(){

let heart=document.createElement("div");

heart.classList.add("floating-heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(15+Math.random()*20)+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

},600);

