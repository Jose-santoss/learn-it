import {useState} from "react";
import './App.css';

const questions = [
  {
    questionText: 'O que é HTML?',
    answerOptions: [
      {answerText: "Linguagem de Programação", isCorrect: true},
      {answerText: "Linguagem orientada a Objetos", isCorrect: false},
      {answerText: "Editor de Texto ", isCorrect: false},
      {answerText: "Linguagem de marcação de HiperTexto", isCorrect: false},
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
      {answerText: "Apple", isCorrect: true},
      {answerText: "Intel", isCorrect: false},
      {answerText: "Amazon", isCorrect: false},
      {answerText: "Casas Bahia", isCorrect: false},
    ],
  },
  {
    questionText: 'Como aprender a programar?',
    answerOptions: [
      {answerText: "Praticando o que se aprende", isCorrect: true},
      {answerText: "Assistindo vídeos", isCorrect: false},
      {answerText: "Lendo", isCorrect: false},
      {answerText: "Dormindo", isCorrect: false},
    ],
  },
  {
    questionText: 'O que é o GitHub?',
    answerOptions: [
      {answerText: "Um game de programação", isCorrect: false},
      {answerText: "Um site de compras", isCorrect: false},
      {answerText: "Rede Social de programadores", isCorrect: true},
      {answerText: "Um alimento", isCorrect: false},
    ],
  },
  
  {
    questionText: 'O que é o GitHub?',
    answerOptions: [
      {answerText: "Um game de programação", isCorrect: false},
      {answerText: "Um site de compras", isCorrect: false},
      {answerText: "Rede Social de programadores", isCorrect: true},
      {answerText: "Um alimento", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é o GitHub?',
    answerOptions: [
      {answerText: "Um game de programação", isCorrect: false},
      {answerText: "Um site de compras", isCorrect: false},
      {answerText: "Rede Social de programadores", isCorrect: true},
      {answerText: "Um alimento", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é o GitHub?',
    answerOptions: [
      {answerText: "Um game de programação", isCorrect: false},
      {answerText: "Um site de compras", isCorrect: false},
      {answerText: "Rede Social de programadores", isCorrect: true},
      {answerText: "Um alimento", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é o GitHub?',
    answerOptions: [
      {answerText: "Um game de programação", isCorrect: false},
      {answerText: "Um site de compras", isCorrect: false},
      {answerText: "Rede Social de programadores", isCorrect: true},
      {answerText: "Um alimento", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é o GitHub?',
    answerOptions: [
      {answerText: "Um game de programação", isCorrect: false},
      {answerText: "Um site de compras", isCorrect: false},
      {answerText: "Rede Social de programadores", isCorrect: true},
      {answerText: "Um alimento", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é o GitHub?',
    answerOptions: [
      {answerText: "Um game de programação", isCorrect: false},
      {answerText: "Um site de compras", isCorrect: false},
      {answerText: "Rede Social de programadores", isCorrect: true},
      {answerText: "Um alimento", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é o GitHub?',
    answerOptions: [
      {answerText: "Um game de programação", isCorrect: false},
      {answerText: "Um site de compras", isCorrect: false},
      {answerText: "Rede Social de programadores", isCorrect: true},
      {answerText: "Um alimento", isCorrect: false},
    ],
  },

  {
    questionText: 'O que é o GitHub?',
    answerOptions: [
      {answerText: "Um game de programação", isCorrect: false},
      {answerText: "Um site de compras", isCorrect: false},
      {answerText: "Rede Social de programadores", isCorrect: true},
      {answerText: "Um alimento", isCorrect: false},
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
