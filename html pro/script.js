const quizData = {
  "Numerical Aptitude": [
    {
      question: "25% of 200=?",
      options: [
        "25",
        "50",
        "75",
        "100"
      ],
      answer: "50"
    },
    {question: "Cost Price = $400,Profit=10%. Selling Price?",
      options: [
        "420",
        "430",
        "440",
        "450"
      ],
      answer:"440"
    },
    {question: "60 is what% of 300?",
      options: [
        "10%",
        "15%",
        "20%",
        "25%"
      ],
      answer:"20%"
    },
    {question: "Simple interest:P=1000,R=10%'T=2yrs.SI=?",
      options: [
        "100",
        "150",
        "200",
        "250"
      ],
      answer:"200"
    },
    {question: "Average  of 2,4,6,8?",
      options: [
        "4",
        "5",
        "6",
        "7"
      ],
      answer:"5"
    }
  ],
  "Quantitative Aptitude": [
    {
      question: "x+7=20,x=?",
      options: [
        "11",
        "12",
        "13",
        "14"],
      answer: "13"
    },
    {question: "3x=27,x=?",
      options: [
        "6",
        "7",
        "8",
        "9"
      ],
      answer:"9"
    },
    {question: "Area of square (side=5cm)?",
      options: [
        "10",
        "20",
        "25",
        "30"
      ],
      answer:"25"
    },
    {question: "Perimeter of rectangle (L=6,B=4)?",
      options: [
        "10",
        "20",
        "24",
        "30"
      ],
      answer:"20"
    },
  {question: "12+3-2=?",
      options: [
        "13",
        "10",
        "11",
        "15%"
      ],
      answer:"13"
  }
  ],
  "Logical Reasoning": [
    {
      question: "If MON=3,TUE=4,then WED=?",
      options: ["2","3","4","5"],
      answer: "4"
      
    },
    {question: "All dogs are animals.All animals have life. conclusion:All dogs have life.",
      options: [
        "True",
        "False",
        "Can't Say",
        "None"
      ],
      answer:"True"
    },
    {question: "Find the odd one out.",
      options: [
        "Apple",
        "Banana",
        "Carrot",
        "Mango"
      ],
      answer:"Carrot"
    },
    {question: "Ravi is taller than siva.Siva is taller than arun.Who is tallest?",
      options: [
        "Arun",
        "Siva",
        "Ravi",
        "Can't Say"
      ],
      answer:"Ravi"
    },
    {question: "Book:Reading::Pen:?",
      options: [
        "Ink",
        "Paper",
        "Writing",
        "Drawing"
      ],
      answer:"Writing"
    },
  ],
  "Non-Verbal/Series": [
    {
      question: "2,4,6,8,?",
      options: ["9","10","11","12"],
      answer: "10"
    },
    {
      question:"5,10,20,40,?",
      options: ["50","60","70","80"],
      answer:"80"
    },
    {
      question:"A,C,E,G,?",
      options:["H","I","J","K"],
      answer:"I"
    },
    {
      question: "1,4,9,16,?",
      options: ["20","24","25","36"
      ],
      answer:"25"
    },
    {
      question: "100,90,80,?,60",
      options: ["65","75","70","85"
      ],
      answer: "70"
    }
  ],
  "Verbal Aptitude": [
    {
      question: "Synonym of Happy",
      options: ["Sad","Angry","Joyful","Cry"],
      answer: "Joyful"
    },
    {
      question: "Antonym of big",
      options:["Large","Huge","Small","Tall"],
      answer: "Small"
    },
    {
      question: "Choose Correct Spelling",
      options: ["Beautifull","Beautiful","Beautifal","Beutiful"],
      answer: "Beautiful"
    },
    {
      question: "Fill in the blank",
      options: ["is","are","am","be"],
      answer :"is"
    },
    {
      question: "Synonym of Fast",
      options: ["Slow","Late","Quick","Stop"],
      answer: "Quick"
    }
  ],
  "Indian Polity": [
    {
      question: "The Consititution of India came into force on:",
      options: ["15th August 1947","26th January 1950","26th November 1949","02nd october 1950"],
      answer: "26th January 1950"
    },
    {
      question: "Who is the head of the Indian State?",
      options: ["Prime minister","Cheif Justice","President","Governor"],
      answer: "President"
    },
    {
      question: "who is known as the father of the indian constitution?",
      options: ["Jawaharlal Nehru","Mahatma Gandhi","Dr.B.R.Ambedkar","Rajendra prasad"],
      answer: "Dr.B.R.Ambedkar"
    },
    {
      question: "The President of india is elected by:",
      options: ["Direct election by people","Members of Parliament only","Members of State Legislatures only","Elected members of Parliament and State Legislatures"],
      answer: "Elected members of Parliament and State Legislatures" 
    },

  ],
  "Bank": [
    {
      question: "RBI full form?",
      options: ["Reserve Bank of India", "Rural Bank", "Royal Bank"],
      answer: "Reserve Bank of India"
    }
  ],
  "TNPSC": [
    {
      question: "TNPSC conducts?",
      options: ["Govt Exams", "Private Exams", "Bank Exams"],
      answer: "Govt Exams"
    }
  ]
};

let index = 0;
let score = 0;
let wrongCount = 0;
let timer;
let timeLeft = 15;

const type = localStorage.getItem("quizType");
const data = quizData[type];

document.getElementById("quiz-title").innerText = type + " Quiz";

function loadQuestion() {

  wrongCount = 0;

  // START TIMER for every question
  startTimer();

  const q = data[index];

  document.getElementById("question-number").innerText =
    "Question " + (index + 1);

  document.getElementById("question-text").innerText = q.question;

  const errorBox = document.getElementById("error-message");
  errorBox.innerText = "";
  errorBox.style.color = "red"; // red color message

  const optionsDiv = document.getElementById("options-container");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {

    const btn = document.createElement("button");

    btn.innerText = opt;
    btn.classList.add("option-btn");

    btn.onclick = () => checkAnswer(btn, opt);

    optionsDiv.appendChild(btn);

  });

}

function checkAnswer(btn, selected) {

  const correct = data[index].answer;
  const errorBox = document.getElementById("error-message");

  if (selected === correct) {

    clearInterval(timer); // stop timer

    btn.classList.add("correct");

    errorBox.innerText = "";

    score++;

    setTimeout(() => {

      index++;

      if (index < data.length) {

        loadQuestion();

      } else {

        showResult();

      }

    }, 700);

  } else {

    wrongCount++;

    btn.classList.add("wrong");

    if (wrongCount === 1) {

      errorBox.innerText =
        "WRONG ANSWER!! ONE MORE CHANCE LEFT!!";

    } else {

      clearInterval(timer);

      alert("WRONG ATTEMPT AGAIN! QUIZ BLOCKED! CLICK OK TO RESTART!!");

      location.reload();

    }

  }

}

function showResult() {

  clearInterval(timer);

  document.querySelector(".quiz-container").innerHTML = `

    <h2>Assessment Finished</h2>

    <h3>Your Score: ${score}</h3>

    <h3>Total Questions: ${data.length}</h3>

    <button onclick="location.reload()">Restart Quiz</button>

  `;

}

function startTimer() {

  clearInterval(timer);

  timeLeft = 15;

  document.getElementById("timer").innerText = timeLeft;

  timer = setInterval(() => {

    timeLeft--;

    document.getElementById("timer").innerText = timeLeft;

    if (timeLeft <= 0) {

      clearInterval(timer);

      alert("TIME UP! CLICK OK TO RESTART QUIZ");

      location.reload();

    }

  }, 1000);

}

loadQuestion();