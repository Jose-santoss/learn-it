import {useState} from "react";
import './App.css';

const questions = [
  {
    questionText: 'O que é HTML?',
    answerOptions: [
      {answerText: "Linguagem de Programação", isCorrect: false},
      {answerText: "Linguagem orientada a Objetos", isCorrect: false},
      {answerText: "Editor de Texto ", isCorrect: false},
      {answerText: "Linguagem de marcação de HiperTexto", isCorrect: true},
    ],
  },

  {
    questionText:
    'Para que serve o CSS?',
    answerOptions: [
      {answerText: "Estruturar os Elementos da Página", isCorrect: false},
      {answerText: "Inserir imagens e vídeos na Web", isCorrect: false},
      {answerText: "Definir valores estéticos para os elementos da página", isCorrect: true},
      {answerText: "Iniciar um projeto na máquina", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é JavaScript?',
    answerOptions: [
      {answerText: "Linguagem de marcação de HiperTexto", isCorrect: false},
      {answerText: "Linguagem de programação usada para manipular comportamentos de páginas web.", isCorrect: true},
      {answerText: "FrameWork utilizado para deixar o site mais bonito", isCorrect: false},
      {answerText: "Armazenar dados em um sistema de computador.", isCorrect: false},
    ],
  },

  {
    questionText: 'Como aprender a programar?',
    answerOptions: [
      {answerText: "Praticando o que se aprende", isCorrect: true},
      {answerText: "Assistindo vídeos no Youtube", isCorrect: false},
      {answerText: "Iniciando uma guerra nuclear", isCorrect: false},
      {answerText: "Dormindo por mais tempo", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é o GitHub?',
    answerOptions: [
      {answerText: "Um game de programação", isCorrect: false},
      {answerText: "Um site de compras", isCorrect: false},
      {answerText: "Um frameWork de manipulação de códigos", isCorrect: false},
      {answerText: "Um Rede Social de programadores", isCorrect: true},
    ],
  },
  
  {
    questionText: 'O que são Arrays?',
    answerOptions: [
      {answerText: "Arrays são dados armazenados em um PC", isCorrect: false},
      {answerText: "Arrays não são utilizados dentro da programação", isCorrect: false},
      {answerText: "São sinônimos de tags HTML", isCorrect: false},
      {answerText: "Arrays são usados para armazenar vários valores em uma única variável.", isCorrect: true},
    ],
  },

  {
    questionText: 'O que é Netlify?',
    answerOptions: [
      {answerText: "Serviço de hospedagem Front-End de sites e aplicativos", isCorrect: true},
      {answerText: "Site de filmes", isCorrect: false},
      {answerText: "Serviço de manipulação de dados", isCorrect: false},
      {answerText: "Serviço de hospedagem Back-End de sites e aplicativos", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é um gerenciador de pacotes?',
    answerOptions: [
      {answerText: "São ferramentas que auxiliam um desenvolvedor a fazer o download de frameworks e inserir no seu projeto web", isCorrect: true},
      {answerText: "São um conjunto de dados armazenados em um banco de dados", isCorrect: false},
      {answerText: "É uma maneira de identar os códigos de programação", isCorrect: false},
      {answerText: "Nenhuma das Alternativas", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é NodeJS?',
    answerOptions: [
      {answerText: "Uma linguagem de programação", isCorrect: false},
      {answerText: "Um framework JavaScript", isCorrect: true},
      {answerText: "É uma linguagem de marcação de HiperTexto", isCorrect: false},
      {answerText: "Nenhuma das alternativas", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é JSX?',
    answerOptions: [
      {answerText: "São “tradutores” com a função de conectar softwares e aplicativos", isCorrect: true},
      {answerText: "É uma extensão de sintaxe para JavaScript.", isCorrect: false},
      {answerText: "É um sistema operacional de um PC", isCorrect: false},
      {answerText: "É uma extensão de sintaxe para Java", isCorrect: false},
    ],
  },

  {
    questionText: 'Para que serve o hook useState?',
    answerOptions: [
      {answerText: "O useState() fará a aplicação rodar mais rapidamente na máquina.", isCorrect: false},
      {answerText: "Manter o estado da aplicação", isCorrect: false},
      {answerText: "O useState() cria uma variável que controlará o estado do componente.", isCorrect: true},
      {answerText: "Criar um função JavaScript", isCorrect: false},
    ],
  },

  {
    questionText: 'O que são variáveis?',
    answerOptions: [
      {answerText: "São nomes simbólicos que recebem algum valor", isCorrect: true},
      {answerText: "São tags HTML", isCorrect: false},
      {answerText: "São funções JavaScript", isCorrect: false},
      {answerText: "São métodos de programar", isCorrect: false},
    ],
  },

  {
    questionText: 'Quais são as variáveis em JavaScript?',
    answerOptions: [
      {answerText: "Ping, Dir e Var", isCorrect: false},
      {answerText: "Var, Let e Ping", isCorrect: false},
      {answerText: "Var, Let e Ping", isCorrect: false},
      {answerText: "Var, Let e Const", isCorrect: true},
    ],
  },

  {
    questionText: 'Como se comporta a variável Const?',
    answerOptions: [
      {answerText: "Pode mudar o seu valor durante a aplicação", isCorrect: false},
      {answerText: "Não pode mudar o seu valor durante a aplicação", isCorrect: false},
      {answerText: "Se comporta da mesma maneira que Var e Let", isCorrect: false},
      {answerText: "Nenhuma das alternativas", isCorrect: true},
    ],
  },

  {
    questionText: 'Como se comporta a variável Let?',
    answerOptions: [
      {answerText: "Recebe um valor que não pode ser alterado.", isCorrect: false},
      {answerText: "Recebe um valor que pode ser alterado apenas uma vez.", isCorrect: false},
      {answerText: "Não pode receber nenhum valor.", isCorrect: true},
      {answerText: "Recebe um valor que pode mudar na aplicação.", isCorrect: false},

    ],
  },

  {
    questionText: 'Como se comporta a variável Var?',
    answerOptions: [
      {answerText: "Da mesma maneira que a variável Const", isCorrect: false},
      {answerText: "Da mesma maneira que a variável Const", isCorrect: false},
      {answerText: "Da mesma maneira que a variável ", isCorrect: false},
      {answerText: "Da mesma maneira que a variável Let", isCorrect: true},
    ],
  },

  {
    questionText: '?',
    answerOptions: [
      {answerText: "Ping, Dir e Var", isCorrect: false},
      {answerText: "Var, Let e Ping", isCorrect: false},
      {answerText: "Var, Let e Ping", isCorrect: false},
      {answerText: "Var, Let e Const", isCorrect: true},
    ],
  },

  {
    questionText: '?',
    answerOptions: [
      {answerText: "Ping, Dir e Var", isCorrect: false},
      {answerText: "Var, Let e Ping", isCorrect: false},
      {answerText: "Var, Let e Ping", isCorrect: false},
      {answerText: "Var, Let e Const", isCorrect: true},
    ],
  },

];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(isCorrect) {
    if(isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">
      {showScore ? (
<div className="score-section">
  Você pontuou {score} de {questions.length}!
</div>
) : (
<>
<div className="question-section">
  <div className="question-count">
  <span>Questão {currentQuestion + 1}</span>/{questions.length}
  </div>
  <div className= "question-text">
    {questions[currentQuestion].questionText}
</div>  
</div>

<div className="answer-section">
  {questions[currentQuestion].answerOptions.map(
    (answerOption, index) => (
      <button onClick={() => handleAnswer(answerOption.isCorrect)}
      key={index}
      >
        {answerOption.answerText}</button>
    )
  )}
</div>
</>
  )}
  </div>
  );
}
export default App;
