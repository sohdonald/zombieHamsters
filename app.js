/* my notes here

practice .target and Object types here

db.json has Zombie hamsters and heroes to fight them


can we use e.target to decrease the zombieHp every
time a hero attacks a zombie?

how can we use Object. to make the heroes and zombies appear in the browser?

make a function that will increase the heroExp
when the heroExp reaches a certain number, it increases the hero's level to ++1

make a button that allows the heroes to attack a zombie
when clicked, a text message asks "which zombie"
and the zombie hamsters become clickable
the zombie clicked loses certain amount of hp

e.target

some of the heroes have spells that can attack multiple zombies

this should be a good opportunity to practice fetch

all the Object. are static methods,
What is a static method?


Object.fromEntries only useful for form elements

*/

// code here

const zombieSpace = document.querySelector("#hamster-zombieSpace");
const zombieCard = document.createElement("div");
zombieCard.setAttribute("class", "card");

/* zombieSpace selects html element with id= hamster-zombieSpace
    zombieCard creates the div element
*/ 
function createZombieCard(zombie) {
    // create html img element, needs the key zombieImage
    // input action output
    const zombieImage = document.createElement("img");
    // create img html element out of zombieImage
    const zombieImageSite = zombie.zombieImage
    zombieImage.setAttribute("src", zombieImageSite)
    zombieImage.setAttribute("class", "funnyImage")
    const zombieDiv = document.querySelector("#hamster-zombieSpace")
    zombieDiv.append(zombieImage)
    //return zombieImage;
} // createZombieCard end

function renderZombies() {
    fetch("http://localhost:3000/zombieHamsters")
    .then((res) => res.json())
    .then( (zombieHamsters) => {
        console.log(zombieHamsters);
        zombieHamsters.forEach(element => {
            createZombieCard(element) 
        });
    })
} // renderZombies end

renderZombies();

/* try making 4 zombie hamsters appear on the website 
    need to make sure we are only selecting the zombies*/