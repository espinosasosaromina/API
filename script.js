const dogImage = document.getElementById('dogImage');
const fetchDogButton = document.getElementById('fetchDog');

function fetchDogImage() {
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            dogImage.src = data[0].url; 
        })
        .catch(error => console.error('Error:', error));
}


fetchDogImage();

fetchDogButton.addEventListener('click', fetchDogImage);
