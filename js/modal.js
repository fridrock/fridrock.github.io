const universityReview = document.querySelector(".universityReview");
const html = document.querySelector('html');

const watchReview = document.querySelector('.watchReview');
const iframe = universityReview.querySelector('iframe');
watchReview.addEventListener('click',()=>{
    universityReview.classList.remove('closed');
    html.classList.add('scrollDisabled')
});
universityReview.addEventListener('click',(e)=>{
    if(e.target!=iframe){
        html.classList.remove('scrollDisabled');
        universityReview.classList.add('closed');
    }
})

