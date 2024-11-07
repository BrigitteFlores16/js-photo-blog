document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=6')
     .then(response => response.json())
     .then(data => {
 const photoContainer = document.getElementById('photo-container');
 data.forEach(photo => {
 const photoCard = document.createElement('div');
     photoCard.classList.add('col-12', 'col-md-4', 'text-center', 'photo-card');
 const img = document.createElement('img');
     img.src = photo.url;
     img.alt = photo.title;
     img.classList.add('photo');
 const city = document.createElement('p');
     city.textContent = photo.title;
     city.classList.add('city');
     photoCard.appendChild(img);
     photoCard.appendChild(city);
     photoContainer.appendChild(photoCard);
     });
   })
 });
 
 