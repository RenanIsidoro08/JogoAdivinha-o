document.addEventListener('DOMContentLoaded', () => {
    const menuSection = document.getElementById('Menu'); 
    const gameSection = document.getElementById('paginaJogo'); 
    const resultSection = document.getElementById('resultadoPagina'); 
    const nameForm = document.getElementById('Informacoes'); 
    const welcomeMessage = document.getElementById('bemvindoID');
    const maxNumberSpan = document.getElementById('numeroMaximo');
    const guessInput = document.getElementById('NumAle'); 
    const submitGuessButton = document.getElementById('enviarPalpite');
    const resultMessage = document.getElementById('resultadoMensagemID'); 
    const finalScore = document.getElementById('pontosID'); 
    const playAgainButtonJogo = document.getElementById('JogarNovaJogoID');
    const playAgainButtonResultado = document.getElementById('JogarNovaResultadoID');
    const feedback = document.getElementById('feedback'); 

    let maxNumber = 10;
    let randomNumber;
    let attempts = 0; 

    maxNumberSpan.textContent = maxNumber;

    gameSection.style.display = 'none';
    resultSection.style.display = 'none';

    let playerName = '';

    const playButton = document.getElementById('jogarBotao');
    playButton.addEventListener('click', () => {
        playerName = document.getElementById('nomeID').value;
        if (playerName) {
            welcomeMessage.textContent = `Bem-vindo, ${playerName}!`; 
            menuSection.style.display = 'none';
            gameSection.style.display = 'block';
            startGame();
        }
    });

    submitGuessButton.addEventListener('click', () => {
        const guess = parseInt(guessInput.value, 10);
        if (isNaN(guess) || guess < 1 || guess > maxNumber) {
            feedback.textContent = 'Por favor, insira um número válido entre 1 e 10!';
            return;
        }
        attempts++;
       
        if (guess === randomNumber) {
            showResult(true);
        } else {
            feedback.textContent = 'Tente novamente!';
        }
    });

    playAgainButtonJogo.addEventListener('click', resetGame);
    playAgainButtonResultado.addEventListener('click', resetGame);

    function startGame() {
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        attempts = 0;
        feedback.textContent = '';
        guessInput.value = '';
    }
    
    function showResult(success) {
        gameSection.style.display = 'none';
        resultSection.style.display = 'block';
        if (success) {
            resultMessage.textContent = `Parabéns, ${playerName}! Você acertou em ${attempts} tentativas!`;
            finalScore.textContent = `Você adivinhou o número ${randomNumber}.`;
            playAgainButtonResultado.addEventListener('click', resetGame);
        }
    }

    function resetGame() {
        menuSection.style.display = 'block';
        gameSection.style.display = 'none';
        resultSection.style.display = 'none';
        nameForm.reset();
    }
});
