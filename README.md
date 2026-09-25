# 🍕 Brasa d'Ouro — Pizzaria

Aplicação web fictícia desenvolvida para representar a presença digital da **Pizzaria Brasa d'Ouro**.

O projeto foi criado como prática de desenvolvimento web, com o objetivo de aplicar conhecimentos de HTML, CSS, JavaScript e Node.js na criação de uma interface de pizzaria com cardápio, promoções, cadastro, login e chatbot de atendimento.

## 📸 Demonstração

![Capa da Pizzaria Brasa d'Ouro](docs/capa-pizzaria.png)

Acesse a aplicação publicada:

👉 [**Pizzaria Brasa d'Ouro**](https://projeto-pizzaria-rho.vercel.app/ )

## 🏠 Página inicial

A página inicial apresenta a identidade visual da pizzaria, o menu de navegação, banners promocionais, acesso ao chatbot e as principais opções da aplicação.

## 📌 Sobre o projeto

O **Brasa d'Ouro** é uma aplicação web desenvolvida para simular a presença digital de uma pizzaria.

O projeto combina uma interface visual com identidade própria, vídeos promocionais, navegação por categorias, formulários de cadastro e login e um chatbot de atendimento.

A aplicação está organizada em duas partes principais:

- `frontend/` — páginas, estilos, scripts e recursos visuais da interface;
- `backend/` — servidor Express e endpoint responsável pelas respostas do chatbot.

  ## 📍 Status do projeto

O projeto está **em construção e evolução contínua**.

A primeira versão foi desenvolvida com foco na interface do frontend e em um chatbot simples integrado a um backend em Node.js. A próxima etapa é ampliar e reorganizar o backend, além de estudar e aplicar **Python, automação, persistência de dados e novas integrações**.

## ✨ Funcionalidades

- Página inicial com identidade visual da pizzaria;
- Cardápio organizado por categorias;
- Seção de pizzas mais pedidas;
- Área de combos e promoções;
- Seção “Monte sua pizza”;
- Banners em vídeo;
- Formulário de cadastro de cliente;
- Modal de login e área “Minha conta”;
- Chatbot para atendimento;
- Carrossel de imagens com navegação e autoplay;
- Layout responsivo;
- Informações de contato;
- Horário de funcionamento;
- Links para redes sociais;
- Seção com avaliações de clientes.

## 🤖 Chatbot

O chatbot responde dúvidas sobre a pizzaria, como:

- Cardápio;
- História da pizzaria;
- Tamanhos de pizza;
- Promoções;
- Tempo de entrega;
- Formas de pagamento;
- Localização;
- Pizzas mais vendidas;
- Bordas recheadas.

A comunicação entre o frontend e o backend é feita por meio da rota:

```text
POST /chatbot
```

Exemplo de requisição:

```json
{
  "message": "1"
}
```

## 🛠️ Tecnologias utilizadas

### Frontend

- HTML5;
- CSS3;
- JavaScript;
- Swiper.js para o carrossel;
- Bootstrap Icons para os ícones;
- Google Fonts;
- Imagens e vídeos promocionais.

### Backend

- Node.js;
- Express;
- CORS;
- API HTTP para o chatbot;
- Servidor de arquivos estáticos.

## 📂 Estrutura do projeto

```text
Projeto-Pizzaria-Brasa-de-Ouro/
├── backend/
│   └── server.js
├── frontend/
│   ├── css/
│   ├── img/
│   ├── js/
│   ├── chatbot.html
│   └── index.html
├── docs/
│   ├── capa-pizzaria.png
│   └── pagina-inicial.webp
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Como executar localmente

### Pré-requisitos

- Node.js instalado;
- npm instalado;
- Navegador atualizado.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/gabivsv/Projeto-Pizzaria-Brasa-de-Ouro.git
```

Acesse a pasta do projeto:

```bash
cd Projeto-Pizzaria-Brasa-de-Ouro
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
node backend/server.js
```

Depois, acesse no navegador:

```text
http://localhost:3000
```

## 👩‍💻 Desenvolvimento

O projeto foi desenvolvido inicialmente em colaboração entre:

- [Gabriela Vieira](https://github.com/gabivsv ) — desenvolvimento do frontend, interface visual e continuidade do projeto;
- Thalisson Freitas da Silva — desenvolvimento inicial do chatbot e do backend.

Atualmente, o projeto está sendo mantido e desenvolvido por **Gabriela Vieira**, que está assumindo a evolução do backend e estudando novas possibilidades com Python e automação.

## 📄 Licença

Este projeto foi desenvolvido para fins de aprendizado, prática e demonstração de conhecimentos em desenvolvimento web.

A aplicação não representa uma empresa real e não deve ser utilizada para realizar pedidos ou pagamentos.

---

Desenvolvido com 🍕, HTML, CSS, JavaScript e Node.js.
