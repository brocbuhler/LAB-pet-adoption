let pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "dino 1.jpg"
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "dino 2.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "dino 3.avif"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "dog 1.avif"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "cat 1.avif"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "dino 4.avif"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "cat 2.jpeg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "dino 5.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "dog 2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "cat 3.jfif"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "dino 6.avif"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "cat 4.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "dog 3.avif"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "cat 5.avif"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "dino 7.jpg"
    }
  ];
function viewData(x) {
  for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
  }
}

// html variable connectors
let viewBtn = document.querySelector("#all-el");
let dogsBtn = document.querySelector("#dogs-el");
let catsBtn = document.querySelector("#cats-el");
let dinosBtn = document.querySelector("#dinos-el");
let renderHTMLLocation = document.querySelector("#animals");
let form = document.querySelector('form');
let deleteBtn = document.querySelector(".delete");
//

// Event listeners
viewBtn.addEventListener("click", renderPets);
dogsBtn.addEventListener("click", renderDogs);
catsBtn.addEventListener("click", renderCats);
dinosBtn.addEventListener("click", renderDinos);
form.addEventListener("submit", renderNewPets);
deleteBtn.addEventListener("click", deletePet);
// 

// Functions
function renderNewPets(e) {
  e.preventDefault()
  let newPet = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
    imageUrl: document.querySelector("#image").value
}
pets.push(newPet);
renderPets();
form.reset();
};

function renderPets() {
  let content = ''
 for (let i = 0; i < pets.length; i++) {
  content += `<img src="${pets[i].imageUrl}" class="card-img-top" alt="someones pet">
  <div class="card-body">
    <h5 class="card-title">${pets[i].name}</h5>
    <p class="card-text">color: ${pets[i].color}, 
    Special Skill: ${pets[i].specialSkill}</p>
    <a href="#" class="btn btn-primary">${pets[i].type}</a>
    <button class="delete">X</button>
  </div>`
 }
 renderHTMLLocation.innerHTML = content
};

function renderCats() {
  let content = ''
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === "cat") {
   content += `<img src="${pets[i].imageUrl}" class="card-img-top" alt="someones pet">
   <div class="card-body">
     <h5 class="card-title">${pets[i].name}</h5>
     <p class="card-text">color: ${pets[i].color}, 
     Special Skill: ${pets[i].specialSkill}</p>
     <a href="#" class="btn btn-primary">${pets[i].type}</a>
     <button class="delete">X</button>
   </div>`
  }
}
  renderHTMLLocation.innerHTML = content
};

function renderDogs() {
  let content = ''
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === "dog") {
   content += `<img src="${pets[i].imageUrl}" class="card-img-top" alt="someones pet">
   <div class="card-body">
     <h5 class="card-title">${pets[i].name}</h5>
     <p class="card-text">color: ${pets[i].color}, 
     Special Skill: ${pets[i].specialSkill}</p>
     <a href="#" class="btn btn-primary">${pets[i].type}</a>
     <button class="delete">X</button>
   </div>`
    }
  }
  renderHTMLLocation.innerHTML = content
};

function renderDinos() {
  let content = ''
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === "dino") {
   content += `<img src="${pets[i].imageUrl}" class="card-img-top" alt="someones pet">
   <div class="card-body">
     <h5 class="card-title">${pets[i].name}</h5>
     <p class="card-text">color: ${pets[i].color}, 
     Special Skill: ${pets[i].specialSkill}</p>
     <a href="#" class="btn btn-primary">${pets[i].type}</a>
     <button class="delete">X</button>
   </div>`
    }
  }
  renderHTMLLocation.innerHTML = content
};
//

//need a new function that will delete and then update the dom with the deleted info
function deletePet() {
  //funky splice stuff and review of js event listners 
  console.log("button works!!!");
};
