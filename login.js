const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

const images = [
    'images/Fotolia_239116868_XL.jpg',
    'images/TomHegen.jpg',
    'images/Fotolia_251340105_XL.jpg',
    'images/TomHegen.jpg',
    'images/Fotolia_251340105_XL.jpg',
    'images/TomHegen.jpg',
    'images/Fotolia_251340105_XL.jpg',
    'images/Fotolia_239116868_XL.jpg' // Add as many as you like
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector('.body-container').style.backgroundImage = `url(${images[currentImageIndex]})`;
}

setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds