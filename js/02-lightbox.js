import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = galleryItems.map(image => `<a class="gallery__item" href="${image.original}" onclick = "event.preventDefault()"><img class="gallery__image" src = "${image.preview}" data-source="${image.original}" alt = "${image.description}"/></a>`)
    .join("");

const divGallery = document.querySelector(".gallery");
divGallery.setAttribute("class", "gallery galleryBox");

divGallery.insertAdjacentHTML("afterbegin", gallery);
console.log(galleryItems);

console.log(galleryItems);


    let ligthBox = new SimpleLightbox('.gallery a', {
        captionData: "alt",
        captionPosition: "bottom",
        fadeSpeed: 250,
    })

    ligthBox.on("show.simplelightbox", function () {
        /*something*/
    })
