const characters = fetch('http://hp-api.herokuapp.com/api/characters')
.then(characters => characters.json())

const btn = document.querySelector("[data-btn]");
const res = document.querySelector("[data-res]");

btn.addEventListener('click', function(){
    const randomNum = Math.floor(Math.random() * Math.floor(25));

    characters.then(character => {
        res.innerHTML = ''
        const image = document.createElement('img');
        const element = document.createElement('h2');
        const img = character[randomNum].image;
        const name = character[randomNum].name;
        const house = character[randomNum].house;
        const pic = document.createTextNode(`${img}`)
        const text = document.createTextNode(`"${name} belongs to ${house}"`)
        image.append(img)
        element.append(text)
        res.append(pic)
        res.append(element)
    })
    
});



