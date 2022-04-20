const quizData=[
    {
        question:'Istanbulun Fetih Tarihi?',
        a:"1451",
        b:"1353",
        c:"1543",
        d:"1453",
        correct:'d',
    },{
        question:'What is the most used programming language in 2019?',
        a:"Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        correct:'d'
    },{
        question:"Who is he president of US?",
        a:"Florin Pop",
        b:"Donald Trump",
        c:"Ivan Saldano",
        d:"Mihai Andrei",
        correct:"b"
    },{
        question:"What does HTML stand For?",
        a:"Hypertext Markup Language",
        b:"Cascading Style Sheet",
        c:"Jason Object Notation",
        d:"Helicopters Terminals Motorboats Laborginis",
        correct:'a'
    },{
        question:"What year was JavaScript launched?",
        a:'1996',
        b:'1995',
        c:'1994',
        d:'none of the above',
        correct:'b'
    }
]

const answersEl=document.querySelectorAll(".answer");
const quiz=document.getElementById("quiz");
const questionEl = document.getElementById("question");
const nextquestionEl = document.getElementById("nextquestion");
const prevquestionEl = document.getElementById("prevquestion");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn=document.getElementById("submit");

let currentQuiz=0;
let score = 0;

loadQuiz();


nextquestionEl.addEventListener("click",() => {

    currentQuiz++;
    if(currentQuiz<quizData.length){
        loadQuiz();
    }
    else{
        currentQuiz--;
        alert("u cant go further. this is the last question.");
    }
    console.log(currentQuiz);
})

prevquestionEl.addEventListener("click",() => {

    if(currentQuiz>0){
        currentQuiz--;
        loadQuiz();
    }
    else{
        alert("u cant go back. this is the first question.");
    }

    console.log(currentQuiz);
    
})

function getSelected(){

    let answer=undefined;

    answersEl.forEach((answersEl) => {
       if(answersEl.checked){
           answer=answersEl.id;
       }
    });

    return answer;

}

function deselectAnswers(){

    answersEl.forEach((answersEl) => {
       answersEl.checked=false;
     });

}

function loadQuiz(){
    deselectAnswers();

    const currentQuizData=quizData[currentQuiz];
    questionEl.innerText=currentQuizData.question;
    
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
}

submitBtn.addEventListener("click",()=>{
   
    const answer = getSelected();

    console.log(answer);

    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = 
            `<h2> You answered correct ${score} / ${quizData.length} questions.</h2>
            <button onClick="location.reload()">Reload</button>
            `;
        }
    }
})