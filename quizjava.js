const op1 = document.querySelector(".option1");
const op2 = document.querySelector(".option2");
const op3 = document.querySelector(".option3");
const op4 = document.querySelector(".option4");
const percentage=document.querySelector(".percentage");
const totalQuestionSpan2=document.querySelector(".total-question2");
const correctAnswerSpan=document.querySelector(".correct-answers");
const question = document.querySelector(".question");
const questionNumberSpan = document.querySelector(".question-num-value");
const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answer-tracker");
const totalQuestionSpan = document.querySelector(".total-question");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[];
let score=0;
//questions and options/answers

const questions = [{
        q: 'How many Championships has The Rock held?',
        options: ['1', '15', '17', 'none of the above'],
        answer: 2
    },
    {
        q: 'How many Rock Bottoms do you think The Rock has given?',
        options: ['one', 'two', 'one thousand', 'it doesnt matter what you think!'],
        answer: 3
    },
    {
        q: 'What was is The Rocks real name?',
        options: ['Kevin Hart', 'Dwayne the rock Johnson', 'Clearance', 'Dwayne Johnson'],
        answer: 3
    },
    {
        q: 'What The Rocks theme song?',
        options: ['Electrifying', 'Can yah smell what the rock is cooking', 'you cant see me', 'My time is now'],
        answer: 0
    },
    {
        q: 'Can you smell what the rock is cookin?',
        options: ['Yes', 'No', 'Maybe', 'Dont care'],
        answer: 0
    }
]

//questions and number value
totalQuestionSpan.innerHTML=questions.length;
function load() {
    questionNumberSpan.innerHTML=index+1;
    question.innerHTML = questions[questionIndex].q;
    op1.innerHTML = questions[questionIndex].options[0];
    op2.innerHTML = questions[questionIndex].options[1];
    op3.innerHTML = questions[questionIndex].options[2];
    op4.innerHTML = questions[questionIndex].options[3];
    index++;
}

function check(element) {
  if(element.id==questions[questionIndex].answer){
    element.classList.add("correct");
    updateAnswerTracker("correct");
    score++;
    console.log("score:"+score)
  }
  else{
    element.classList.add("wrong");
    updateAnswerTracker("wrong");
  }
disabledOptions()
}

//answer tracker

//seeing right answer when you select the wrong answer
function disabledOptions(){
for(let i=0; i<options.length; i++){
  options[i].classList.add("disabled");
  //disabled all options options
  if(options[i].id==questions[questionIndex].answer){
    options[i].classList.add("correct");

  }
}
}

function enableOptions() {
  for(let i=0; i<options.length; i++){
    options[i].classList.remove("disabled", "correct", "wrong");
}
}

function validate(){
  if(!options[0].classList.contains("disabled")){
    alert("Please Select one option")
  }

  else{
    enableOptions();
    randomQuestion();
  }
}

function next(){
  validate();
}
function randomQuestion(){
  let randomNumber=Math.floor(Math.random()*questions.length);
  let hitDuplicate=0;
  if(index==questions.length){
    console.log("quiz-over")
  }
  else{
  if(myArray.length>0){
for(let i=0; i<myArray.length; i++){
  if(myArray[i]==randomNumber){
    hitDuplicate=1;
    break;
    //if myArray[] is equal to randomNumber then
    //hitDuplicate will equal to 1 then break
  }
}
if(hitDuplicate==1){
  randomQuestion();
}

else{
  questionIndex=randomNumber;
  load();
}
  }
  if(myArray.length==0){
      questionIndex=randomNumber;
      load();
      myArr.push(questionIndex);
  }

  myArray.push(questionIndex);
}
}
//answer tracker
function answerTracker() {
for (let i=0; i<questions.length; i++){
  const div=document.createElement("div")
  answerTrackerContainer.appendChild(div);
}
}

function updateAnswerTracker(classNam){
answerTrackerContainer.children[index-1].classList.add(classNam);

}
function quizOver() {
  document.querySelector("quiz-over").classList.add("show");
  correctAnswerSpan.innerHTML=score;
  totalQuestionSpan2.innerHTML=questions.length;
  percentage.innerHTML=(score/questions.length)*100 + "%";
}

function tryAgain() {
  window.location.reload();
}
window.onload = function() {
    randomQuestion();
}
