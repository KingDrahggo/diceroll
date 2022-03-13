let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDie(3));

function twoDice() {
  return rollDie() + rollDie();
}
console.log(twoDice(2));

let roll = document.querySelector("#roll");
let result = document.querySelector("#result");
let graph = document.querySelector("#graph");
let roll1000 = document.getElementById("roll1000");
roll.addEventListener("click", callBack);
roll1000.addEventListener("click", callBack2);

function callBack() {
  let randomRoll = twoDice();
  console.log(randomRoll);
  result.innerHTML = `The number rolled was ${randomRoll}!`;
  results[randomRoll] += 1;
  console.log(results);
  renderGraph();
}

function callBack2() {
  let roll = 0;
  for (let index = 1; index <= 1000; index++) {
    roll = twoDice();
    results[roll] += 1;
  }
  result.innerHTML = `The number rolled 1000 times!`;
renderGraph();
}

function renderGraph() {
  let div = "";
  for (let index = 2; index < results.length; index += 1)
    div += `<p> You rolled ${index}: <br>  ${results[index]} times!</p>`;
  graph.innerHTML = div;
}
renderGraph();

