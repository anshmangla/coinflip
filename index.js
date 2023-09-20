var randomNumber1 = Math.floor(Math.random()*2)+1;
document.querySelector(".img1").setAttribute("src","images/coin"+randomNumber1+".gif");
if (randomNumber1===1) {
  document.querySelector("h1").textContent = "Heads!";
} else if (randomNumber1===2) {
  document.querySelector("h1").textContent = "Tails!";
}
