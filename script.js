const openImage = document.getElementById('open-image');
const backImage = document.getElementById("image-full");
const closeButton = document.querySelector('.bg-close');

closeButton.addEventListener('click', () => {
  openImage.style.display = "none";
  openImage.removeChild(document.getElementById("image-full"));
});

function getCertificate(fileName) {
  openImage.insertAdjacentHTML('beforeend', `<img class="back-content" id="image-full" src="assets/img/${fileName}.jpg" alt="certificate">`);
  openImage.style.display = "block";
}