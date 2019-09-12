fetch('http://hp-api.herokuapp.com/api/characters')
.then(characters => characters.json());

let btn = document.querySelector("[data-btn]");

function randomNum(max){
    return Math.floor(Math.random() * Math.floor(max));       
};

btn.addEventListener('onclick', function(){
    console.log(randomNum);
});
