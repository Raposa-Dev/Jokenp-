const sectionJokenpo = {
  "0": "Pedra",
  "1":"Papel",
  "2": "Tesoura",
};

function Randomize(){ 
  let number = Math.round(Math.random() * 2);
  return number;
};

function shiftClass() {
  let screenTwo = document.getElementById("screenTwo");
  let screenOne = document.getElementById("screenOne");
  let verificationOne = screenOne.classList[1] == "hidden";
  let verificationTwo = screenTwo.classList[1] == "hidden";
  if(verificationOne || verificationTwo) {
    screenOne.classList.toggle('hidden');
    screenTwo.classList.toggle('hidden');
  };

};

function finalMessage(arg) {
  document.getElementById("message").innerText = `${arg}`;
};

function playGame(event) {
  let play = event.target.innerHTML;
  let number = Randomize();
  let comparator = Number(event.target.className);
  if(comparator === 0 && number === 2 || comparator === 1 && number === 0 || comparator === 2 && number === 1) {
    shiftClass();
    finalMessage(
      `
        Venceu!

        Você escolheu: ${play}

        Bot escolheu: ${sectionJokenpo[number]}

      `
    );
  } else if (comparator === number ) {
    shiftClass();
    finalMessage(
      `
        Empatou!

        Ambos escolheram: ${play}

      `
    );
  } else{
    shiftClass();
    finalMessage(
      `
        Não foi dessa vez :( 
        
        Você escolheu: ${play}
        
        Bot escolheu: ${sectionJokenpo[number]}
      `
    );
  }; 
};

function inity(event){
  playGame(event);
};