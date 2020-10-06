function fight(){
    let monster = prompt("What is the name of the monster you are fighting?");
    let hero = prompt("What is the name of the hero you are playing?");
    let villainHealth = 50;
    let heroHealth = 50;

    while (villainHealth > 0 && heroHealth > 0) {
      let heroDiceRoll = Math.floor(Math.random() * 20) + 1; 
      let monsterDiceRoll = Math.floor(Math.random() * 20) + 1;
      
      if (heroDiceRoll === 1 || heroDiceRoll === 2) {
        heroHealth -=5;
        alert(`${hero} accidentally stabbed themselves! 5 points damage to ${hero}. ${hero}'s HP is now ${heroHealth}`);
      }
      if (monsterDiceRoll === 1 || monsterDiceRoll === 2){
        villainHealth -=5;
        alert(`${monster} accidentally stabbed themselves! 5 points damage to ${monster}. ${monster}'s HP is now ${villainHealth}`);
      }
      if (heroDiceRoll > 2 && heroDiceRoll < 11){
        alert(`${hero} misses! No damage done to ${monster}`);
      }
      if (monsterDiceRoll > 2 && monsterDiceRoll < 11){
        alert(`${monster} misses! No damage to ${hero}`);
      }
      if (heroDiceRoll > 10 && heroDiceRoll < 19){
        villainHealth -=10;
        alert(`${hero} hit ${monster}! 10hp damage to ${monster}! ${monster}'s HP is now ${villainHealth}, ${hero}'s HP is now ${heroHealth}`);
      }
      if (monsterDiceRoll > 2 && monsterDiceRoll < 11){
        heroHealth -=10;
        alert(`${monster} hit ${hero}! 10hp damage to ${hero}! ${hero}'s HP is now ${heroHealth}, ${monster}'s HP is now ${villainHealth}`);
      }
      if (heroDiceRoll === 19 || heroDiceRoll === 20){
        villainHealth -=20;
        alert(`${hero} made a critical hit! 20hp damage to ${monster}! ${monster}'s health is now ${villainHealth}, ${hero}'s HP is now ${heroHealth}.`);
      }
      if (monsterDiceRoll === 19 || monsterDiceRoll === 20){
        heroHealth -=20;
        alert(`${monster} made a critical hit! 20hp damage to ${hero}! ${hero}'s health is now ${heroHealth}`);
      }
    }

    if(heroHealth > 0){
        alert(`Fight over - ${hero} is the winner!`);
    } else if(villainHealth > 0){
        alert(`Fight over - ${monster} is the winner!`);
    } else {
        alert(`Fight over - You both killed each other on the final blow - nobody won!`);
    }

    let playAgain = prompt(`Would you like to play again? Please enter 'yes' or 'no'`);
    if(playAgain === 'yes'){
        fight();
    } else if (playAgain === 'no'){
        alert('Thank you for playing! Game Ended.');  
    } else {
        prompt(`Would you like to play again? Please enter 'yes' or 'no'`);
    }
  }

  fight();

  