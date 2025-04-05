const express = require('express');
const cors = require('cors'); // Importando o pacote cors
const app = express();
const port = 3000;

// Habilitando o CORS para aceitar requisições de qualquer origem
app.use(cors()); // Agora, todas as requisições externas serão permitidas

// Definindo o middleware para lidar com o corpo da requisição como JSON
app.use(express.json());

// Respostas para cada opção
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

// Endpoint para receber a mensagem e responder
app.post('/chatbot', (req, res) => {
    const userMessage = req.body.message;

    // Responde de acordo com a opção escolhida
    const botResponse = pizzaInfo[userMessage] || "Desculpe, não entendi. Por favor, escolha uma das opções disponíveis.";

    // Envia a resposta de volta ao frontend
    res.json({ response: botResponse });
});

// Rota para garantir que o backend está funcionando
app.get('/', (req, res) => {
    res.send('Servidor backend rodando em http://localhost:3000');
});

// Inicia o servidor na porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
