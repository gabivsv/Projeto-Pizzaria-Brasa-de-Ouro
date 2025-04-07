const express = require('express');
const cors = require('cors'); // Importando o pacote cors
const path = require('path');

const app = express();
const PORT = 3000;

// Habilitando o CORS
app.use(cors());

// Middleware para JSON
app.use(express.json());

// Respostas do chatbot
const pizzaInfo = {
    "1": "Nosso cardápio inclui: Margherita, Calabresa, Frango com Catupiry, Quatro Queijos e muito mais! Gostaria de saber mais sobre alguma pizza específica?",
    "2": "A pizzaria foi fundada em 2005. Quer saber mais sobre nossa história?",
    "3": "A pizzaria foi criada por Thalisson e Gabriela!",
    "4": "Nossos tamanhos de pizza são: Pequena (25cm), Média (30cm) e Grande (35cm). Preços variam entre R$25 e R$50. Quer saber sobre os preços detalhados?",
    "5": "Atualmente temos uma promoção: Compre 1 pizza grande e leve 1 pequena grátis! Aproveite! Quer saber mais sobre as promoções?",
    "6": "O tempo de entrega é de 30 a 45 minutos. A taxa de entrega é R$5,00. Posso te ajudar com mais detalhes sobre a entrega?",
    "7": "Aceitamos pagamentos em dinheiro, cartão de crédito, débito e PIX. Precisa de mais informações sobre pagamentos?",
    "8": "A pizza mais vendida é a de Calabresa com queijo extra! Quer saber mais sobre essa pizza?",
    "9": "Temos pizzas com borda recheada de queijo e de chocolate! Quer mais detalhes sobre nossas bordas recheadas?",
    "10": "Nossa pizzaria fica na Rua da Pizza, 123, Centro. Estamos esperando você! Precisa de mais informações sobre nossa localização?"
};

// Endpoint do chatbot
app.post('/chatbot', (req, res) => {
    const userMessage = req.body.message;
    const botResponse = pizzaInfo[userMessage] || "Desculpe, não entendi. Por favor, escolha uma das opções disponíveis.";
    res.json({ response: botResponse });
});

// Servir arquivos estáticos (index.html, style.css, script.js, etc)
app.use(express.static(path.join(__dirname, '../frontend')));

// Rota principal
res.sendFile(path.join(__dirname, '../frontend/index.html'));


// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
