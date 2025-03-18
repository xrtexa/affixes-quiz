let questionprefixsuffix = [
    {
        title: "prefix",
        numb: 1,
        question: "__Correct",
        answers: "B. In-",
        hint:"(hint: wrong)",
        description:"",
        image:"img/learn.png",
        options : [
        "A. Un-",
        "B. In-",
        "C. Dis-",
        "D. Re-"]
    },
    {
        title: "prefix",
        numb: 2,
        question: "__Agree",
        answers: "B. Dis-",
        hint:"",
        description:"",
        image:"img/learn.png",
        options : [
            "A. Un-",
            "B. Dis-",
            "C. Re-",
            "D. In-"
        ]
    },
    {
        title: "prefix",
        numb: 3,
        question: "__Happy",
        answers: "A. Un-",
        hint:"(hint: not happy)",
        description:"",
        image:"img/learn.png",
        options : [
            "A. Un-",
            "B. Dis-",
            "C. Re-",
            "D. In-"
        ]
    },
    {
        title: "prefix",
        numb: 4,
        question: "Unlucky",
        answers: "B. Not lucky",
        hint:"",
        description:"Choose the correct meaning of the world based on its affix",
        image:"img/learn.png",
        options : [
            "A. Very lucky",
            "B. Not lucky",
            "C. Full of luck",
            "D. Always lucky"
        ]
    },
    {
        title: "prefix",
        numb: 5,
        question: "Rebuild",
        answers: "A. To build again",
        hint:"",
        description:"Choose the correct meaning of the world based on its affix",
        image:"img/learn.png",
        options : [
            "A. To build again",
            "B. To destroy",
            "C. To build halfway",
            "D. To break something"
        ]
    },
    {
        title: "suffix",
        numb: 6,
        question: "Help",
        answers: "B. -ful",
        hint:"(hint: remember the suffix rules!)",
        description:"",
        image:"img/learn2.png",
        options : [
            "A. -less",
            "B. -ful",
            "C. -ness",
            "D. -er"
        ]
    },
    {
        title: "suffix",
        numb: 7,
        question: "Kind",
        answers: "B. -ness",
        hint:"(hint: a person)",
        description:"",
        image:"img/learn2.png",
        options : [
            "A. -ful",
            "B. -ness",
            "C. -less",
            "D. -ment"
        ]
    },
    {
        title: "suffix",
        numb: 8,
        question: "Hope",
        answers: "D. -less",
        hint:"(hint: emotional trait)",
        description:"",
        image:"img/learn2.png",
        options : [
            "A. -ment",
            "B. -ness",
            "C. -ful",
            "D. -less"
        ]
    },
    {
        title: "suffix",
        numb: 9,
        question: "Careless",
        answers: "B. without care",
        hint:"",
        description:"Choose the correct meaning of the word based on its affix",
        image:"img/learn2.png",
        options : [
            "A. full of care",
            "B. without care",
            "C. to care again",
            "D. someone who cares"
        ]
    },
    {
        title: "suffix",
        numb: 10,
        question: "Kindness",
        answers: "C. the quality of being kind",
        hint:"",
        description:"Choose the correct meaning of the word based on its affix",
        image:"img/learn2.png",
        options : [
            "A. full of kindness",
            "B. to be kind again",
            "C. the quality of being kind",
            "D. someone who kind"
        ]
    },
]

let questionCount = 0;
let userScore = 0;

function nextbtnClicked(){
    console.log('aaa');
    showQuestions(questionCount);
    if (questionCount < questionprefixsuffix.length - 1){
        questionCount++;
        showQuestions(questionCount);
        
    }else{
        showResult();
    }
}
window.onload=function(){
    showQuestions(0);
    const nextBtn = document.getElementById('nextbtn');
    nextBtn.addEventListener("click", nextbtnClicked, true);
}

