// Criação de instâncias das funções do Node.js
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
const ejs = require("ejs");

// Configuração do servidor
const app = express();
const server = http.createServer(app);
const io = socketIo(server,{
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"]
    }
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

// Comunicação via WebSocket
io.on("connection", (socket) => {
  socket.on("definirNome", (name) =>{
    console.log(`Jogador conectado: ${name}`);
    socket.emit("msg", `Você foi conectado ao servidor com nome: ${name}`);
  })
  

  socket.on("iniciarJogo",() =>{
    if (jogadores.length < 2) {
        jogadores.push(socket.id);
        socket.emit("msg", `Você foi adicionado como Jogador ${jogadores.length}`);
      }
    
      // Iniciar o jogo quando dois jogadores estiverem conectados
      if (jogadores.length === 2 && !jogoAtivo) {
        jogoAtivo = true;
        iniciarJogo();
        io.emit("iniciar");
      }
    
    
      // Função para iniciar o jogo
      function iniciarJogo() {
        tabuleiros[jogadores[0]] = criarTabuleiro();
        tabuleiros[jogadores[1]] = criarTabuleiro();
    
        io.to(jogadores[0]).emit("iniciar", {
          tabuleiro: tabuleiros[jogadores[0]],
        });
        io.to(jogadores[1]).emit("iniciar", {
          tabuleiro: tabuleiros[jogadores[1]],
        });
      }
  })
  

  // Quando um jogador posiciona um navio
  socket.on("posicionar", (data) => {
    const { linha, coluna, tamanho, orientacao } = data;
    const jogadorId = socket.id;
    const tabuleiro = tabuleiros[jogadorId];

    const resultado = posicionarNavio(
      tabuleiro,
      linha,
      coluna,
      tamanho,
      orientacao
    );
    if (resultado.sucesso) {
      io.to(jogadorId).emit("posicionar", {
        sucesso: true,
        tabuleiro: tabuleiro,
      });
    } else {
      io.to(jogadorId).emit("erro", resultado.mensagem);
    }
  });

  // Registrar ataque
  socket.on("atacar", (data) => {
    const { linha, coluna } = data;
    const jogadorId = socket.id;
    const adversarioId =
      jogadorId === jogadores[0] ? jogadores[1] : jogadores[0];
    const tabuleiroAdversario = tabuleiros[adversarioId];

    const resultadoAtaque = registrarAtaque(tabuleiroAdversario, linha, coluna);
    io.to(jogadorId).emit("ataque", { resultado: resultadoAtaque });

    if (verificarFimDeJogo(tabuleiroAdversario)) {
      io.to(jogadorId).emit("fimDeJogo", { vencedor: jogadorId });
      io.to(adversarioId).emit("fimDeJogo", { vencedor: jogadorId });
      jogoAtivo = false;
    } else {
      turnoAtual = 1 - turnoAtual;
      io.to(jogadores[turnoAtual]).emit("turno", { jogador: turnoAtual + 1 });
    }
  });

  // Função para posicionar o navio
  function posicionarNavio(tabuleiro, linha, coluna, tamanho, orientacao) {
    const coordenadas = [];
    let valido = true;

    // Verifica se os índices estão dentro dos limites do tabuleiro
    if (linha < 0 || linha >= 10 || coluna < 0 || coluna >= 10) {
      return { sucesso: false, mensagem: "Posição inicial fora dos limites." };
    }

    console.log(
      `Tentando posicionar navio na linha ${linha}, coluna ${coluna}, orientação ${orientacao}, tamanho ${tamanho}`
    );

    if (orientacao === "horizontal") {
      if (coluna + tamanho > 10) {
        return { sucesso: false, mensagem: "Navio não cabe na horizontal." };
      }
      for (let i = 0; i < tamanho; i++) {
        console.log(`Verificando célula: Linha ${linha}, Coluna ${coluna + i}`);
        console.log(valido);
        // Verifica se a célula é válida
        if (
          coluna + i >= 10 ||
          !tabuleiro[linha] ||
          tabuleiro[linha][coluna + i] !== 0
        ) {
          valido = false;
          break;
        }
        coordenadas.push([linha, coluna + i]);
      }
    } else if (orientacao === "vertical") {
      if (linha + tamanho > 10) {
        return { sucesso: false, mensagem: "Navio não cabe na vertical." };
      }
      for (let i = 0; i < tamanho + 1; i++) {
        console.log(`Verificando célula: Linha ${linha + i}, Coluna ${coluna}`);
        console.log(valido);
        console.log(coordenadas);
        // Verifica se a célula é válida
        if (
          linha + i >= 10 ||
          !tabuleiro[linha + i] ||
          tabuleiro[linha + i][coluna] !== 0
        ) {
          valido = false;
          break;
        }
        coordenadas.push([linha + i, coluna]);
      }
    } else {
      return { sucesso: false, mensagem: "Orientação inválida." };
    }

    if (valido) {
      console.log("Entrei no valido");
      for (const [x, y] of coordenadas) {
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
      return "Água";
    } else if (tabuleiro[linha][coluna] === 1) {
      tabuleiro[linha][coluna] = 2;
      return "Acertou um navio!";
    } else {
      return "Já atacado!";
    }
  }
});

// Iniciar o servidor
server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});