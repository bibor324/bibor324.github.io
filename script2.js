const images = [
    'kép5.jpg',
    'kép4.jpg', 
    'kép6.jpg',
    'kép7.jpg',
    'kép8.jpg',
    'kép9.jpg',
    'kép10.jpg',
    'kép11.jpg',
];

let currentIndex = 0;

function changeImage() {
    const imgElement = document.getElementById('image');
    imgElement.src = images[currentIndex];

    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // Visszaállítjuk az indexet az első képre
    }
}

// Képváltás 20 másodpercenként (2000 ms)
setInterval(changeImage, 2000);

// Az első kép betöltése
changeImage();
