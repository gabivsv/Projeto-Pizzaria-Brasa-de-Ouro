document.addEventListener("DOMContentLoaded", function () {
    // Envia a mensagem de boas-vindas automaticamente quando a página carrega
    sendWelcomeMessage();

    // Lida com o envio de texto quando a tecla Enter é pressionada
    document.getElementById("user-input").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });
});

function sendWelcomeMessage() {
    let chatBox = document.getElementById("chat-box");

    // Exibe a mensagem inicial de boas-vindas no chat
    let welcomeMessage = `<p class="message bot-message"><b>Bot:</b> Olá, bem-vindo! Como posso ajudá-lo hoje? Escolha uma opção:</p>`;
    chatBox.innerHTML += welcomeMessage;

    // Adiciona as opções numeradas para o usuário escolher
    let options = `
    <p class="message bot-message" onclick="sendMessageOption('1')"><b>1️⃣</b> - Saber o cardápio</p>
    <p class="message bot-message" onclick="sendMessageOption('2')"><b>2️⃣</b> - Saber o ano de fundação</p>
    <p class="message bot-message" onclick="sendMessageOption('3')"><b>3️⃣</b> - Saber quem são os criadores</p>
    <p class="message bot-message" onclick="sendMessageOption('4')"><b>4️⃣</b> - Conhecer os tamanhos e preços das pizzas</p>
    <p class="message bot-message" onclick="sendMessageOption('5')"><b>5️⃣</b> - Ver promoções e descontos</p>
    <p class="message bot-message" onclick="sendMessageOption('6')"><b>6️⃣</b> - Saber o tempo e taxa de entrega</p>
    <p class="message bot-message" onclick="sendMessageOption('7')"><b>7️⃣</b> - Formas de pagamento aceitas</p>
    <p class="message bot-message" onclick="sendMessageOption('8')"><b>8️⃣</b> - Qual a pizza mais vendida?</p>
    <p class="message bot-message" onclick="sendMessageOption('9')"><b>9️⃣</b> - Pizzas com borda recheada</p>
    <p class="message bot-message" onclick="sendMessageOption('10')"><b>🔟</b> - Localização da pizzaria</p>
    <p class="message bot-message"><b>Digite um número para continuar! 😉</b></p>
    `;

    chatBox.innerHTML += options;

    // Adiciona o campo de input para que o usuário possa digitar algo manualmente
    if (!document.getElementById("user-input")) {  // Verifica se o campo de input já existe
        let inputField = `
        <div class="message user-input-container">
            <input type="text" id="user-input" placeholder="Digite sua mensagem aqui..." />
            <button onclick="handleUserInput()">Enviar</button>
        </div>
        `;
        chatBox.innerHTML += inputField;
    }
}

// Função para lidar com a seleção de opções do bot
function sendMessageOption(option) {
    let chatBox = document.getElementById("chat-box");

    // Exibe a opção escolhida pelo usuário
    let userMessage = `<p class="message user-message"><b>Você:</b> ${option}</p>`;
    chatBox.innerHTML += userMessage;

    // Envia a opção ao servidor para tratamento
    fetch("http://localhost:3000/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: option })
    })
    .then(response => response.json())
    .then(data => {
        let botMessage = `<p class="message bot-message"><b>Bot:</b> ${data.response}</p>`;
        chatBox.innerHTML += botMessage;

        // Atualiza a rolagem para o fundo do chat após uma nova mensagem
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => console.error("Erro na requisição:", error));
}

// Função para lidar com a entrada do usuário manualmente
function handleUserInput() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return; // Evita mensagens vazias

    // Exibe a mensagem do usuário no chat
    let chatBox = document.getElementById("chat-box");
    let userMessage = `<p class="message user-message"><b>Você:</b> ${userInput}</p>`;
    chatBox.innerHTML += userMessage;

    // Envia a mensagem ao servidor
    fetch("http://localhost:3000/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        let botMessage = `<p class="message bot-message"><b>Bot:</b> ${data.response}</p>`;
        chatBox.innerHTML += botMessage;

        // Atualiza a rolagem para o fundo do chat após uma nova mensagem
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => console.error("Erro na requisição:", error));

    // Limpa o campo de entrada
    document.getElementById("user-input").value = '';
}
