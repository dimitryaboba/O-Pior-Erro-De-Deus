const charadas = [
    { pergunta: "Qual é o maior Erro de Deus?", resposta: "existencia" },
    { pergunta: "Qual é a salvação pra todos?", resposta: "inexistência" },
  
];

let currentCharada = 0;
let gameOver = false;

function updateOutput(message) {
    const output = document.getElementById("output");
    output.innerHTML += message + "\n";
    output.scrollTop = output.scrollHeight;
}

function checkInput(event) {
    if (event.key === 'Enter' && !gameOver) {
        const input = document.getElementById("input");
        const answer = input.value.trim().toLowerCase();


        

        if (answer === 'ahab') {
            document.body.classList.add('red-theme');
            window.location.href = "https://dimitryaboba.github.io/Ahab/";
      
        } else if (answer === 'andreas') {
            window.location.href = "https://www.youtube.com/watch?v=YhT2SafcmP8";
        } else if (answer === charadas[currentCharada].resposta) {
            currentCharada++;
            if (currentCharada < charadas.length) {
                updateOutput(`Você resolveu o enigma.\nVocê chegou até aqui, desvendando o que muitos não conseguiriam. Mas me digam... estão realmente preparados para o próximo enigma? [Y/N]`);
            } else {
                updateOutput("Se vc chegou ate aq parabens oq queres saber?");
                
            }
        } else if (answer === 'y') {
            updateOutput(charadas[currentCharada].pergunta);
        } else if (answer === 'n') {
            updateOutput("O jogo foi interrompido.");
            gameOver = true;
        } else {
            updateOutput("Resposta incorreta, tente novamente.");
        }

        if (answer === 'cleiton neves') {
            document.getElementById("cleiton").style.display = "block"; 
        }

        if (answer === 'deus') {
            window.location.href = "https://i.pinimg.com/736x/20/6c/47/206c4795a2021a4315e89a3bdcd8208f.jpg";
        }
  if (answer === 'lay carino') {
            updateOutput("🐹🐹🐹")
    }

function checkInput(event) {
    if (event.key === 'Enter' && !gameOver) {
        const input = document.getElementById("input");
        const answer = input.value.trim().toLowerCase();

        // ... outros blocos ...

        // Novo bloco para 'divindade'
       

        // ... resto do código ...
    }
}
  

        input.value = '';
    }
}

function startGame() {
    updateOutput("Neste lugar, todas as verdades serão reveladas.");
    updateOutput(charadas[currentCharada].pergunta);
}

window.onload = startGame;





