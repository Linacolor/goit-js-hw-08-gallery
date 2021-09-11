import galleryItems from '../js/items.js'

const galleryEl = document.querySelector('.js-gallery')
// console.log(galleryEl)
const imageMarkup = createImageCardMarkup(galleryItems)

galleryEl.insertAdjacentHTML('beforeend', imageMarkup)

function createImageCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    })
    .join('')
}

galleryEl.addEventListener('click', onImageClick)

function onImageClick(event) {
  // console.log(event.target.nodeName)
  if (event.target.nodeName !== 'IMG') {
    return
  }
}
// const modal = document.querySelector('js-lightbox')
// // console.log(modal)
// modal.addEventListener('click', closeModal)
// function closeModal() {}
