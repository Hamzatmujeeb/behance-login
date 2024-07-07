// JavaScript in main.js file or within <script> tag at the end of HTML body
/*function handleResize() {
    const behanceHeader = document.querySelector('.behance-header');
    const formContainer = document.querySelector('.form-container');

    if (window.innerWidth <= 480) {
        if (!formContainer.contains(behanceHeader)) {
            formContainer.insertBefore(behanceHeader, formContainer.firstChild);
        }
    } else {
        if (document.body.contains(behanceHeader) && formContainer.contains(behanceHeader)) {
            document.body.insertBefore(behanceHeader, document.body.firstChild);
        }
    }
}

window.addEventListener('resize', handleResize);
handleResize(); // Initial call to handleResize on page load*/

const images = [
    'images/Fotolia_239116868_XL.jpg',
    'images/TomHegen.jpg',
    'images/Fotolia_251340105_XL.jpg',
    'images/TomHegen.jpg',
    'images/Fotolia_251340105_XL.jpg',
    'images/TomHegen.jpg',
    'images/Fotolia_251340105_XL.jpg',
    'images/TomHegen.jpg',
    'images/Fotolia_251340105_XL.jpg',
    'images/Fotolia_239116868_XL.jpg'
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector('.body-container').style.backgroundImage = `url(${images[currentImageIndex]})`;
}

setInterval(changeBackgroundImage, 5000);

