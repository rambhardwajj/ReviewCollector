const nameDisplay = document.getElementById('username')
const textArea = document.getElementById('area')
const submitBtn = document.getElementById('submitBtn')


const recentReview = document.getElementById('review-display');

const stars = document.querySelectorAll(".star");
let selectedRating = 0;

console.log(nameDisplay, textArea, submitBtn, recentReview, stars)

submitBtn.addEventListener('click', ()=>{
    let userName = '~ ' +  nameDisplay.value; 
    if( userName == '~ ') {
        userName = userName + "Anonymous";
    }
    if( selectedRating == 0 ){
        window.alert("Rating toh do sir");
        return ;
    }
    const userReview = textArea.value;
    if(userReview.length ==0){
        window.alert('Review toh daalo bhaisab')
        return;
    }

    const recReviewCard = document.createElement('div');
    const subStars = document.createElement('div');
    const para = document.createElement('div');
    const nameSpan = document.createElement('span');
    const starDiv = document.createElement('div');
        
    for(let i =1; i<=5; i++){
        let star = document.createElement('i');
        star.classList.add('fa-regular');
        star.classList.add('fa-star');
        star.classList.add('star')
        if( i<=selectedRating){
            star.classList.add('js-filled')
        }
        starDiv.appendChild(star);
    }
    
    para.innerText = userReview;
    nameSpan.innerText = userName;

    recReviewCard.appendChild(subStars);
    recReviewCard.appendChild(starDiv)
    recReviewCard.appendChild(nameSpan)
    recReviewCard.appendChild(para); 
    console.log(recReviewCard)


    recReviewCard.classList.add('js-rec-review')
    para.classList.add('js-para')
    nameSpan.classList.add('js-name')

    recentReview.appendChild(recReviewCard)
    
})
stars.forEach( st => {
    st.addEventListener("mouseover", function(){
        let rating = this.getAttribute("data-star");
        // console.log(selectedRating);
        // console.log(rating)
        fillStars(rating);
    })
    st.addEventListener('click', function(){
        selectedRating = this.getAttribute('data-star');
        // console.log(selectedRating)
        fillStars(selectedRating);
        displayEmoji(selectedRating);
    })
    st.addEventListener('mouseout', function(){
        fillStars(selectedRating)
    })
})

function fillStars(rating){
    stars.forEach(st =>{
        st.classList.remove("js-filled");
    })
    for(let i =0 ;i< rating; i++){
        stars[i].classList.add("js-filled");
    }
}

const emojiSec = document.getElementById('emojiSection');
let currGif = document.createElement('img');
console.log(emojiSec)
function displayEmoji(rating){
    
    if( rating == 1){
        currGif.src = 'assets/giphy.gif'
    }else if( rating ==2){
        currGif.src= 'assets/giphy6.gif'
    }else if( rating ==3){
        currGif.src= 'assets/giphy4.gif'
    }else if(rating ==4){
        currGif.src='assets/giphy9.gif'
    }else{
        currGif.src='assets/giphy1.gif'
    }
    currGif.width = 150;
    console.log(emojiSec)
    emojiSec.appendChild(currGif)
}
