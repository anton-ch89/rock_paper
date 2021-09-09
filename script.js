'use strict';

const game = () =>{
    let pScore = 0;
    let cScore = 0;
    const playBtn = document.querySelector('.intro button'),
    intro = document.querySelector('.intro'),
    match = document.querySelector('.match'),
    again = document.querySelectorAll('.again'),
    winner = document.querySelector('.winner');



    //Start the game
    const startGame = () => {

        playBtn.addEventListener('click', () => {
            intro.classList.add('fadeOut');
            match.classList.toggle('fadeOut');
        });
    };
    //Play match

    const playMatch = () => {
        const options = document.querySelectorAll('.options button'),
        pHand = document.querySelector('.player-hand'),
        cHand = document.querySelector('.computer-hand'),
        computerOptions = ['rock', 'paper', 'scissors'],
        hands = document.querySelectorAll('.hands img'),
        playerWins = document.querySelector('.player-wins'),
        computerWins = document.querySelector('.computer-wins');

        //Animation 
        hands.forEach(hand => {
            hand.addEventListener('animationend', () => {
                hand.style.animation = '';
            });
        });

        //Computer choise

        options.forEach(option => {
            option.addEventListener('click', () => {
                const computerNumber  = Math.floor(Math.random() * 3);
                const computerChoise = computerOptions[computerNumber];
                //Update images
                pHand.src = `./images/rock.png`;
                cHand.src= `./images/rock.png`;

                setTimeout(() => {
                let scoers =  compareHands(option.textContent, computerChoise);
                if(pScore === 5) {
                    match.classList.toggle('fadeOut');
                    playerWins.classList.remove('fadeOut');
                    return;
                }
                else if(cScore === 5) {
                    match.classList.toggle('fadeOut');
                    computerWins.classList.remove('fadeOut');
                    return;
                }
                again.forEach(e => {
                    e.addEventListener('click', () => {
                        computerWins.classList.add('fadeOut');
                        playerWins.classList.add('fadeOut');
                        intro.classList.remove('fadeOut');
                        document.querySelector('.player-score p').textContent = pScore = 0;
                        document.querySelector('.computer-score p').textContent = cScore = 0;                    
                        winner.textContent = "Let's play";
                    });
                });
        
                pHand.src = `./images/${option.textContent}.png`;
                cHand.src= `./images/${computerChoise}.png`;
                }, 2000);

                pHand.style.animation = 'shakePlayer 2s ease';
                cHand.style.animation = 'shakeComputer 2s ease';
            });
        }); 

    };
    
    const updateScore = () => {
        document.querySelector('.player-score p').textContent = pScore;
        document.querySelector('.computer-score p').textContent = cScore;    

        // again.forEach(e => {
        //     e.addEventListener('click', ()=>{

        //     })
        // });
    };

    const compareHands = (playerChoise, computerChoise) => {

        //Update main text

        //Checking for tie

        if(playerChoise === computerChoise) {
            winner.textContent = "It's a tie";
            return;
        }

        //Checking rock 

        if(playerChoise === 'rock'){
            if(computerChoise === 'scissors'){
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return pScore;
            } else{
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return cScore;
            }
        } 

        //Checking paper

        if(playerChoise === 'paper'){
            if(computerChoise === 'rock'){
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return pScore;
            }else{
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return cScore;
            }
        } 
        //Checking scissors
        
        if(playerChoise === 'scissors'){
            if(computerChoise === 'paper'){
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return pScore;
            } else{
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return cScore;
            }
        }
    };




    startGame();
    playMatch();
};


game();