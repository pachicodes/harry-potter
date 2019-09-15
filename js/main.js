const characters = fetch('http://hp-api.herokuapp.com/api/characters')
.then(characters => characters.json())

const btn = document.querySelector("[data-btn]");
const res = document.querySelector("[data-res]");

btn.addEventListener('click', function(){
    const randomNum = Math.floor(Math.random() * Math.floor(25));

    characters.then(character => {
        res.innerHTML = '';
        const img = character[randomNum].image;
        const name = character[randomNum].name;
        const house = character[randomNum].house;

        const picture = document.createElement('img');
        picture.setAttribute('src', img);
        
        const element = document.createElement('h2');               
        const text = document.createTextNode(`"${name} is a ${house}"`);
        
        res.append(picture);
        element.append(text);
        res.append(element);
    })
    
});



