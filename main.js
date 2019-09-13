const characters = fetch('http://hp-api.herokuapp.com/api/characters')
.then(characters => characters.json())

const btn = document.querySelector("[data-btn]");

btn.addEventListener('click', function(){
    const randomNum = Math.floor(Math.random() * Math.floor(25)); 
    characters.then(character => console.log(character[randomNum]))
});


