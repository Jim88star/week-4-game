// global

var crystal = {
  blue:
    {
      name: "Blue",
      value: 0
    },
  green:
    {
      name: "Green",
      value: 0
    },
  red:
    {
      name: "Red",
      value: 0
    },
  yellow:
    {
      name: "Yellow",
      value: 0
    },
};


var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;


// functions

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function () {

  // reset current score
  currentScore = 0;

  // reset new target score 19 to 120
  // targetScore = Math.floor((Math.random() * 102) + 19);
  targetScore = getRandom(19, 120);

  // reset new crystal values 1 to 12
  crystal.blue.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);
  crystal.red.value = getRandom(1, 12);
  crystal.yellow.value = getRandom(1, 12);

  // update html with new values
  $("#yourScore").html(currentScore);
  $("#targetScore").html(targetScore);

  // testing
  console.log("------");
  console.log("targetScore: " + targetScore);
  console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
  console.log("------");
};

// respond to clicks on crystals
var addValues = function (crystal) {

  // change current score
  currentScore = currentScore + crystal.value;

  // change html to reflect current score
  $("#yourScore").html(currentScore);

  // call check win function
  checkWin();

  // testing
  console.log("Your Score: " + currentScore);
};

// check if user won or lost and reset game
var checkWin = function () {
  // check if currentScore is larger than targetScore
  if (currentScore > targetScore) {
    alert("Sorry, you lost!");
    console.log("You lost");

    // add to loss counter
    lossCount++;

    // change html to reflect loss counter
    $("#lossCount").html(lossCount);

    // restart game
    startGame();


  }

  else if (currentScore == targetScore) {
    alert("Congratulations! You won!");
    console.log("You won");

    // add to win counter
    winCount++;

    // change html to reflect win counter
    $("#winCount").html(winCount);

    // restart game
    startGame();


  }
}
  // process

  // starts game first time
  startGame();

  $("#blue").click(function () {

    addValues(crystal.blue);

  });
  $("#green").click(function () {
    addValues(crystal.green);
  });
  $("#red").click(function () {
    addValues(crystal.red);
  });
  $("#yellow").click(function () {
    addValues(crystal.yellow);
  });
