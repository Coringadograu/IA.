const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Temas socias.",
        alternativas: [
            {
                texto: "Isso é interessante!",
                afirmacao: "Não tenho interesse. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber mais sobre."
            }
        ]
    },
    {
        enunciado: "Como o racismo afeta as oportunidades de emprego e avanço na carreira para diferentes grupos étnicos?",
        alternativas: [
            {
                texto: "Afeta de várias formas.",
                afirmacao: "Cria uma pobreza intelectual do negro, minando suas potencialidades de inserção no mundo do trabalho e valorização enquanto potencial. E principalmente aumenta o abismo criado por desigualdades sociais, políticas e econômicas."
            },
            {
                texto: "Não afeta em nada.",
                afirmacao: "É apenas coisa da sua cabeça."
            }
        ]
    },
    {
        enunciado: "O que é racismo?",
        alternativas: [
            {
                texto: "É o preconcieto com determidado grupo social/étnico.",
                afirmacao: "Racismo consiste no preconceito e na discriminação com base em percepções sociais baseadas em diferenças biológicas entre pessoas e povos."
            },
            {
                texto: "Preconceito com negro.",
                afirmacao: "Racismo não existe."
            }
        ]
    },
    {
        enunciado: "Racismo é crime?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "A Lei 14.532/2023, publicada em janeiro deste ano, equipara a injúria racial ao crime de racismo. Com isso, a pena tornou-se mais severa com reclusão de dois a cinco anos, além de multa, não cabe mais fiança e o crime é imprescritível."
            },
            {
                texto: "Não.",
                afirmacao: "Se o preconceito não existe logo o não tem crime."
            }
        ]
    },
    {
        enunciado: "Quais estratégias são eficazes  para combater ativamente o racismo em comunidades e organizações? ",
        alternativas: [
            {
                texto: "O combate ao racismo inclui lidar com questões linguísticas, para evitar a minimização dessas formas de violência e crimes com consequências devastadoras empregando o discurso. Mas, além disso, é preciso mudanças estruturais, com políticas públicas.",
                afirmacao: "Infelizmente é muito difícil."
            },
            {
                texto: "Apenas prende-los.",
                afirmacao: "Levar os criminosos na bicicleta. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
