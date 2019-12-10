//Math.floor((Math.random() * 5) + 1);
var scores, roundScore, activeplayer, dice, gamePlaying, diceFirstSixRoll;

init();


//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);




//anonymus fuction - kad ju cijelu upiseomo u drugi argument.-- function(){bla bla}
//callback function - kad napisemo samo btn kao funkciju u drugi argument i ocekojemo da druga funkcija pozove nju

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        var dice = Math.floor((Math.random() * 5) + 1); 
        var diceTwo = Math.floor((Math.random() * 5) + 1);
    var diceDOM = document.querySelector('.dice');
    var diceDomTwo = document.querySelector('.diceTwo');
    var currentDOM = document.querySelector('#current-');
    diceDOM.style.display = 'block';
    diceDomTwo.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    diceDomTwo.src = 'dice-' + diceTwo + '.png';
        
    if(dice !== 1 && diceTwo !== 1){
        //Add score
        roundScore += dice;
        roundScore += diceTwo;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {
        //Next player
        nextPlayer();
    }
    if(dice === 6 && diceFirstSixRoll === 1){
        diceFirstSixRoll=0;
        scores[activePlayer] = 0;
        nextPlayer();
        
        
    }else if(dice === 6){
        diceFirstSixRoll = 1;
    }
    
    
    }
    
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    //add current to score
    if(gamePlaying){
        
        scores[activePlayer] += roundScore;
    
    //update the ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >= document.getElementById("maxValue").value){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.diceTwo').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }else{
        nextPlayer();
    }
    }
    
    
    
    
});

function nextPlayer() {
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.diceTwo').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

     
function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    diceFirstSixRoll = 0;
    gamePlaying=true;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.diceTwo').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     
                                                     