function showQuestions(index){
    const titleQ = document.querySelector('.title');
    titleQ.textContent = `${questionprefixsuffix[index].title}`;
    const numberText = document.querySelector('.number');
    const optList = document.getElementById('optionlist');
    const numberCounts = document.querySelector('.numbercounts');
    numberText.textContent = `${questionprefixsuffix[index].numb}`;
    numberCounts.textContent = `${questionprefixsuffix[index].numb}`;
    const questionText = document.querySelector('.q-text');
    questionText.textContent = `${questionprefixsuffix[index].question}`;
    const questionHint = document.querySelector('.q-hint');
    questionHint.textContent = `${questionprefixsuffix[index].hint}`;
    const questionDesc = document.querySelector('.q-desc');
    questionDesc.textContent = `${questionprefixsuffix[index].description}`;
    optList.innerHTML = `
    <div class="option option-a">
        <span>${questionprefixsuffix[index].options[0]}</span>
    </div>
    <div class="option option-b">
        <span>${questionprefixsuffix[index].options[1]}</span>
    </div>
    <div class="option option-c">
        <span>${questionprefixsuffix[index].options[2]}</span>
    </div>
    <div class="option option-d">
        <span>${questionprefixsuffix[index].options[3]}</span>
    </div>`;
    console.log(numberText.textContent);
    if(numberText.textContent == "1"){
        document.querySelector('.n1').classList.remove('white');
        document.querySelector('.n1').classList.add('green');
    }else if(numberText.textContent == "2"){
        document.querySelector('.n2').classList.remove('white');
        document.querySelector('.n2').classList.add('green');
    }else if(numberText.textContent == "3"){
        document.querySelector('.n3').classList.remove('white');
        document.querySelector('.n3').classList.add('green');
    }else if(numberText.textContent == "4"){
        document.querySelector('.n4').classList.remove('white');
        document.querySelector('.n4').classList.add('green');
    }else if(numberText.textContent == "5"){
        document.querySelector('.n5').classList.remove('white');
        document.querySelector('.n5').classList.add('green');
    }else if(numberText.textContent == "6"){
        document.querySelector('.n6').classList.remove('white');
        document.querySelector('.n6').classList.add('green');
    }else if(numberText.textContent == "7"){
        document.querySelector('.n7').classList.remove('white');
        document.querySelector('.n7').classList.add('green');
    }else if(numberText.textContent == "8"){
        document.querySelector('.n8').classList.remove('white');
        document.querySelector('.n8').classList.add('green');
    }else if(numberText.textContent == "9"){
        document.querySelector('.n9').classList.remove('white');
        document.querySelector('.n9').classList.add('green');
    }else if(numberText.textContent == "10"){
        document.querySelector('.n10').classList.remove('white');
        document.querySelector('.n10').classList.add('green');
    }

    var imageInner = document.querySelector('.img-icon');
    imageInner.src = `${questionprefixsuffix[index].image}`;

    const answeroption = document.querySelectorAll('.option');
    for (let i = 0; i < answeroption.length; i++){
        answeroption[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer){
    let clickanswer = answer.textContent;
    let useranswer = clickanswer.replace(/\s+/g, ' ').trim();
    let correctanswer = questionprefixsuffix[questionCount].answers;
    const optList = document.getElementById('optionlist');
    let allopt = optList.children.length;
    if (useranswer == correctanswer){
        console.log("answer is correct");
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    }else{
        console.log("answer is wrong");
        answer.classList.add('incorrect');
    }
    for(let i=0; i<allopt; i++){
        optList.children[i].classList.add('disabled');
    }
}

function headerScore(){
    const headerScoreText = document.querySelector('.score');
    headerScoreText.textContent = `Score: ${userScore} / ${questionprefixsuffix.length}`;
}

const resultScore = document.querySelector('.result');
const questionLayout = document.querySelector('.con-menu');
function showResult(){
    document.getElementById('questionall').classList.remove("active");
    document.getElementById('result').classList.add("active");
    const finalScore = document.querySelector('.final-score');
    finalScore.textContent = `${userScore}0`;
}