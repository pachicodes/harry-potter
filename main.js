fetch('http://hp-api.herokuapp.com/api/characters')
.then(characters => characters.json());

let btn = document.querySelector("[data-btn]");

btn.addEventListener('onclick', function(){
    function randomNum(max){
        return Math.floor(Math.random() * Math.floor(max));      
    };
    console.log(randomNum);
});
