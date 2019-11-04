let slideIndex = 1;
showSlides(slideIndex);

document.querySelector('.prev').addEventListener('click', function(){
    showSlides(slideIndex -= 1);
});
document.querySelector('.next').addEventListener('click', function(){
    showSlides(slideIndex += 1);
});

let dot = document.querySelectorAll('.dot');
    dot.forEach(function(dots){
    dots.addEventListener('click', function(e){
        if(e.target == dot[0]){
            showSlides(slideIndex = 1);
        }else if(e.target == dot[1]){
            showSlides(slideIndex = 2);
        }else{
            showSlides(slideIndex = 3);
        }
    })
})

function showSlides(n) {
    let  slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

let slideIndexTeam = 1;

showTeamSlides(slideIndexTeam);

document.querySelector('.prev2').addEventListener('click', function(){
    showTeamSlides(slideIndexTeam -= 1);
});
document.querySelector('.next2').addEventListener('click', function(){
    showTeamSlides(slideIndexTeam += 1);
});

function showTeamSlides(n) {
    let  mySlidesTeam = document.querySelectorAll(".mySlidesTeam");
    let about = document.querySelectorAll('.about');
    let nextPhoto = document.querySelectorAll('.nextPhoto');
    let nextName = document.querySelectorAll('.nextName');
    if (n > about.length) {slideIndexTeam = 1}    
    if (n < 1) {slideIndexTeam = about.length}
    for (let i = 0; i < about.length; i++) {
        mySlidesTeam[i].style.display = 'none';
        about[i].style.display = "none";  
        nextPhoto[i].style.display = "none";
        nextName[i].style.display = 'none';

    }
    mySlidesTeam[slideIndexTeam-1].style.display = "block";  
    about[slideIndexTeam-1].style.display = "flex";
    nextPhoto[slideIndexTeam-1].style.display = 'block';
    nextName[slideIndexTeam-1].style.display = 'block';
}

let adressMap = document.querySelectorAll('.adressMap');
let linkMap = document.querySelectorAll('.linkMap');

    for(let i = 0; i<linkMap.length; i++){
    linkMap[i].addEventListener('mouseenter', function(e){
        adressMap.forEach(x => x.style.display = 'none');
        if(e.target == linkMap[i]){
            adressMap[i].style.display = 'block';
        }
    })
    }

let main = document.getElementById('main');

function upGoHome(){
    document.getElementById('goHome').addEventListener('click', function(){
        main.animate({scrollTop:this.attributes('href').offset().top}, 1000,'linear');
    })
}
function goServices(){
    document.getElementById('services').addEventListener('click', function(){
        main.animate({scrollTop:this.attributes('href').offset().top}, 1000,'linear');
    })
}
function goTeam(){
    document.getElementById('team').addEventListener('click', function(){
        main.animate({scrollTop:this.attributes('href').offset().top}, 1000,'linear');
    })
}
function goContactUs(){
    document.getElementById('contactUs').addEventListener('click', function(){
        main.animate({scrollTop:this.attributes('href').offset().top}, 1000, 'linear');
    })
}