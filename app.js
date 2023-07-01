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

function createZombieCard(zombie) {
    // create html img element, needs the key zombieImage
    // input action output
    const zombieImage = document.createElement("img");
    // create img html element out of zombieImage
    const zombieImageSite = zombie.zombieImage
    zombieImage.setAttribute("src", zombieImageSite)
    zombieImage.setAttribute("class", "funnyImage")
    zombieDiv.append(zombieImage)
} // createZombieCard end

let selectAZombie = "";


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

//querySelectors are here
const zombieDiv = document.querySelector("#hamster-zombieSpace")
const divHero = document.querySelector("#heroSpace")
const attackDiv = document.querySelector("#attack-button")
/* try making 4 zombie hamsters appear on the website 
    need to make sure we are only selecting the zombies*/
    
    function createHeroCard(hero) {
        // create html img element, needs the key zombieImage
        // input action output
        const heroImage = document.createElement("img");
        // create img html element out of zombieImage
        const heroImageSite = hero.heroImg
        heroImage.setAttribute("src", heroImageSite)
        heroImage.setAttribute("class", "funnyImage")
        divHero.append(heroImage)
    } // createHeroCard end

    function renderHeroes() {
        fetch("http://localhost:3000/nakedMoleHeroes")
        .then((res) => res.json())
        .then( (moleHeroes) => {
            console.log(moleHeroes);
            moleHeroes.forEach(element => {
                createHeroCard(element) 
            }); // forEach end
        }) // 2nd .then end
    } // renderHeroes end

    renderHeroes();

    // make a button to allow a hero to attack a zombie
    const attackButton = document.createElement("img")
    attackButton.src = "./zombieHamsterImages/heroes/attackButtonv0.svg"
    attackButton.setAttribute("class", "attackButt")
    attackButton.addEventListener("click", (e) =>
    {
        console.log("attack")
    }) // addEventListener end
        attackDiv.append(attackButton)

    /*change the hero's name each time attack button is clicked
    by order of id
    */    
    const heroTurn = document.querySelector("#heroTurn")
    function getHeroName(hero) {
        heroTurn.addEventListener("change", () => {

        })
        const heroName = hero.heroName
        heroTurn.textContent = `It's ${heroName}'s turn to attack`
    }
    heroTurn.append(getHeroName)
   
    
    /* let's make the hero Bean attack a zombie 
        how do we select Bean from the JSON?
        every time Bean attacks, the zombie's hp reduces to a random amount
        when zombie hp === 0, the zombie is removed from the field
        text message says that the zombie is defeated
    */