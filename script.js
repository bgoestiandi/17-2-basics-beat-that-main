var Dice = [];

function getDiceNumber1() {
  var diceNumber1 = Math.floor(Math.random() * 6) + 1;
  // Dice.push(diceNumber1);
  return diceNumber1;
}

function getDiceNumber2() {
  var diceNumber2 = Math.floor(Math.random() * 6) + 1;
  // Dice.push(diceNumber2);
  return diceNumber2;
}

function main(input) {
  if (Dice.length < 1) {
    Dice.push(Number(`${getDiceNumber1()}${getDiceNumber2()}`));
    return `Player 1 rolled ${Dice[0]}`;
  } else if (Dice.length < 2) {
    Dice.push(Number(`${getDiceNumber1()}${getDiceNumber2()}`));
    return `Player 1 rolled ${Dice[0]} <br> Player 2 rolled ${Dice[1]}`;
  } else if (Dice[0] > Dice[1]) {
    return `Player 1 rolled ${Dice[0]} <br> Player 2 rolled ${Dice[1]} <br> Player 1 Won!`;
  } else {
    return `Player 1 rolled ${Dice[0]} <br> Player 2 rolled ${Dice[1]} <br> Player 2 Won!`;
  }
}
