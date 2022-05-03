import * as basicLightbox from 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js'

/*рабочая часть*/
import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = galleryItems.map(image => `<a class="gallery__link" href="${image.original}" onclick = "event.preventDefault()"><img class="gallery__image" src = "${image.preview}" data-source="${image.original}" alt = "${image.description}"/></a>`)
    .join("");

const divGallery = document.querySelector(".gallery");
divGallery.setAttribute("class", "gallery gallery__item");

divGallery.insertAdjacentHTML("afterbegin", gallery);
console.log(galleryItems);

divGallery.addEventListener("click", openModal);

function openModal(e) {
    if (!e.target.classList.contains("gallery__image")) {
        return;
    }
    /*рабочая часть*/

        const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${image.original}"/> 
    </div>
`)

        instance.show()
            
        
    }


/*basicLightbox.create(`<img src="${image.original}"/>`).show()
    /*document.querySelector(".gallery__image").onclick = () => {
        
    }*/


/*код с сайта
const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`)

instance.show()
*/
