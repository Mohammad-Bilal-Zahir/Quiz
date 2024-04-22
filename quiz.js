
const question = [{

'que': 'Which of the following is the capital of Afghanistan',
'a': 'Nangarhar',
'b': 'Kabul',
'c': 'Mazar',
'd': 'Khost',
'correct': 'b',
},
{
'que': "Which of the following is the capital of Pakistan",
'a': "Peshawar",
'b': "Lahore",
'c': "Islamabad",
'd': "Queta",
'correct': "c",
},
{
'que': "Which of the following is the capital of Iran",
'a': "Tehran",
'b': "Mashhad",
'c': "Asfahan",
'd': "Mazendaran",
'correct': "a",
}
]



let index = 0;
let total = question.length;
let right =0, wrong =0;
const quesBox = document.getElementById("questionBox")
const optionInput = document.querySelectorAll(".options")

const loadQuestion = () => {
    if(index === total)
    {
        return endQuiz();
    }
    reset();
    const data = question[index]
    //console.log(data);
    quesBox.innerText = `${index +1} ) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;

}
//loadQuestion();
//console.log(loadQuestion);
const submitQuiz = ()=>{
    const ans = getAnswer()
    const data = question[index];
    if(ans === data.correct)
    {
        right++;
    }
    else
    {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = ()=>{
    let answer;
    optionInput.forEach(
    (input) =>{
 if(input.checked){
    answer = input.value;
 }
 
    }
  )
  return answer;
}
const reset = () =>{

    optionInput.forEach(
        (input) =>{
            input.checked = false;
        }
    )
}

const endQuiz = ()=>{

    document.getElementById("box").innerHTML = `
    <h3>Thank you for playing the quiz</h3>
    <h2>there are ${right} answers  correct in ${total} questions and ${wrong} are incorrect</h2>
   
    `
}



loadQuestion();



