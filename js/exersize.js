const userInput = document.querySelector('.userInput');
const submitExersize = document.querySelector('.answer > button');

function checkAnswer(answer){
    const correctResult = `db.insert({name:"Aleksandr", surname:"Fridrikh"});`;
    let output = ""
    let outputStatus = 0;
    if(answer === correctResult){
        outputStatus = 1;
        output = `Успешное завершение программы, пользователь {name:
            "Aleksandr", surname:"Fridrikh"} был добавлен в базу данных.`
    }else{
        output = "Что-то пошло не так";
    }
    return [outputStatus, output];
}
function printWithEffect(output){
    
}
submitExersize.addEventListener('click', (e)=>{
    e.preventDefault();
    let answerValue = userInput.value;
    let [status, output] = checkAnswer(answerValue);
    if(status){

    }
})
