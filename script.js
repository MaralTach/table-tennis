const player1Btn = document.getElementById('player1');
const player2Btn = document.getElementById('player2');
const resetBtn = document.getElementById('reset');
const input = document.getElementById('winningtable');
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')

// let score = 5
let winScore = 5;
let gameOver = false;
input.focus()

input.addEventListener('change', function() {
    winScore = parseInt(this.value);
    resetGame();
});

player1Btn.addEventListener('click', (e) =>{
    // alert('player1')
    // const tahmin = input.value ;
    if(!gameOver){
   
     let score = Number(p1.textContent) + 1
       p1.textContent = score

       if (score >= winScore) {
        gameOver = true;
        p1.style.color = "green";
        p2.style.color = "red";
        player1Btn.disabled = true;   
        player2Btn.disabled = true; 
        
    }
    }
    
})



player2Btn.addEventListener('click', (e) =>{
    // alert('player2')
    if(!gameOver){
        
        let score = Number(p2.textContent) + 1
          p2.textContent = score
   
          if (score >= winScore) {
           gameOver = true;
           
           p2.style.color = "green";
           p1.style.color = "red";
           player1Btn.disabled = true;   
           player2Btn.disabled = true; 
           
            
       }
    }
})

resetBtn.addEventListener('click', function (){
   p1.textContent = '0'
   p2.textContent = '0'
   
   resetGame() 
})



function resetGame() {
    p1.textContent = '0';
    p2.textContent = '0';
    gameOver = false;
    p1.style.color = 'black';
    p2.style.color = 'black';
    player1Btn.disabled = false;
    player2Btn.disabled = false;
}

