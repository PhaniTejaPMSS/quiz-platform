document.addEventListener("DOMContentLoaded", function () {
    
    
        const questions = [
        {
            question: "Which JavaScript framework is often used for building user interfaces and single-page applications?",
            answers: ["React", "Angular", "Vue.js", "Ember"],
            correctAnswer: "React"
        },
        {
            question: "Which CSS property allows for the creation of smooth and visually appealing animations in web design?",
            answers: ["transition", "animation", "transform", "opacity"],
            correctAnswer: "animation"
        },
        {
            question: "What does JSX stand for in the context of React?",
            answers: ["JS XML", "JS file", "XML file", "None"],
            correctAnswer: "JS XML"
        },
        {
            question: "Which operator is used for strict equality in JavaScript?",
            answers: ["==", "===", "=", "!=="],
            correctAnswer: "==="
        },
        {
            question: "Is the functionality of let and var same in JavaScript?",
            answers: ["Yes", "No", "Maybe"],
            correctAnswer: "No"
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionElement = document.getElementById("question");
    const quesText = document.getElementById("ques");
    const answersElement = document.getElementById("answers");
    const nextButton = document.getElementById("next-button");
    const resultElement = document.getElementById("result");

    const bgImgList = [
        "bgimg1.jpg", "bgimg3.jpg", "bgimg5.jpg", "bgimg1.jpg", "bgimg3.jpg", "bgimg5.jpg"
    ];
    let bgImgInd = 0;

    function changeBackground() {
        document.body.style.backgroundImage = `url("../assets/${bgImgList[bgImgInd % bgImgList.length]}")`;
        bgImgInd++;
    }


    function displayQuestion() {

        changeBackground();

        const question = questions[currentQuestion];
        questionElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
        quesText.textContent = `${question.question}`;

        answersElement.innerHTML = "";
        question.answers.forEach(answer => {
            const li = document.createElement("li");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `q${currentQuestion}`;
            radio.value = answer;
            li.appendChild(radio);
            li.appendChild(document.createTextNode(answer));
            answersElement.appendChild(li);
        });

        if (currentQuestion === questions.length - 1) {
            nextButton.textContent = "Submit";
        }
    }

    function checkAnswer() {
        const selectedAnswer = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
        if (!selectedAnswer) {
            return;
        }   

        if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
            
            score++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            displayQuestion();
            setTimeout(() => {
                
            }, 1000);
        } else {
            showResult();
        }
    }

    function showResult() {
        clearInterval(timerInterval);
        questionElement.style.display = "none";
        quesText.style.display = "none";
        answersElement.style.display = "none";
        nextButton.style.display = "none";
        resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
    }

    nextButton.addEventListener("click", checkAnswer);
    displayQuestion();

    let timerSeconds = 90;

    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.textContent = formatTime(timerSeconds);
    }

    const timerInterval = setInterval(function () {
        timerSeconds--;

        if (timerElement) {
            timerElement.textContent = formatTime(timerSeconds);
        }

        if (timerSeconds < 10) {
            timerElement.style.color = "red";
        }

        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            showResult();
        }
    }, 1000);


    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    }

    const restartButton = document.getElementById("restart-button");

    if (restartButton) {
        restartButton.addEventListener("click", function () {
            window.location.href = "quiz.html";
        });
    }

});