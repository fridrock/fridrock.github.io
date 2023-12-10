const videoReview = document.querySelector(".videoReview");
const html = document.querySelector('html');

const watchReview = document.querySelector('.watchReview');
const iframe = videoReview.querySelector('iframe');
watchReview.addEventListener('click',()=>{
    videoReview.classList.remove('closed');
    html.classList.add('scrollDisabled')
});
videoReview.addEventListener('click',(e)=>{
    if(e.target!=iframe){
        html.classList.remove('scrollDisabled');
        videoReview.classList.add('closed');
    }
})

