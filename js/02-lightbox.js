import { galleryItems } from './gallery-items.js';
// Change code below this line
const ul = document.querySelector(".gallery");
ul.remove();
const gallery = galleryItems.map(image => `<a class="gallery__item" href="${image.original}" onclick = "event.preventDefault()"><img class="gallery__image" src = "${image.preview}" alt = "${image.description}"/></a>`)
    .join("");

const script = document.querySelector("script");
const divGallery = document.createElement("div");
script.before(divGallery);
divGallery.setAttribute("class", "gallery galleryBox");

divGallery.insertAdjacentHTML("afterbegin", gallery);
console.log(galleryItems);



    let ligthBox = new SimpleLightbox('.gallery a', {
        captionData: "alt",
        captionPosition: "bottom",
        fadeSpeed: 250,
    })

    
    
