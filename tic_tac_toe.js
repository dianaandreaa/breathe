

//Gameboard.

const CPU_PLAYER = (function(){

    const getRobotMoveIndex = gameArr => {
        let possibleMoves = []; 
        for(let i = 0; i < gameArr.length; i++)
        {
            if(gameArr[i] === "")
            {
                possibleMoves.push(i);
            }
        }
        let randomIndex = Math.floor(Math.random() * possibleMoves.length);
        return possibleMoves[randomIndex];
    }

    return { getRobotMoveIndex }
})();

const GAME_BOARD = (function(){
    let boardArr = ["","","","","","","","",""];
    let symbol = "x";
    let isPlaying = false;
    let currentPlayer = undefined;
    let maximumFlags = 3; //How many flags to win

    const SQUARES = document.querySelectorAll(".board-square");

    const startGame = () => {
        isPlaying = true;
        currentPlayer = player1;
        currentPlayer.makeGlow();

        const squaresArr = Array.from(SQUARES);
        squaresArr.forEach(square => {
            square.addEventListener("click", e => {
                let index = squaresArr.indexOf(square);

                if (isPlaying && boardArr[index] === "")
                {
                    fillSquare(index);
                    
                    if(checkWinCondition())
                    {
                        //Win
                        isPlaying = false;
                        currentPlayer.addFlag();
                        restart();
                    }
                    else if(boardArr.filter(elem => elem).length === 9)
                    {
                        //Draw
                        isPlaying = false;
                        restart();
                    }
                    else{
                        changeTurn();
                        //When playing vs bot
                        if(player2.isCPU())
                        {
                            isPlaying = false;
                            setTimeout(() => {
                                fillSquare(CPU_PLAYER.getRobotMoveIndex(boardArr));
                                //Check for Draw
                                if(checkWinCondition())
                                {
                                    //Win
                                    currentPlayer.addFlag();
                                    restart();
                                }
                                else if(boardArr.filter(elem => elem).length === 9)
                                {
                                    restart();
                                }
                                else
                                {
                                    isPlaying = true;
                                    changeTurn();
                                }
                            }, 800);
                        }
                    }
                }
            })
        })
    }

    const endGame = () => {
        //Win msg
        let p1win = ["Y","O","U","","","","W","O","N"];
        let p2win = ["P","L","A","Y","E","R","W","O","N"];
        
        let winnerArr = player1.getFlags() === maximumFlags? p1win: p2win;

        const squaresArr = Array.from(SQUARES);
        
        squaresArr.forEach(square => {
            let index = squaresArr.indexOf(square);
            symbol = winnerArr[index];
            fillSquare(index);
        })

        //Reset
        let resetBtn = document.querySelector("#reset-btn");
        resetBtn.style.cssText = "display: show; animation:popup 0.3s ease forwards;";
        resetBtn.addEventListener("click", e => {
            resetGame();
            resetBtn.style.cssText = "animation: fade-out 0.3s ease forwards";
            setTimeout(() => resetBtn.style.cssText = "display:none;", 400);
        })
    }

    const restart = () => {
        setTimeout(clearBoard, 1800);
        if(player1.getFlags() < maximumFlags && player2.getFlags() < maximumFlags)
        {
            changeTurn();
            if(currentPlayer === player2 && player2.isCPU()) //Start with cpu move
            {
                setTimeout(() => {
                    fillSquare(CPU_PLAYER.getRobotMoveIndex(boardArr));
                    isPlaying = true;
                    changeTurn();
                }, 2600);
            }
            else
            {
                //Animation takes 0.3s = 300ms add atleast +400 more
                setTimeout(() => isPlaying = true, 2200);
                //Restart game on the next player turn
            }
        }
        else
        {
            setTimeout(endGame, 2200);
        }
    }

    const changeTurn = () => {
        symbol = symbol === "x"? "o": "x"; 
        currentPlayer.removeGlow();
        currentPlayer = currentPlayer == player1? player2: player1;
        currentPlayer.makeGlow();
    }

    const fillSquare = index => {
        boardArr[index] = symbol;

        let spanText = document.createElement("span");
        spanText.classList.add("text");
        spanText.innerText = symbol;
        SQUARES[index].appendChild(spanText);
    }

    const checkWinCondition = () => {
        if  (boardArr[0] === symbol && boardArr[1] === symbol && boardArr[2] === symbol
            || boardArr[3] === symbol && boardArr[4] === symbol && boardArr[5] === symbol
            || boardArr[6] === symbol && boardArr[7] === symbol && boardArr[8] === symbol
            || boardArr[0] === symbol && boardArr[3] === symbol && boardArr[6] === symbol
            || boardArr[1] === symbol && boardArr[4] === symbol && boardArr[7] === symbol
            || boardArr[2] === symbol && boardArr[5] === symbol && boardArr[8] === symbol
            || boardArr[0] === symbol && boardArr[4] === symbol && boardArr[8] === symbol
            || boardArr[2] === symbol && boardArr[4] === symbol && boardArr[6] === symbol)
            return true
        else
            return false
    };

    const clearBoard = () => {
        boardArr = ["","","","","","","","",""];
        
        SQUARES.forEach(square => {
            let span = square.firstElementChild;
            if(span !== null)
            {
                span.style.cssText = "animation: fade-out 0.3s ease forwards;";
                span.addEventListener("animationend", () => {
                    square.innerHTML = "";
                })
            }
            else
            {
                square.innerHTML = "";
            }
        })
    };

    const resetGame = () => {
        player1.resetFlags();
        player2.resetFlags();
        currentPlayer.removeGlow();
        clearBoard();

        setTimeout(() => {
            isPlaying = true;
            currentPlayer = player1;
            symbol = "x";
            currentPlayer.makeGlow();
        }, 400);
    }

    return { startGame }
})();



