const charadas = [
    { pergunta: "Eu sou um vigia, sempre atento ao que ocorre ao meu redor. Sem olhos, sem boca, mas posso ver e ouvir. Fico parado, mas a cada movimento do vento, faço barulho. O que sou eu?", resposta: "relógio" },
    
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

        if (answer === 'Deus') {
            document.body.classList.add('red-theme');
            window.location.href = "https://i.pinimg.com/736x/da/9d/25/da9d25de63302992357dc074c9a75c0a.jpg";
      
                updateOutput(`Você resolveu o enigma.\nVocê chegou até aqui, desvendando o que muitos não conseguiriam. Mas me digam... estão realmente preparados para o próximo enigma? [Y/N]`);
            } else {
                updateOutput("Você completou todos os enigmas!\nAgora, o segredo de Caim será revelado.");
                window.location.href = "https://youtu.be/EGLZem6jcew"; 
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

        if (answer === 'cesar') {
            window.location.href = "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/10/18/USAT/75739242007-12-ft-skelly-lifestyle.jpg?crop=4696,3521,x293,y0";
        }

        if (answer === 'vigia') {
            updateOutput("Há verdades que não podem ser enterradas, mesmo sob as cinzas mais profundas. O passado se revela de maneiras inesperadas, e meu papel neste jogo é tanto uma memória quanto uma sombra do que fui. Sim, eu caminhei entre vocês antes... como Abel.");
        }

        if (answer === 'caim') {
            updateOutput("Caim, o imperador do Domínio das Cinzas, é mais do que um nome, mais do que uma lenda. Ele é a personificação do poder implacável e da fúria consumida pelo fogo. Com suas próprias mãos, derramou o sangue de Abel, selando um destino marcado pela tragédia. Cada passo que ele dá ecoa como um lembrete do preço da ambição e do fardo de suas escolhas. Nos domínios onde as chamas nunca se apagam, sua presença é uma constante... e sua sombra, uma sentença.");
        }

        input.value = '';
    }
}

function startGame() {
    updateOutput("Neste lugar, todas as verdades serão reveladas.");
    updateOutput(charadas[currentCharada].pergunta);
}

window.onload = startGame;
