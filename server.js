// Criação de instâncias das funções do Node.js
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
const ejs = require("ejs");

// Configuração do servidor
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

// Configuração de diretórios e views
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

// Rota principal
app.get("/", (req, res) => {
  res.render("index.html");
});

// Função para criar o tabuleiro
function criarTabuleiro() {
  console.log("Criando tabuleiro...");
  const tabuleiro = Array.from({ length: 10 }, () => Array(10).fill(0));
  console.log(tabuleiro); // Log para ver o tabuleiro gerado
  return tabuleiro;
}

// Função para verificar o fim de jogo
function verificarFimDeJogo(tabuleiro) {
  return !tabuleiro.some((linha) => linha.includes(1)); // Verifica se há navios restantes
}

// Variáveis do jogo
let jogadores = [];
let jogoAtivo = false;
let tabuleiros = {};
let turnoAtual = 0;
let nome1 = "";
let nome2 = "";



// Comunicação via WebSocket
io.on("connection", (socket) => {
  socket.on("definirNome", (name) => {
    if (nome1 === "") {
      nome1 = name;
      jogadores.push(nome1);
      socket.join(nome1);
    } else {
      nome2 = name;
      jogadores.push(nome2);
      socket.join(nome2);
    }
    console.log(`Jogador conectado: ${name}`);
    socket.emit("msg", `Você foi conectado ao servidor com nome: ${name}`);
  });

  socket.on("iniciarJogo", () => {
    if (jogadores.length < 2) {
      socket.emit(
        "msg",
        `Você foi adicionado como Jogador ${jogadores.length}`
      );
    }

    // Iniciar o jogo quando dois jogadores estiverem conectados
    if (jogadores.length === 2 && !jogoAtivo) {
      jogoAtivo = true;
      iniciarJogo();
      //io.emit("iniciar");
    }

    // Função para iniciar o jogo
    function iniciarJogo() {
      tabuleiros[0] = criarTabuleiro();
      tabuleiros[1] = criarTabuleiro();

      io.to(jogadores[0]).emit("iniciar", tabuleiros[0]);
      io.to(jogadores[1]).emit("iniciar",tabuleiros[1]);
    }
  });
  // Quando um jogador posiciona um navio
  socket.on("posicionar", (coord, n) => {
    const jogadorId = n;
    const tabuleiro = tabuleiros[jogadores.indexOf(jogadorId)];
    console.log(n);

    const resultado = posicionarNavio(tabuleiro, coord);
    //console.log(tabuleiro[jogadorId]);
    if (resultado.sucesso) {
      if (n === jogadores[0]) {
        socket.emit("coord", coord);
      } else if (n === jogadores[1]) {
        socket.emit("coord", coord);
      }
      socket.emit("posicionar", {
        sucesso: true,
        tabuleiro: tabuleiro,
      });
    } else {
      socket.emit("coord",coord);
      console.log("erro");
      socket.emit("erro", resultado.mensagem);
    }

    
    
  });
  socket.on("dale", () => {
    
  })

  // Registrar ataque
  socket.on("atacar", (data, no) => {
    socket.join(nome1);
    socket.join(nome2);
    const coluna = parseInt(data[1]);
    const linha = parseInt(data[0]);
    const jogadorId = no;
    const adversarioId =
      jogadorId === jogadores[0] ? jogadores[1] : jogadores[0];
    const tabuleiroAdversario = tabuleiros[jogadores.indexOf(adversarioId)];

    const resultadoAtaque = registrarAtaque(tabuleiroAdversario, linha, coluna);
    socket.emit("ataque",resultadoAtaque);
    if (no === nome1) {
      io.to(nome2).emit("atacado", linha, coluna);
    } else {
      io.to(nome1).emit("atacado", linha, coluna);
    }
    
    //socket.emit("atacado", resultadoAtaque,linha, coluna);
    if (verificarFimDeJogo(tabuleiroAdversario)) {
      io.to(nome1).emit("fimDeJogo", jogadorId);
      io.to(nome2).emit("fimDeJogo", jogadorId);
      jogoAtivo = false;
    } else {
      turnoAtual = 1 - turnoAtual;
      io.to(jogadores[turnoAtual]).emit("turno", { jogador: turnoAtual + 1 });
    }
  });
  socket.on("desisitir" ,(nom) => {
    socket.join(nome1);
    socket.join(nome2);
    io.to(nome1).emit("fimDeJogo", nom);
    io.to(nome2).emit("fimDeJogo", nom);
  })
  // Função para posicionar o navio
  function posicionarNavio(tabuleiro, coordenadas = []) {
    let validas = [];
    let valido = false;
    if (coordenadas.length <= 1 || coordenadas.length > 5) {
      return {
        sucesso: false,
        mensagem: "Nao existe barco com 1  quadrado"
      }
    }
    // Verifica se os índices estão dentro dos limites do tabuleiro
    for (let coordenada of coordenadas) {
      if (
        coordenada[0] < 0 ||
        coordenada[0] >= 10 ||
        coordenada[1] < 0 ||
        coordenada[1] >= 10
      ) {
        return {
          sucesso: false,
          mensagem: "Posição inicial fora dos limites.",
        };
      }

      if (tabuleiro[coordenada[0]] !== 1 || tabuleiro[coordenada[1]] !== 1) {
        validas.push(coordenada);
      }
    }

    if (validas.length === coordenadas.length) {
      valido = true;
    }

    if (valido) {
      console.log("Entrei no valido");
      for (const [x, y] of validas) {
        tabuleiro[x][y] = 1; // Marca a célula como ocupada pelo navio
      }
      console.log(tabuleiro);
      return { sucesso: true };
    } else {
      return {
        sucesso: false,
        mensagem: "Posição inválida ou navio sobreposto.",
      };
    }
  }

  // Função para registrar ataque
  function registrarAtaque(tabuleiro, linha, coluna) {
    if (tabuleiro[linha][coluna] === 0) {
      tabuleiro[linha][coluna] = -1;
      return -1;
    } else if (tabuleiro[linha][coluna] === 1) {
      tabuleiro[linha][coluna] = 2;
      return 2;
    } else {
      return "Já atacado!";
    }
  }
});

// Iniciar o servidor
server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});