const factoryPlayer = (name, sideID, type) =>{  
    const PLAYER_ICON = `<img src="dog_happy.svg">`;

    const CPU_ICON = `<img src="laptop.png" width="160" height="160">`;

    const FLAG_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
    </svg>`;

    let playerName = name;
    const playerSide = document.querySelector(`#${sideID}`);
    const ICON = playerSide.querySelector(".player-icon");

    type === "player"? ICON.innerHTML = PLAYER_ICON: ICON.innerHTML = CPU_ICON;

    const PLAYER_FLAGS = playerSide.querySelector(".player-wins");

    //Flags is the variable to keep track of wins
    let flags = 0;

    const setName = newName => {
        playerName = newName || name;
    };

    const getName = () => playerName;

    const addFlag = () => {
        PLAYER_FLAGS.innerHTML += FLAG_ICON;
        flags ++;
    }

    const getFlags = () => flags;

    const resetFlags = () => {
        flags = 0;
        PLAYER_FLAGS.innerHTML = "";
    }

    const isCPU = () => type === "cpu";
 
    const makeGlow = () =>{
        ICON.style.cssText = "animation: glow 0.3s ease forwards;";
    }

    const removeGlow = () =>{
        ICON.style.cssText = "animation: none;";
    }

    return {setName, getName, makeGlow, removeGlow, addFlag, getFlags, resetFlags, isCPU}
}


(function(){
    let nameInput1 = document.querySelector("#p1-name");
    let nameInput2 = document.querySelector("#p2-name");

    nameInput1.addEventListener("change", e => {
        player1.setName(e.target.value)
    })

    nameInput2.addEventListener("change", e => {
        player2.setName(e.target.value)
    })
})()


//Start button
let player1 = factoryPlayer("Player 1", "p1-side", "player");
let player2 = undefined;

(function(){
    let play = document.querySelector("#play");
    let playerBtn = play.querySelector("#choose-player");
    let cpuBtn = play.querySelector("#choose-cpu");

    playerBtn.addEventListener("click", () => {
        player2 = factoryPlayer("Player 2", "p2-side", "player");

        play.style.cssText = "animation:fade-out 0.4s ease;";
        play.addEventListener("animationend", () => {
            play.remove();
            GAME_BOARD.startGame();
        });
    })

    cpuBtn.addEventListener("click", () => {
        player2 = factoryPlayer("Player 2", "p2-side", "cpu");

        play.style.cssText = "animation:fade-out 0.4s ease;";
        play.addEventListener("animationend", () => {
            play.remove();
            GAME_BOARD.startGame();
        });
    })
})();
