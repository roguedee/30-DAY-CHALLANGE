   //GET ELEMENTS FROM HTML
        const button = document.querySelector('#add-score');
        const displayTotalScore = document.querySelector('#score');
        const fieldGoalDisplay = document.querySelector('#field-goal-result')
        const calculateFieldGoal = document.querySelector('#calculate-field-goal');
        const calculatePointsPerGame = document.querySelector('#calculate-point-per-game');
        const displayPointPerGameResult = document.querySelector('#point-per-game-result');


        let totalPoints;
        let fieldGoalPercent;
        let pointsPerGame;

        
        //EVENT FUNCTIONS
        function calculate(){
          const firstScore =Number(document.querySelector('#game1').value);
          const secondScore =Number(document.querySelector('#game2').value);
          const thirdScore =Number(document.querySelector('#game3').value);
          if(!firstScore||!secondScore||!thirdScore){
            alert('input a value in scores');
          }

          totalPoints = firstScore + secondScore + thirdScore;
          displayTotalScore.textContent = totalPoints;
          console.log(displayTotalScore)
        }
       
        function formula(){
          const fieldGoalAttempted = Number(document.querySelector('#field-goal-attempt').value);
          const fieldGoalMade = Number(document.querySelector('#field-goal-made').value);
        
          fieldGoalPercent = Math.ceil(fieldGoalMade/fieldGoalAttempted * 100);
          fieldGoalDisplay.textContent = fieldGoalPercent;

        }

        function calculatePoints(){
          const gamePlayed = Number(document.querySelector('#games-played').value);
          pointsPerGame = totalPoints/gamePlayed;
          displayPointPerGameResult.textContent = pointsPerGame;
        }


        //EVENT LISTENERS
        button.addEventListener('click', calculate);
        calculateFieldGoal.addEventListener('click', formula)
        calculatePointsPerGame.addEventListener('click', calculatePoints)
        