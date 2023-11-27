const regForm = document.querySelector('.registration');
const regButton = document.querySelector('.reg');
const authButton = document.querySelector('.auth');
regButton.addEventListener('click',()=>{
    regForm.classList.remove('swiped');
    regButton.classList.add("choosen");
    authButton.classList.remove('choosen');
});
authButton.addEventListener('click',()=>{
    regForm.classList.add('swiped');
    authButton.classList.add("choosen");
    regButton.classList.remove('choosen');
})