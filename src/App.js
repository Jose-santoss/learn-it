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
      {answerText: "Assistindo vídeos", isCorrect: false},
      {answerText: "Lendo", isCorrect: false},
      {answerText: "Dormindo por mais tempo", isCorrect: false},
    ],
  },
  {
    questionText: 'O que é o GitHub?',
    answerOptions: [
      {answerText: "Um game de programação", isCorrect: false},
      {answerText: "Um site de compras", isCorrect: false},
      {answerText: "Um frameWork de manipulação de códigos", isCorrect: true},
      {answerText: "Um Rede Social de programadores", isCorrect: false},
    ],
  },
  
  {
    questionText: 'O que são Arrays?',
    answerOptions: [
      {answerText: "Arrays são dados manipuláveis dentro de um banco de dados", isCorrect: false},
      {answerText: "Arrays não são utilizados dentro da programação", isCorrect: false},
      {answerText: "São sinônimos de tags HTML", isCorrect: true},
      {answerText: "Arrays são usados para armazenar vários valores em uma única variável.", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é Netlify?',
    answerOptions: [
      {answerText: "Site de filmes", isCorrect: false},
      {answerText: "Serviço de hospedagem Front-End de sites e aplicativos", isCorrect: false},
      {answerText: "Serviço de manipulação de dados", isCorrect: true},
      {answerText: "Site para armazenar dados Back-End ", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é um gerenciador de pacotes?',
    answerOptions: [
      {answerText: "Um game de programação", isCorrect: false},
      {answerText: "Um site de compras", isCorrect: false},
      {answerText: "Rede Social de programadores", isCorrect: true},
      {answerText: "Um alimento", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é NodeJS?',
    answerOptions: [
      {answerText: "Um game de programação", isCorrect: false},
      {answerText: "Um site de compras", isCorrect: false},
      {answerText: "Rede Social de programadores", isCorrect: true},
      {answerText: "Um alimento", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é JSX?',
    answerOptions: [
      {answerText: "Um game de programação", isCorrect: false},
      {answerText: "Um site de compras", isCorrect: false},
      {answerText: "Rede Social de programadores", isCorrect: true},
      {answerText: "Um alimento", isCorrect: false},
    ],
  },

  {
    questionText: 'Para que serve o hook useState?',
    answerOptions: [
      {answerText: "Um game de programação", isCorrect: false},
      {answerText: "Um site de compras", isCorrect: false},
      {answerText: "Rede Social de programadores", isCorrect: true},
      {answerText: "Um alimento", isCorrect: false},
    ],
  },

  {
    questionText: 'O que são variáveis?',
    answerOptions: [
      {answerText: "São nomes simbólicos para receber algum valor", isCorrect: false},
      {answerText: "São tags HTML", isCorrect: false},
      {answerText: "São funções JavaScript", isCorrect: true},
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
