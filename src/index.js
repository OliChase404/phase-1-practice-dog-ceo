
const DOG_IMAGE_URL = `https://dog.ceo/api/breeds/image/random/4`
const BREED_DATA_URL = 'https://dog.ceo/api/breeds/list/all';
const dogBreedList = document.getElementById("dog-breeds")
const dogImageDiv = document.getElementById("dog-image-container")
const breedDropdown = document.getElementById('breed-dropdown')
let dogImageArr = []
let dogBreedObj = {}

// Initialise-----------------------
getDogsImages()
getDogBreeds()

//-----------------------------

  function getDogsImages(){
    fetch(DOG_IMAGE_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        dogImageArr = data
        for(item of dogImageArr.message){
        renderDogImage(item)
    }
})
}
  
function renderDogImage(dogImageURL){
  const newDogImage = document.createElement('img')
  newDogImage.src = (dogImageURL)
  dogImageDiv.appendChild(newDogImage)
}

function getDogBreeds(){
  fetch(BREED_DATA_URL)
  .then((resp) => resp.json())
  .then((data) => {
    dogBreedObj = data
    for(item in dogBreedObj.message){
      renderDogBreed(item)
    }
  })
}

function renderDogBreed(dogBreedData){
  const newDogBreed = document.createElement('li')
  newDogBreed.textContent = (dogBreedData)
  newDogBreed.style.cursor = ('pointer')
  newDogBreed.addEventListener('click', () => {
    if(newDogBreed.style.color !== 'red'){
      newDogBreed.style.color = ('red')
    } else {newDogBreed.style.color = ('white')}
  })
  dogBreedList.appendChild(newDogBreed)
}

breedDropdown.addEventListener('change', () => displayDogBreedsByLetter(breedDropdown.value))

function displayDogBreedsByLetter(letter){
  dogBreedList.textContent = ""
  for(item in dogBreedObj.message){
    if(item[0] === letter){
      renderDogBreed(item)
    }
  }
}













