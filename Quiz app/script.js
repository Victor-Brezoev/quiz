const quizData = [
    {
        question: "Which country has participated in every World Cup tournament?",
        a: "Germany",
        b: "Brazil",
        c: "Argentina",
        d: "France",
        correct: "b",
    },
    {
        question:"Which player has scored most Serie A goals?",
        a: "Silvio Piola",
        b: "Francesco Totti",
        c: "Gunnar Nordahl",
        d: "Giuseppe Meazza",
        correct: "a",
    },
    {
        question: "Which player has won Champions League 3 times with 3 different clubs?",
        a: "Cristiano Ronaldo",
        b: "Clarence Seedorf",
        c: "Lothar Matthäus",
        d: "Nicolas Anelka",
        correct: "b",
    },
    {
        question: "Which player has recieved most red cards in the 21st century?",
        a: "Sergio Ramos",
        b: "Edgar Davids",
        c: "Felipe Melo",
        d: "Pepe",
        correct:"a",
    },
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
