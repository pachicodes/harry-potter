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

        //code to change background colors based on house
        if(house === "Gryffindor")
          document.getElementById( 'bg' ).style.backgroundColor = 'red';
        if(house === "Slytherin")
          document.getElementById( 'bg' ).style.backgroundColor = 'green';
        if(house === "Ravenclaw")
          document.getElementById( 'bg' ).style.backgroundColor = 'blue';
        if(house === "Hufflepuff")
          document.getElementById( 'bg' ).style.backgroundColor = 'yellow';

        const element = document.createElement('h2');
        const text = document.createTextNode(`"${name} Hogwarts house is a ${house}"`);

        res.append(picture);
        element.append(text);
        res.append(element);
    })

});
