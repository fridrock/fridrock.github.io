const userInput = document.querySelector('.userInput');
const outputContainer = document.querySelector('.output')
const submitExersize = document.querySelector('.answer > button');
const result = outputContainer.querySelector('.result');
function checkAnswer(answer){
    const correctResult = `db.insert({name:"Aleks",surname:"Fridrikh"});`;
    //const correctResult = 'j';
    let output = ""
    let outputStatus = 0;
    if(answer === correctResult){
        outputStatus = 1;
        output = `Успешное завершение программы, пользователь {name: "Aleks", surname:"Fridrikh"} был добавлен в базу данных.`
    }else{
        output = "Что-то пошло не так";
    }
    return [outputStatus, output];
}

function printWithEffect(output, currentIndex=0){
    if(currentIndex<output.length){
        let char = output[currentIndex];
        result.innerHTML += char;
        currentIndex++;
        setTimeout(()=>printWithEffect(output, currentIndex) ,20);
    }
    
}

submitExersize.addEventListener('click', (e)=>{
    e.preventDefault();
    result.innerHTML = "";
    outputContainer.classList.remove('incorrect');
    outputContainer.classList.remove('correct');
    //Приводит ввод с табуляцией пробелами и переносами строки к общему виду
    let answerValue = (userInput.value).split(" ").join("").split("\n").join("");
    let [status, output] = checkAnswer(answerValue);
    if(status){
        outputContainer.classList.add('correct');
        outputContainer.classList.remove('incorrect');
    }else{
        outputContainer.classList.remove('correct');
        outputContainer.classList.add('incorrect');
    }
    printWithEffect(output);
})
