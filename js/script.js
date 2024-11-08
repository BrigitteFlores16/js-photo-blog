//https://jsonplaceholder.typicode.com/photos?_limit=6//

document.addEventListener('DOMContentLoaded', function() {
    const photoContainer = document.getElementById('photo-container');
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlay-img');
    const closeBtn = document.getElementById('close-btn');

    fetch('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(response => response.json())
        .then(data => {
            data.forEach(photo => {
                const photoCard = document.createElement('div');
                photoCard.classList.add('col-12', 'col-sm-6', 'col-md-4', 'text-center', 'photo-card');
                const img = document.createElement('img');
                img.src = photo.url;
                img.alt = photo.title;
                img.classList.add('photo');
                const text = document.createElement('p');
                text.textContent = photo.title;
                text.classList.add('text');
                photoCard.appendChild(img);
                photoCard.appendChild(text);
                photoContainer.appendChild(photoCard);

                photoCard.addEventListener('mouseover', function() {
                    this.style.zIndex = 10;
                });
                photoCard.addEventListener('mouseout', function() {
                    this.style.zIndex = '';
                });
                photoCard.addEventListener('click', function() {
                    this.style.zIndex = '';
                });
            });

            photoContainer.addEventListener('click', function(event) {
                if (event.target.classList.contains('photo')) {
                    overlayImg.src = event.target.src;
                    overlay.style.display = 'flex';
                }
            });

            closeBtn.addEventListener('click', function() {
                overlay.style.display = 'none';
            });
        });
});




 